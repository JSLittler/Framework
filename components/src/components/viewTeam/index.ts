import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';
import getPlayerTable from '../getPlayerTable';

@customElement('wc-view-team')
export default class WcViewTeam extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property()
    team?: string;

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
    
  viewPlayer = (e: any) => {
    const viewPlayerUrl = this.pageLinks.viewPlayer.replace(':team', this.team);

    e.target.dispatchEvent(new CustomEvent('updatePage', {
        bubbles: true,
        detail: {
            endpoint: `${viewPlayerUrl}${e.target.value}`
        }
    }));
  };

    render() {
        this.setAttribute('id', this.id);
        const squad = this.team === this.playersTeam.name ? this.playersTeam.squad : this.oppositionTeams.find((t: any) => t.name === this.team).squad;
        const { goalKeepers, defenders, midfielders, forwards } = squad;

        return html`
            <div id=${this.id}>
                <h2>${this.username}, here are the players in the ${this.team} squad</h2>
                <p>Click on a player to view their attributes in detail, or return to the dashboard</p>
                ${getPlayerTable('goalKeepers', goalKeepers, this.viewPlayer)}
                ${getPlayerTable('defenders', defenders, this.viewPlayer)}
                ${getPlayerTable('midfielders', midfielders, this.viewPlayer)}
                ${getPlayerTable('forwards', forwards, this.viewPlayer)}
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
        `;
    };
};
