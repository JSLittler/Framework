import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-end-season')
export default class WcEndSeason extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property()
    playersTeam?: any;

    @property()
    season: any = 2;

    @property({ type: Object })
    prevSeasons?: any;

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

    getStandings() {
        return this.prevSeasons.find((s: any) => s.season === this.season - 1).table.map((team: any, index: any) => {
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
        if (!this.prevSeasons?.length) return html``;

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
                <h2>${this.username}, here are the final standings for last season</h2>
                ${this.getLeagueTable()}
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
        `;
    };
};
