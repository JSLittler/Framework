import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-main')
export default class WcMain extends WcDynamicInteractiveElement {
  render() {
    return html`<main>Main Content Goes here</main>`;
  };
};
