import { html } from 'lit';

const getAttributeColumnTitles = (position: string) => {
    if ( position === 'goalKeepers') {
        return html`<th>Overall</th>`;
    }

    return html`
        <th>Defence</th>
        <th>Midfield</th>
        <th>Attack</th>
    `
};

const getAttributeColumnValues = (position: string, player: any) => {
    if ( position === 'goalKeepers') {
        return html`<td>${player.attributesAverages[0].attributeFinalValue}</td>`;
    }

    return html`
        <td>${player.attributesAverages.find((a: any) => a.attributeName === 'defenceAverage').attributeFinalValue}</td>
        <td>${player.attributesAverages.find((a: any) => a.attributeName === 'midfieldAverage').attributeFinalValue}</td>
        <td>${player.attributesAverages.find((a: any) => a.attributeName === 'attackAverage').attributeFinalValue}</td>
    `
};

const getPlayerTable = (position: string, players: any, playerCallback: any, highlightPlayerCallback = (playerName: any) => false) => {
    return html`<div class="div-padding-bottom">
    <table class="player-table">
      <thead>
        <tr>
          <th colSpan="10">${position}</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Club</th>
          <th>Positions</th>
          ${getAttributeColumnTitles(position)}
        </tr>
      </thead>
      <tbody>
        ${players.map((p: any) => {
          return html`
            <tr>
              <td>
                <button type="button" value=${p.name} @click=${playerCallback} class=${highlightPlayerCallback(p.name) ? 'button-small-selected' : 'button-small'}>
                  ${p.name}
                </button>
              </td>
              <td>${p.club}</td>
              ${html`<td>${p.positions.map((pos: any) => html`<td>${pos}</td>`)}</td>`}
              ${getAttributeColumnValues(position, p)}
            </tr>
          `;
        })}
      </tbody>
    </table>
  </div>`
};

export default getPlayerTable;
