import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-transfers')
export default class WcTransfers extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property({ type: Object })
    playersTeam?: any;

    @property({ type: Object })
    transferList?: any;

    @property()
    pageLinks?: any;

    @property()
    incomingTransfer?: any

    @property()
    outgoingTransfer?: any

    goToPage = (e: any) => {
        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: e.target.value
            }
        }));
    };

    setIncomingTransfer = (e: any) => {
        this.incomingTransfer = this.incomingTransfer === e.target.value ? '' : e.target.value;
    };

    setOutgoingTransfer = (e: any) => {
        this.outgoingTransfer = this.outgoingTransfer === e.target.value ? '' : e.target.value;
    };

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

    getPlayerTable = (position: string, players: any, setTransfer: any) => {
        return html`<div>
        <table class="player-table">
          <thead>
            <tr>
              <th colSpan="10"><p>${position}</p></th>
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
                    <button type="button" value=${p.name} @click=${setTransfer} class=${this.incomingTransfer === p.name || this.outgoingTransfer === p.name ? "button-small-selected" : "button-small"}>
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

    getPlayersToTransfer = (position: any, subPosition: any, playerGroup: any) => {
        if(!this.incomingTransfer) {
          return false;
        }

        const transferPlayer = this.transferList?.squad[`${position}`].find((p: any) => p.name === this.incomingTransfer);
        const positionInView = subPosition.map((p: any) => transferPlayer?.positions.includes(p));
        
        return positionInView.includes(true) ? this.getPlayerTable(position, playerGroup, this.setOutgoingTransfer) : ``;
    };

    confirmTransfer = (e: any) => {
        if (!this.incomingTransfer || !this.outgoingTransfer) return;

        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: `slm/game/transfers/outgoing/${this.outgoingTransfer}/incoming/${this.incomingTransfer}`
            }
        }));
    };

    render() {
        this.setAttribute('id', this.id);
        const { goalKeepers, defenders, midfielders, forwards } = this.playersTeam.squad;

        return html`
        <div class="div-padding-bottom">
            <h2>${this.username}, select a player to compare or swap into your squad</h2>
            ${this.getPlayerTable('goalKeepers', this.transferList.squad.goalKeepers, this.setIncomingTransfer)}
            ${this.getPlayerTable('defenders', this.transferList.squad.defenders, this.setIncomingTransfer)}
            ${this.getPlayerTable('midfielders', this.transferList.squad.midfielders, this.setIncomingTransfer)}
            ${this.getPlayerTable('forwards', this.transferList.squad.forwards, this.setIncomingTransfer)}
            <div class="div-padding-top" style=${this.incomingTransfer ? 'display: block;' : 'display: none;'}>
            <h2>now select a player from your squad to swap out</h2>
                ${this.getPlayersToTransfer('goalKeepers', ["GK"], goalKeepers)}
                ${this.getPlayersToTransfer('defenders', ["RD", "CD", "LD"], defenders)}
                ${this.getPlayersToTransfer('midfielders', ["RM", "CM", "LM"], midfielders)}
                ${this.getPlayersToTransfer('forwards', ["LF", "CF", "RF", "S"], forwards)}
            </div>
            <button
                id="confirm-transfer-button"
                type="button"
                class="button"
                style=${this.incomingTransfer && this.outgoingTransfer ? '' : 'display: none;'}
                @click=${this.confirmTransfer}
            >
                Confirm Transfer
            </button>
            <button id="dashboard-button" type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
        </div>
        `;
    };
};



    