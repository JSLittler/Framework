import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

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
    }

    getAttributeColumnTitles = (position: string) => {
        if ( position === 'goalKeepers') {
            return html`<th>Overall</th>`;
        }

        return html`
            <th>Defence</th>
            <th>Midfield</th>
            <th>Attack</th>
        `
    };

    getAttributeColumnValues = (position: string, player: any) => {
        if ( position === 'goalKeepers') {
            return html`<td>${player.attributesAverages[0].attributeFinalValue}</td>`;
        }

        return html`
            <td>${player.attributesAverages.find((a: any) => a.attributeName === 'defenceAverage').attributeFinalValue}</td>
            <td>${player.attributesAverages.find((a: any) => a.attributeName === 'midfieldAverage').attributeFinalValue}</td>
            <td>${player.attributesAverages.find((a: any) => a.attributeName === 'attackAverage').attributeFinalValue}</td>
        `
    };

    getPlayerTable = (position: string, players: any) => {
        return html`<div>
        <table class="table">
          <thead>
            <tr>
              <th><h2>${position}</h2></th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Club</th>
              <th>Positions</th>
              ${this.getAttributeColumnTitles(position)}
            </tr>
          </thead>
          <tbody>
            ${players.map((p: any) => {
              return html`
                <tr>
                  <td>
                    <button type="button" value=${p.name} @click=${this.viewPlayer} class="button-small">
                      ${p.name}
                    </button>
                  </td>
                  <td>${p.club}</td>
                  ${html`<td>${p.positions.map((pos: any) => html`<td>${pos}</td>`)}</td>`}
                  ${this.getAttributeColumnValues(position, p)}
                </tr>
              `;
            })}
          </tbody>
        </table>
      </div>`
    };

    render() {
        this.setAttribute('id', this.id);
        const squad = this.team === this.playersTeam.name ? this.playersTeam.squad : this.oppositionTeams.find((t: any) => t.name === this.team).squad;
        const { goalKeepers, defenders, midfielders, forwards } = squad;

        return html`
            <div id=${this.id}>
                <h2>${this.username}, here are the players in the ${this.team} squad</h2>
                <p>Click on a player to view their attributes in detail, or return to the dashboard</p>
                ${this.getPlayerTable('goalKeepers', goalKeepers)}
                ${this.getPlayerTable('defenders', defenders)}
                ${this.getPlayerTable('midfielders', midfielders)}
                ${this.getPlayerTable('forwards', forwards)}
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
        `;
    };
};
