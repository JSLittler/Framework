import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-header')
export default class WcHeader extends WcDynamicInteractiveElement {
  render() {
    return html`<header>
        <div>${unsafeHTML(this.value)}</div>
        <div>${Math.random() * 10}</div>
      </header>`;
  };
};
