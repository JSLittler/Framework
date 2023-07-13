import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-select-game')
export default class WcSelectGame extends WcDynamicInteractiveElement {
  @property({ attribute: false })
  username: string = '';
  
  @property({ attribute: false })
  savedGame?: any;

  async newGameRequest(e: any) {
    e.target.dispatchEvent(new CustomEvent('updatePage', {
      bubbles: true,
      detail: {
        endpoint: this.endpoint
      }
    }));
  };

  render() {
    const username = this.getAttribute('username');
    
    const savedGameElement = html`
        <div id="saved-game" className="savedGame">
            <h2>you have a game saved</h2>
            <div>
              <p>Your Team: {game?.playersTeam?.name}</p>
              <p>Game Week: {game?.gameWeek}</p>
            </div>
            <button id="load-game-button" type="submit">Continue this game</button>
            <p>Starting a new game will overwrite your saved game</p>
        </div>
    `

    const noSavedGameElement = html`
        <div>
            <p>You do not currently have any saved games</p>
        </div>
    `

    const displayGame = () => this.savedGame?.playersTeam ? savedGameElement : noSavedGameElement;

    return html`
        <div>
            <h2>Hi ${username},</h2>
            ${displayGame()}
            <button id="new-game-button" type="button" @click=${this.newGameRequest} className="button">Start a new game</button>
      </div>
    `;
  };
};
