var mt=Object.defineProperty,Tt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var pt=(r,t,e)=>t in r?mt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,q=(r,t)=>{for(var e in t||(t={}))Mt.call(t,e)&&pt(r,e,t[e]);if(ut)for(var e of ut(t))Lt.call(t,e)&&pt(r,e,t[e]);return r},V=(r,t)=>Tt(r,Ht(t));var m=(r,t,e,s)=>{for(var i=s>1?void 0:s?Rt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&mt(t,e,i),i};var G=(r,t,e)=>new Promise((s,i)=>{var o=l=>{try{d(e.next(l))}catch(a){i(a)}},n=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,n);d((e=e.apply(r,t)).next())});var z=window,B=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),yt=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}},I=r=>new O(typeof r=="string"?r:r+"",void 0,J),Q=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new O(e,r,J)},X=(r,t)=>{B?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},D=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return I(e)})(r):r;var Y,K=window,vt=K.trustedTypes,jt=vt?vt.emptyScript:"",$t=K.reactiveElementPolyfillSupport,tt={toAttribute(r,t){switch(t){case Boolean:r=r?jt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},ft=(r,t)=>t!==r&&(t==t||r==r),W={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:ft},g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(D(i))}else t!==void 0&&e.push(D(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return X(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=W){var i;let o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){let n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:tt).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=i.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:tt;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ft)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return G(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},$t==null||$t({ReactiveElement:g}),((Y=K.reactiveElementVersions)!==null&&Y!==void 0?Y:K.reactiveElementVersions=[]).push("1.6.1");var et,Z=window,x=Z.trustedTypes,gt=x?x.createPolicy("lit-html",{createHTML:r=>r}):void 0,it="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+b,Ft=`<${wt}>`,k=document,R=()=>k.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Ct=Array.isArray,qt=r=>Ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",st=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,bt=/>/g,S=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,St=/"/g,xt=/^(?:script|style|textarea|title)$/i,kt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=kt(1),Wt=kt(2),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Et=new WeakMap,C=k.createTreeWalker(k,129,null,!1),Vt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=T;for(let l=0;l<e;l++){let a=r[l],f,h,u=-1,$=0;for(;$<a.length&&(n.lastIndex=$,h=n.exec(a),h!==null);)$=n.lastIndex,n===T?h[1]==="!--"?n=_t:h[1]!==void 0?n=bt:h[2]!==void 0?(xt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=S):h[3]!==void 0&&(n=S):n===S?h[0]===">"?(n=i!=null?i:T,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,f=h[1],n=h[3]===void 0?S:h[3]==='"'?St:At):n===St||n===At?n=S:n===_t||n===bt?n=T:(n=S,i=void 0);let j=n===S&&r[l+1].startsWith("/>")?" ":"";o+=n===T?a+Ft:u>=0?(s.push(f),a.slice(0,u)+it+a.slice(u)+b+j):a+b+(u===-2?(s.push(void 0),l):j)}let d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gt!==void 0?gt.createHTML(d):d,s]},P=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,d=t.length-1,l=this.parts,[a,f]=Vt(t,e);if(this.el=P.createElement(a,s),C.currentNode=this.el.content,e===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=C.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(it)||u.startsWith(b)){let $=f[n++];if(h.push(u),$!==void 0){let j=i.getAttribute($.toLowerCase()+it).split(b),F=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:F[2],strings:j,ctor:F[1]==="."?ot:F[1]==="?"?nt:F[1]==="@"?lt:U})}else l.push({type:6,index:o})}for(let u of h)i.removeAttribute(u)}if(xt.test(i.tagName)){let h=i.textContent.split(b),u=h.length-1;if(u>0){i.textContent=x?x.emptyScript:"";for(let $=0;$<u;$++)i.append(h[$],R()),C.nextNode(),l.push({type:2,index:++o});i.append(h[u],R())}}}else if(i.nodeType===8)if(i.data===wt)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(t,e){let s=k.createElement("template");return s.innerHTML=t,s}};function N(r,t,e=r,s){var i,o,n,d;if(t===E)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=N(r,l._$AS(r,t.values),l,s)),t}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:k).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let f;a.type===2?f=new w(n,n.nextSibling,this,t):a.type===1?f=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(f=new at(n,this,t)),this._$AV.push(f),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=C.nextNode(),d++)}return o}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},w=class{constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{let n=new rt(o,this),d=n.u(this.options);n.v(s),this.$(d),this._$AH=n}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new P(t)),e}T(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new w(this.k(R()),this.k(R()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},U=class{constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=N(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let d=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=N(this,d[s+l],e,l),a===E&&(a=this._$AH[l]),n||(n=!H(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ot=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},zt=x?x.emptyScript:"",nt=class extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,zt):this.element.removeAttribute(this.name)}},lt=class extends U{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=N(this,t,e,0))!==null&&s!==void 0?s:p)===E)return;let i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var Pt=Z.litHtmlPolyfillSupport;Pt==null||Pt(P,w),((et=Z.litHtmlVersions)!==null&&et!==void 0?et:Z.litHtmlVersions=[]).push("2.7.2");var Nt=(r,t,e)=>{var s,i;let o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new w(t.insertBefore(R(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n};var dt,ht;var A=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};A.finalized=!0,A._$litElement$=!0,(dt=globalThis.litElementHydrateSupport)===null||dt===void 0||dt.call(globalThis,{LitElement:A});var Ut=globalThis.litElementPolyfillSupport;Ut==null||Ut({LitElement:A});((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.3.1");var Ot=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{let{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);var Bt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?V(q({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function y(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):Bt(r,t)}var ct,Ne=((ct=window.HTMLSlotElement)===null||ct===void 0?void 0:ct.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var _=class extends A{createRenderRoot(){return this}static get styles(){return Q`${I(document.getElementById("global-styles"))}`}};m([y({reflect:!0})],_.prototype,"id",2),m([y()],_.prototype,"componentTitle",2),m([y()],_.prototype,"endpoint",2),m([y()],_.prototype,"value",2);var It=r=>r==="goalKeepers"?c`<th>Overall</th>`:c`
        <th>Defence</th>
        <th>Midfield</th>
        <th>Attack</th>
    `,Dt=(r,t)=>r==="goalKeepers"?c`<td>${t.attributesAverages[0].attributeFinalValue}</td>`:c`
        <td>${t.attributesAverages.find(e=>e.attributeName==="defenceAverage").attributeFinalValue}</td>
        <td>${t.attributesAverages.find(e=>e.attributeName==="midfieldAverage").attributeFinalValue}</td>
        <td>${t.attributesAverages.find(e=>e.attributeName==="attackAverage").attributeFinalValue}</td>
    `,Kt=(r,t,e,s=i=>!1)=>c`<div class="div-padding-bottom">
    <table class="player-table">
      <thead>
        <tr>
          <th colSpan="10">${r}</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Club</th>
          <th>Positions</th>
          ${It(r)}
        </tr>
      </thead>
      <tbody>
        ${t.map(i=>c`
            <tr>
              <td>
                <button type="button" value=${i.name} @click=${e} class=${s(i.name)?"button-small-selected":"button-small"}>
                  ${i.name}
                </button>
              </td>
              <td>${i.club}</td>
              ${c`<td>${i.positions.map(o=>c`<td>${o}</td>`)}</td>`}
              ${Dt(r,i)}
            </tr>
          `)}
      </tbody>
    </table>
  </div>`,L=Kt;var v=class extends _{constructor(){super(...arguments);this.username=null;this.goToPage=e=>{e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:e.target.value}}))};this.saveTeam=e=>{e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:e.target.value,body:{tactics:{formation:this.selectedFormation,selectedTeam:this.teamShape}}}}))};this.setPlayerInView=e=>{this.playerInView=e.target.value};this.setTeamShape=e=>{var s,i,o,n;if(this.selectedFormation===((i=(s=this.playersTeam)==null?void 0:s.tactics)==null?void 0:i.formation))return this.teamShape=(n=(o=this.playersTeam)==null?void 0:o.tactics)==null?void 0:n.selectedTeam;this.teamShape=this.formations.find(d=>d.name===e).teamShape};this.setSelectedFormation=e=>{this.selectedFormation=e.target.value,this.setTeamShape(e.target.value)};this.setSelectedPosition=e=>{this.selectedPosition=e.target.value};this.getPlayerInPosition=e=>e.find(s=>s.name===this.playerInView)||null;this.getPositionSelect=(e,s)=>c`
            <table class="table-centered">
                <tr>
                    ${this.teamShape[s].map(i=>{var n;let o=`${i.player}`||"please select";return c`
                            <td>
                                <button type="button" value=${`${s}--${i.position}`} @click=${this.setSelectedPosition} class=${i.position===((n=this.selectedPosition)==null?void 0:n.split("--")[1])?"button-two-lines-selected":"button-two-lines"}>
                                    <p>${i.position}</p>
                                    <p>${o}</p>
                                </button>
                            </td>
                        `})}
                </tr>
            </table>
        `;this.getPositions=()=>{let{goalkeeper:e,defence:s,midfield:i,forwards:o}=this.teamShape;return c`
            <table id='positions' class="table-centered">
                <thead>
                    <tr>
                        <th colSpan="4">Select your team</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.getPositionSelect(e,"goalkeeper")}
                    ${this.getPositionSelect(s,"defence")}
                    ${this.getPositionSelect(i,"midfield")}
                    ${this.getPositionSelect(o,"forwards")}
            </tbody>
          </table>
        `};this.isPlayerAlreadySelected=e=>{let s=!1;return Object.keys(this.teamShape).forEach(i=>this.teamShape[i].forEach(o=>{o.player===e&&(s=!0)})),s};this.viewSelectPlayer=e=>{if(!this.selectedPosition){let o=this.pageLinks.viewPlayer.replace(":team",this.playersTeam.name);return e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:`${o}${e.target.value}`}}))}let s=this.selectedPosition.split("--")[0],i=this.selectedPosition.split("--")[1];this.isPlayerAlreadySelected(e.target.value)||(this.teamShape[s].find(o=>o.position===i).player=e.target.value),this.selectedPosition=""};this.getFormations=()=>{var e;return c`
            <div>
                <table id='squad' class="table-centered">
                    <thead>
                        <tr>
                            <th colspan="4">Select formation</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(e=this.formations)==null?void 0:e.map((s,i)=>i%2!==0?c`
                                <tr>
                                    <td>
                                        <button
                                            id=${`${s.name}-button`}
                                            type="button"
                                            value=${s.name}
                                            @click=${this.setSelectedFormation}
                                            class=${s.name!==this.selectedFormation?"button-small":"button-small-selected"}
                                        >
                                            ${s.name}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            id=${`${this.formations[i-1].name}-button`}
                                            type="button"
                                            value=${this.formations[i-1].name}
                                            @click=${this.setSelectedFormation}
                                            class=${this.formations[i-1].name!==this.selectedFormation?"button-small":"button-small-selected"}
                                        >
                                            ${this.formations[i-1].name}
                                        </button>
                                    </td>
                                </tr>
                            `:c``)}
                    </tbody>
                </table>
                
            </div>
        `};this.displayPositions=()=>this.selectedFormation?c`${this.getPositions()}`:"";this.displayPlayers=()=>{var e;if(this.selectedFormation){let{goalKeepers:s,defenders:i,midfielders:o,forwards:n}=(e=this.playersTeam)==null?void 0:e.squad,d=this.selectedFormation&&this.selectedPosition?c`<p>Select a player to play ${this.selectedPosition}, by clicking on their name</p>`:c``;return c`
                ${d}
                ${L("goalKeepers",s,this.viewSelectPlayer,this.isPlayerAlreadySelected)}
                ${L("defenders",i,this.viewSelectPlayer,this.isPlayerAlreadySelected)}
                ${L("midfielders",o,this.viewSelectPlayer,this.isPlayerAlreadySelected)}
                ${L("forwards",n,this.viewSelectPlayer,this.isPlayerAlreadySelected)}
            `}return c``}}render(){return c`
            <div class="div-padding-bottom">
                <h1>${this.username}, pick your team for matchday</h1>
                <div id="pick-team" data-test="pick-team" className={styles.pickTeam}>
                    ${this.getFormations()}
                    ${this.displayPositions()}
                    ${this.displayPlayers()}
                </div>
                <button type="button" value=${this.pageLinks.saveTeam} @click=${this.saveTeam}>Confirm Team Selection</button>
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
            
        `}};m([y()],v.prototype,"username",2),m([y()],v.prototype,"pageLinks",2),m([y({type:Object})],v.prototype,"playersTeam",2),m([y({type:Object})],v.prototype,"fixtures",2),m([y({type:Object})],v.prototype,"formations",2),m([y()],v.prototype,"playerInView",2),m([y()],v.prototype,"selectedFormation",2),m([y()],v.prototype,"teamShape",2),m([y()],v.prototype,"selectedPosition",2),v=m([Ot("wc-pick-team")],v);export{v as default};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=pick-team.js.map
