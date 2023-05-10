import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import changeAttribute from '../utils/changeAttribute';

@customElement('wc-dynamic-interactive-element')
export default class WcDynamicInteractiveElement extends LitElement {
    @property()
    id!: string;

    @property()
    value?: any;

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
