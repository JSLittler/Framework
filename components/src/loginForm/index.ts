import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import WcDynamicInteractiveElement from '../dynamicInterativeElement';

@customElement('wc-login-form')
export default class WcLoginForm extends WcDynamicInteractiveElement {
  render() {
    return html`<div id="login-form">
        <h1>SLM is available by invitation only.</h1>
        <h2>To play, please log into your account:</h2>
        <p id="message" class="message">{loginMessage here}</p>
        <form id="login-form" class="login-form">
            <label htmlFor="usernameInput">Username: </label>
            <input autoFocus id="usernameInput" name="username" placeholder="enter username" maxLength="10" required/>
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" type="password" placeholder="enter password" maxLength="10" required/>
            <button id="login-button" type="submit">Log in</button>
        </form>
    </div>`;
  };
};
