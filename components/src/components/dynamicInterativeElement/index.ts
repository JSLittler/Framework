import { LitElement, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

export default class WcDynamicInteractiveElement extends LitElement {
    @property()
    id!: string;

    @property()
    componentTitle?: string;

    @property()
    endpoint?: string;

    @property()
    value?: any;

    createRenderRoot() {
        return this;
    }

    static get styles() {
        return css`${unsafeCSS(document.getElementById('global-styles'))}`;
    }
};
