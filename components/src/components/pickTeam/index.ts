import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';
import getPlayerTable from '../getPlayerTable';

@customElement('wc-pick-team')
export default class WcPickTeam extends WcDynamicInteractiveElement {
    @property()
    username: string | null = null;

    @property()
    pageLinks?: any;

    @property({ type: Object })
    playersTeam?: any;

    @property({ type: Object })
    fixtures?: any;

    @property({ type: Object })
    formations?: any;

    @property()
    playerInView?: any;

    @property()
    selectedFormation?: any;

    @property()
    teamShape?: any;

    @property()
    selectedPosition?: any;

    goToPage = (e: any) => {
        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: e.target.value
            }
        }));
    };

    saveTeam = (e: any) => {
        e.target.dispatchEvent(new CustomEvent('updatePage', {
            bubbles: true,
            detail: {
                endpoint: e.target.value,
                body: {
                    tactics: {
                        formation: this.selectedFormation,
                        selectedTeam: this.teamShape
                    }
                }
            }
        }));
    };

    setPlayerInView = (e: any) => {
        this.playerInView = e.target.value;
    };

    setTeamShape = (formation: any) => {
        if (this.selectedFormation === this.playersTeam?.tactics?.formation) {
            return this.teamShape = this.playersTeam?.tactics?.selectedTeam
        }

        this.teamShape = this.formations.find((f: any) => f.name === formation).teamShape;
    };

    setSelectedFormation = (e: any) => {
        this.selectedFormation = e.target.value;
        this.setTeamShape(e.target.value);
    };

    setSelectedPosition = (e: any) => {
        this.selectedPosition = e.target.value;
    };

    getPlayerInPosition = (posPlayerGroup: any) => {
        return posPlayerGroup.find((p: any) => p.name === this.playerInView) || null;
    }
    
    getPositionSelect = (posPlayerGroup: any, position: any) => {
        return html`
            <table class="table-centered">
                <tr>
                    ${this.teamShape[position].map((p: any) => {
                        const playerName = `${p.player}` || 'please select';
                        return html`
                            <td>
                                <button type="button" value=${`${position}--${p.position}`} @click=${this.setSelectedPosition} class=${p.position === this.selectedPosition?.split('--')[1] ? 'button-two-lines-selected' : 'button-two-lines'}>
                                    <p>${p.position}</p>
                                    <p>${playerName}</p>
                                </button>
                            </td>
                        `;
                
                    }
            )}
                </tr>
            </table>
        `;
    };
    
    getPositions = () => {
        const { goalkeeper, defence, midfield, forwards } = this.teamShape;
    
        return html`
            <table id='positions' class="table-centered">
                <thead>
                    <tr>
                        <th colSpan="4">Select your team</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.getPositionSelect(goalkeeper, 'goalkeeper')}
                    ${this.getPositionSelect(defence, 'defence')}
                    ${this.getPositionSelect(midfield, 'midfield')}
                    ${this.getPositionSelect(forwards, 'forwards')}
            </tbody>
          </table>
        `;
    };

    isPlayerAlreadySelected = (player: any) => {
        let containsPlayer = false;

        Object.keys(this.teamShape).forEach((key: any) => this.teamShape[key].forEach((pos: any) => {
            if (pos.player === player) {
                containsPlayer = true
            }
        }));

        return containsPlayer;
    };

    viewSelectPlayer = (e: any) => {
        if (!this.selectedPosition) {
            console.log('viewPlayer: ', this.pageLinks.viewPlayer);
            const viewPlayerUrl = this.pageLinks.viewPlayer.replace(':team', this.playersTeam.name);
    
            return e.target.dispatchEvent(new CustomEvent('updatePage', {
                bubbles: true,
                detail: {
                    endpoint: `${viewPlayerUrl}${e.target.value}`
                }
            }));
        }

        const playerGroup = this.selectedPosition.split('--')[0];
        const position = this.selectedPosition.split('--')[1];

        if (!this.isPlayerAlreadySelected(e.target.value)) {
            this.teamShape[playerGroup].find((pos: any) => pos.position === position).player = e.target.value;
        };
        this.selectedPosition = '';
    };
    
    getFormations = () => {
        return html`
            <div>
                <table id='squad' class="table-centered">
                    <thead>
                        <tr>
                            <th colspan="4">Select formation</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.formations?.map((f: any, index: any) => {
                            const isOdd = index % 2 !== 0;
                            if(!isOdd) return html``
                            return html`
                                <tr>
                                    <td>
                                        <button
                                            id=${`${f.name}-button`}
                                            type="button"
                                            value=${f.name}
                                            @click=${this.setSelectedFormation}
                                            class=${f.name !== this.selectedFormation ? 'button-small' : 'button-small-selected'}
                                        >
                                            ${f.name}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            id=${`${this.formations[index -1].name}-button`}
                                            type="button"
                                            value=${this.formations[index -1].name}
                                            @click=${this.setSelectedFormation}
                                            class=${this.formations[index -1].name !== this.selectedFormation ? 'button-small' : 'button-small-selected'}
                                        >
                                            ${this.formations[index -1].name}
                                        </button>
                                    </td>
                                </tr>
                            `
                        })}
                    </tbody>
                </table>
                
            </div>
        `;
    };

    displayPositions = () => {
        return this.selectedFormation ? html`${this.getPositions()}` : ``
    }

    displayPlayers = () => {
        if(this.selectedFormation) {
            const { goalKeepers, defenders, midfielders, forwards } = this.playersTeam?.squad;

            const text = this.selectedFormation && this.selectedPosition ? html`<p>Select a player to play ${this.selectedPosition}, by clicking on their name</p>` : html``;
            return html`
                ${text}
                ${getPlayerTable('goalKeepers', goalKeepers, this.viewSelectPlayer, this.isPlayerAlreadySelected)}
                ${getPlayerTable('defenders', defenders, this.viewSelectPlayer, this.isPlayerAlreadySelected)}
                ${getPlayerTable('midfielders', midfielders, this.viewSelectPlayer, this.isPlayerAlreadySelected)}
                ${getPlayerTable('forwards', forwards, this.viewSelectPlayer, this.isPlayerAlreadySelected)}
            `
        };

        return html``;
    };
    
    render() {
        return html`
            <div class="div-padding-bottom">
                <h1>${this.username}, pick your team for matchday</h1>
                <div id="pick-team" data-test="pick-team" className={styles.pickTeam}>
                    ${this.getFormations()}
                    ${this.displayPositions()}
                    ${this.displayPlayers()}
                </div>
                <button type="button" value=${this.pageLinks.saveTeam} @click=${this.saveTeam}>Confirm Team Selection</button>
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
            
        `;
    };
};

