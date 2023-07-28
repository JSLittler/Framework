import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-play-game')
export default class WcPlayGame extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property()
    playersTeam?: any;

    @property({ type: Object })
    leagueTable?: any;

    @property()
    gameWeek?: any;

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
    };

    getResultsTable() {
        if (!this.fixtures) {
            return html``;
        }

        const results = this.fixtures[this.gameWeek - 2].fixtures;

        return html`
            <div>
                <table id='resultsTable' class="table">
                    <thead>
                        <tr>
                            <th colSpan="10"><h2>Game Week ${this.gameWeek} Results</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${results.map((r: any) => {
                            const [homeTeam, awayTeam] = Object.keys(r.result);

                            return html`<tr>
                                <td>
                                    <button type="button" class=${this.playersTeam.name === homeTeam ? 'button-small green-text' : 'button-small'} value=${homeTeam} @click=${this.goToTeam}>
                                        ${homeTeam}
                                    </button>
                                </td>
                                <td><b>${r.result[homeTeam]} - ${r.result[awayTeam]}</b></td>
                                <td>
                                    <button type="button" class=${this.playersTeam.name === awayTeam ? 'button-small green-text' : 'button-small'} value=${awayTeam} @click=${this.goToTeam}>
                                        ${awayTeam}
                                    </button>
                                </td>
                            </tr>`
                        })}
                    </tbody>
                </table>
            </div>
        `
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

    render() {
        return html`
            <div class="div-padding-bottom">
                <h2>${this.username}, here are the results for game week ${this.gameWeek}</h2>
                ${this.getResultsTable()}
                ${this.getLeagueTable()}
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
        `;
    };
};
