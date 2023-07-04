import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-header')
export default class WcHeader extends WcDynamicInteractiveElement {
  render() {
    return html`<header class="header">
        <h1 class="app-title">Sunday League Manager</h1>
        <p class="page-title">${unsafeHTML(this.value)}</p>
      </header>`;
  };
};
