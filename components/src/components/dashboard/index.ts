import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-dashboard')
export default class WcDashboard extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property({ type: Object })
    leagueTable?: any;

    @property()
    gameWeek?: any;

    @property({ type: Object })
    playersTeam?: any;

    @property({ type: Object })
    fixtures?: any;

    @property()
    pageLinks?: any;

    goToPage(e: any) {
        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: e.target.value
            }
        }));
    };

    goToTeam(e: any) {
        e.preventDefault();

        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: `${this.pageLinks.viewTeam}${e.target.value}`
            }
        }));
    }

    getStandings() {
        return this.leagueTable.map((team: any, index: any) => {
            const {
              name,
              played,
              won,
              lost,
              drawn,
              goalsFor,
              goalsAgainst,
              goalDifference,
              points,
            } = team;
        
            const teamRecord = html`
                <tr key=${index}>
                    <td>${index + 1}</td>
                    <td>
                        <button type="button" class=${this.playersTeam.name === name ? 'button-small green-text' : 'button-small'} value=${name} @click=${this.goToTeam}>
                            ${name}
                        </button>
                    </td>
                    <td>${played}</td>
                    <td>${won}</td>
                    <td>${drawn}</td>
                    <td>${lost}</td>
                    <td>${goalsFor}</td>
                    <td>${goalsAgainst}</td>
                    <td>${goalDifference}</td>
                    <td>${points}</td>
                </tr>
            `;
        
            return teamRecord;
          });
    };

    getLeagueTable() {
        if (!this.leagueTable) return html``;

        return html`
            <div>
                <table id='leagueTable' class="table">
                    <thead>
                        <tr>
                            <th colSpan="10"><h2>League Table</h2></th>
                        </tr>
                        <tr>
                            <th>Pos</th>
                            <th>Team</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Drawn</th>
                            <th>Lost</th>
                            <th>For</th>
                            <th>Against</th>
                            <th>Goal Diff +/-</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.getStandings()}
                    </tbody>
                </table>
            </div>
        `;
    };

    getNextGame = () => {
        if (!this.fixtures?.length) {
            return html`
              <div></div>
            `;
          }
        
          const gameWeekGames = this.fixtures.find((f: any) => f.gameWeek === this.gameWeek);
          const nextGame = gameWeekGames.fixtures.find((g: any) => g.home === this.playersTeam.name || g.away === this.playersTeam.name);
        
          return html`
            <div>
              <h2>Next game</h2>
                <p>(HOME) 
                    <span class=${this.playersTeam.name === nextGame.home ? 'green-text' : ''}>
                        ${nextGame.home}
                    </span>
                     vs 
                    <span class=${this.playersTeam.name === nextGame.away ? 'green-text' : ''}>
                        ${nextGame.away}
                    </span>
                     (AWAY)
                </p>
            </div>
          `
    };

    render() {
        return html`
            <div>
                <h2>${this.username}, use the navigation buttons to select your next action</h2>
                <button id="transfers-button" type="button" class="button-ball" value=${this.pageLinks.transfers} @click=${this.goToPage}>Transfers</button>
                <button id="pick-team-button" type="button" class="button-ball" value=${this.pageLinks.pickTeam} @click=${this.goToPage}>Pick Team</button>
                <button id="play-game-button" type="button" class="button-ball" value=${this.pageLinks.playGame} @click=${this.goToPage}>Play Game</button>
                ${this.getLeagueTable()}
                ${this.getNextGame()}
            </div>
        `;
    };
};