import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-footer')
export default class WcFooter  extends WcDynamicInteractiveElement {
  @property({ reflect: true, })
  id!: string;

  render() {
    return html` <footer class="footer">
        <h1 class="app-title">Sunday League Manager</h1>
        <p class="page-title">${unsafeHTML(this.value)}</p>
    </footer>`;
  }
};
