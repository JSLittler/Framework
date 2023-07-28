import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-view-player')
export default class WcViewTeam extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property()
    team?: any;

    @property()
    player?: any;

    @property({ type: Object })
    playersTeam?: any;

    @property({ type: Object })
    oppositionTeams?: any;

    @property()
    pageLinks?: any;

    goToPage = (e: any) => {
        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: e.target.value
            }
        }));
    };

    getPlayerInPosition = (posPlayerGroup: any) => {
        return posPlayerGroup.find((p: any) => p.name === this.player) || null;
    }

    getPlayer = () => {
        const { squad } = this.playersTeam.name === this.team ? this.playersTeam : this.oppositionTeams.find((t: any) => t.name === this.team);

        return Object.keys(squad).map(key => {
            return this.getPlayerInPosition(squad[key]);
        }).find((p: any) => p?.name === this.player);
    };

    render() {
        this.setAttribute('id', this.id);
        const { dashboard, viewTeam } = this.pageLinks;
        const teamLink = `${viewTeam}${this.team}`;
        const playerInView = this.getPlayer();

        return html`
            <div id=${this.id} class="div-padding-bottom">
                <h2>${this.username}, here are the stats for ${this.player}</h2>
                <p>Once you have completed your analysis, go back to his team page or return to the dashboard</p>
                <div>
                    <h2>${playerInView.name}</h2>
                    <h3>Club: ${playerInView.club}</h3>
                    <h3>Positions: ${playerInView.positions.map((p: any) => html`<span>${p} </span>`)}</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Base Level</th>
                                <th>Total Skill Level (Max 100)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${playerInView.attributes.map((a: any) =>
                                html`
                                    <tr>
                                        <td>${a.attributeName}</td>
                                        <td>${a.attributeBaseValue}</td>
                                        <td>${a.attributeFinalValue}</td>
                                    </tr>
                                `
                            )}
                        </tbody>
                    </table>
                    <p>Base Level is the lowest this player's can be rated for the attribute</p>
                    <p>Total Skill Level is this player's current ability, but this will change every season</p>
                </div>
                <button type="button" value=${teamLink} @click=${this.goToPage}>Back to ${this.team}</button>
                <button type="button" value=${dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
        `;
    };
};
