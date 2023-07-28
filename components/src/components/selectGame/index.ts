import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-select-game')
export default class WcSelectGame extends WcDynamicInteractiveElement {
  @property()
  username: string | null = null;
  
  @property({ type: Object})
  playersTeam?: any;

  @property()
  gameWeek: any;

  @property()
  savedGameEndpoint: any;

  async savedGameRequest(e: any) {
    e.target.dispatchEvent(new CustomEvent('updatePage', {
      bubbles: true,
      detail: {
        endpoint: this.savedGameEndpoint
      }
    }));
  };

  async newGameRequest(e: any) {
    e.target.dispatchEvent(new CustomEvent('updatePage', {
      bubbles: true,
      detail: {
        endpoint: this.endpoint
      }
    }));
  };

  render() {
    const savedGameElement = html`
        <div id="saved-game" class="saved-game">
            <h2>Hi ${this.username}, you have a game saved</h2>
            <div>
              <p>Your Team: ${this.playersTeam?.name}</p>
              <p>Game Week: ${this.gameWeek}</p>
            </div>
            <button id="load-game-button" type="button" @click=${this.savedGameRequest}>Continue this game</button>
            <p>Starting a new game will overwrite your saved game</p>
        </div>
    `

    const noSavedGameElement = html`
        <div>
            <p>Hi ${this.username}, you do not currently have any saved games</p>
        </div>
    `

    const displayGame = () => this.playersTeam ? savedGameElement : noSavedGameElement;

    return html`
        <div class="div-padding-bottom">
            ${displayGame()}
            <button id="new-game-button" type="button" @click=${this.newGameRequest}>Start a new game</button>
      </div>
    `;
  };
};
