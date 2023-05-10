import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wc-footer')
export default class WcFooter extends LitElement {
  @property({ reflect: true, })
  id!: string;

  render() {
    return html` <footer>
        <div>Goodbye World</div>
        <div>${Math.random() * 10}</div>
    </footer>`;
  }
};
