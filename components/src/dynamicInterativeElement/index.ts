import { LitElement, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

import changeAttribute from '../utils/changeAttribute';

export default class WcDynamicInteractiveElement extends LitElement {
    @property()
    id!: string;

    @property()
    value?: any;

    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css`${unsafeCSS(document.getElementById('global-styles'))}`;
    }

    addListener() {
        const id: string = this.id;

        return document.addEventListener(`change-value-${id}`, (event: any) => changeAttribute(id, 'value', event));
    }

    removeListener() {
        const id: string = this.id;

        return document.removeEventListener(`change-value-${id}`, (event: any) => changeAttribute(id, 'value', event));
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.addListener();
    };

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.removeListener();
    };
};
