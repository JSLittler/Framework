import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

const cdn = "http://localhost:4000/";

@customElement('wc-main')
export default class WcMain extends WcDynamicInteractiveElement {
  render() {
    const components: [any] = this.value;

    const mountScript = (name: string) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = `${cdn}${name}.js`;
    
      return document.head.appendChild(script);
    };

    const generateComponent = (name : string, props: [{ key: string, value: string}] ) => {
      const element: any = document.createElement(`wc-${name}`);
    
      if(props) {
        props.forEach(({ key, value }) => element[key] = value);
      }
    
      return element;
    };
    
    const children = components.map(({ name, props = {} }) => {
      mountScript(name);
      
      return generateComponent(name, props);
    });

    return html`<main id="content-container" class="panel">
      ${children}
    </main>`;
  };
};
