var pt=Object.defineProperty,Nt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var ct=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,j=(r,t)=>{for(var e in t||(t={}))Ht.call(t,e)&&ct(r,e,t[e]);if(ut)for(var e of ut(t))Lt.call(t,e)&&ct(r,e,t[e]);return r},V=(r,t)=>Nt(r,Ot(t));var p=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ut(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&pt(t,e,i),i};var Z=(r,t,e)=>new Promise((s,i)=>{var o=l=>{try{d(e.next(l))}catch(a){i(a)}},n=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,n);d((e=e.apply(r,t)).next())});var z=window,I=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),ft=new WeakMap,N=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(I&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ft.set(e,t))}return t}toString(){return this.cssText}},B=r=>new N(typeof r=="string"?r:r+"",void 0,J),G=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new N(e,r,J)},Q=(r,t)=>{I?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},D=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return B(e)})(r):r;var X,K=window,vt=K.trustedTypes,Mt=vt?vt.emptyScript:"",mt=K.reactiveElementPolyfillSupport,W={toAttribute(r,t){switch(t){case Boolean:r=r?Mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},$t=(r,t)=>t!==r&&(t==t||r==r),Y={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:$t},y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(D(i))}else t!==void 0&&e.push(D(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Q(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Y){var i;let o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){let n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=i.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:W;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return Z(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},mt==null||mt({ReactiveElement:y}),((X=K.reactiveElementVersions)!==null&&X!==void 0?X:K.reactiveElementVersions=[]).push("1.6.1");var tt,F=window,P=F.trustedTypes,gt=P?P.createPolicy("lit-html",{createHTML:r=>r}):void 0,st="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+A,qt=`<${Ct}>`,T=document,O=()=>T.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",xt=Array.isArray,jt=r=>xt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",et=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,_t=/>/g,S=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,bt=/"/g,wt=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=Pt(1),Gt=Pt(2),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),St=new WeakMap,w=T.createTreeWalker(T,129,null,!1),Vt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=U;for(let l=0;l<e;l++){let a=r[l],g,h,u=-1,v=0;for(;v<a.length&&(n.lastIndex=v,h=n.exec(a),h!==null);)v=n.lastIndex,n===U?h[1]==="!--"?n=yt:h[1]!==void 0?n=_t:h[2]!==void 0?(wt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=S):h[3]!==void 0&&(n=S):n===S?h[0]===">"?(n=i!=null?i:U,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,g=h[1],n=h[3]===void 0?S:h[3]==='"'?bt:At):n===bt||n===At?n=S:n===yt||n===_t?n=U:(n=S,i=void 0);let M=n===S&&r[l+1].startsWith("/>")?" ":"";o+=n===U?a+qt:u>=0?(s.push(g),a.slice(0,u)+st+a.slice(u)+A+M):a+A+(u===-2?(s.push(void 0),l):M)}let d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gt!==void 0?gt.createHTML(d):d,s]},C=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,d=t.length-1,l=this.parts,[a,g]=Vt(t,e);if(this.el=C.createElement(a,s),w.currentNode=this.el.content,e===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=w.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(st)||u.startsWith(A)){let v=g[n++];if(h.push(u),v!==void 0){let M=i.getAttribute(v.toLowerCase()+st).split(A),q=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:q[2],strings:M,ctor:q[1]==="."?rt:q[1]==="?"?ot:q[1]==="@"?nt:R})}else l.push({type:6,index:o})}for(let u of h)i.removeAttribute(u)}if(wt.test(i.tagName)){let h=i.textContent.split(A),u=h.length-1;if(u>0){i.textContent=P?P.emptyScript:"";for(let v=0;v<u;v++)i.append(h[v],O()),w.nextNode(),l.push({type:2,index:++o});i.append(h[u],O())}}}else if(i.nodeType===8)if(i.data===Ct)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}};function k(r,t,e=r,s){var i,o,n,d;if(t===E)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=k(r,l._$AS(r,t.values),l,s)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:T).importNode(s,!0);w.currentNode=o;let n=w.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let g;a.type===2?g=new x(n,n.nextSibling,this,t):a.type===1?g=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(g=new lt(n,this,t)),this._$AV.push(g),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=w.nextNode(),d++)}return o}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},x=class{constructor(t,e,s,i){var o;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),H(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):jt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{let n=new it(o,this),d=n.u(this.options);n.v(s),this.$(d),this._$AH=n}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new C(t)),e}T(t){xt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new x(this.k(O()),this.k(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},R=class{constructor(t,e,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=k(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let d=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=k(this,d[s+l],e,l),a===E&&(a=this._$AH[l]),n||(n=!H(a)||a!==this._$AH[l]),a===c?t=c:t!==c&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},rt=class extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},zt=P?P.emptyScript:"",ot=class extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==c?this.element.setAttribute(this.name,zt):this.element.removeAttribute(this.name)}},nt=class extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=k(this,t,e,0))!==null&&s!==void 0?s:c)===E)return;let i=this._$AH,o=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==c&&(i===c||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},lt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var Et=F.litHtmlPolyfillSupport;Et==null||Et(C,x),((tt=F.litHtmlVersions)!==null&&tt!==void 0?tt:F.litHtmlVersions=[]).push("2.7.2");var Tt=(r,t,e)=>{var s,i;let o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new x(t.insertBefore(O(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n};var at,ht;var b=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};b.finalized=!0,b._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:b});var kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:b});((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.3.1");var Rt=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{let{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);var It=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?V(j({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function f(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):It(r,t)}var dt,xe=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var _=class extends b{createRenderRoot(){return this}static get styles(){return G`${B(document.getElementById("global-styles"))}`}};p([f({reflect:!0})],_.prototype,"id",2),p([f()],_.prototype,"componentTitle",2),p([f()],_.prototype,"endpoint",2),p([f()],_.prototype,"value",2);var m=class extends _{constructor(){super(...arguments);this.username=null;this.goToPage=e=>{e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:e.target.value}}))};this.setIncomingTransfer=e=>{this.incomingTransfer=this.incomingTransfer===e.target.value?"":e.target.value};this.setOutgoingTransfer=e=>{this.outgoingTransfer=this.outgoingTransfer===e.target.value?"":e.target.value};this.getAttributeColumnTitles=e=>e==="goalKeepers"?$`<th>Overall</th>`:$`
            <th>Defence</th>
            <th>Midfield</th>
            <th>Attack</th>
        `;this.getAttributeColumnValues=(e,s)=>e==="goalKeepers"?$`<td>${s.attributesAverages[0].attributeFinalValue}</td>`:$`
            <td>${s.attributesAverages.find(i=>i.attributeName==="defenceAverage").attributeFinalValue}</td>
            <td>${s.attributesAverages.find(i=>i.attributeName==="midfieldAverage").attributeFinalValue}</td>
            <td>${s.attributesAverages.find(i=>i.attributeName==="attackAverage").attributeFinalValue}</td>
        `;this.getPlayerTable=(e,s,i)=>$`<div>
        <table class="table">
          <thead>
            <tr>
              <th><h2>${e}</h2></th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Club</th>
              <th>Positions</th>
              ${this.getAttributeColumnTitles(e)}
            </tr>
          </thead>
          <tbody>
            ${s.map(o=>$`
                <tr>
                  <td>
                    <button type="button" value=${o.name} @click=${i} class=${this.incomingTransfer===o.name?"button-small-selected":"button-small"}>
                      ${o.name}
                    </button>
                  </td>
                  <td>${o.club}</td>
                  ${$`<td>${o.positions.map(n=>$`<td>${n}</td>`)}</td>`}
                  ${this.getAttributeColumnValues(e,o)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>`;this.getPlayersToTransfer=(e,s,i)=>{var n,d;return(d=(n=this.incomingTransfer)==null?void 0:n.positions)!=null&&d.length?s.map(l=>{var a;return(a=this.incomingTransfer)==null?void 0:a.positions.includes(l)}).includes(!0)?this.getPlayerTable(e,i,this.setOutgoingTransfer):"":!1}}render(){this.setAttribute("id",this.id);let{goalKeepers:e,defenders:s,midfielders:i,forwards:o}=this.playersTeam.squad;return $`
        <div class="transfers">
            <h2>${this.username}, select a player to compare or swap into your squad</h2>
            ${this.getPlayerTable("goalKeepers",this.transferList.squad.goalKeepers,this.setIncomingTransfer)}
            ${this.getPlayerTable("defenders",this.transferList.squad.defenders,this.setIncomingTransfer)}
            ${this.getPlayerTable("midfielders",this.transferList.squad.midfielders,this.setIncomingTransfer)}
            ${this.getPlayerTable("forwards",this.transferList.squad.forwards,this.setIncomingTransfer)}
            <h2>${this.username}, select a player from your squad to swap out</h2>
            ${this.getPlayersToTransfer("goalKeepers",["GK"],e)}
            ${this.getPlayersToTransfer("defenders",["RD","CD","LD"],s)}
            ${this.getPlayersToTransfer("midfielders",["RM","CM","LM"],i)}
            ${this.getPlayersToTransfer("forwards",["LF","CF","RF","S"],o)}
            <button id="dashboard-button" type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
        </div>
        `}};p([f()],m.prototype,"username",2),p([f({type:Object})],m.prototype,"playersTeam",2),p([f({type:Object})],m.prototype,"transferList",2),p([f()],m.prototype,"pageLinks",2),p([f()],m.prototype,"incomingTransfer",2),p([f()],m.prototype,"outgoingTransfer",2),m=p([Rt("wc-transfers")],m);export{m as default};
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
//# sourceMappingURL=transfers.js.map
