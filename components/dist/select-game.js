var pt=Object.defineProperty,Ht=Object.defineProperties,Nt=Object.getOwnPropertyDescriptor,Tt=Object.getOwnPropertyDescriptors;var ct=Object.getOwnPropertySymbols;var Ot=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var ut=(o,t,e)=>t in o?pt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,q=(o,t)=>{for(var e in t||(t={}))Ot.call(t,e)&&ut(o,e,t[e]);if(ct)for(var e of ct(t))Mt.call(t,e)&&ut(o,e,t[e]);return o},z=(o,t)=>Ht(o,Tt(t));var m=(o,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&pt(t,e,i),i};var k=(o,t,e)=>new Promise((s,i)=>{var n=l=>{try{d(e.next(l))}catch(a){i(a)}},r=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(n,r);d((e=e.apply(o,t)).next())});var B=window,D=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),vt=new WeakMap,H=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(D&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&vt.set(e,t))}return t}toString(){return this.cssText}},I=o=>new H(typeof o=="string"?o:o+"",void 0,J),Y=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new H(e,o,J)},F=(o,t)=>{D?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},V=D?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return I(e)})(o):o;var Q,K=window,mt=K.trustedTypes,Lt=mt?mt.emptyScript:"",ft=K.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?Lt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch(s){e=null}}return e}},$t=(o,t)=>t!==o&&(t==t||o==o),X={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:$t},f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||X}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return F(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=X){var i;let n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){let r=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=i.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:W;this._$El=n,this[n]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return k(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},ft==null||ft({ReactiveElement:f}),((Q=K.reactiveElementVersions)!==null&&Q!==void 0?Q:K.reactiveElementVersions=[]).push("1.6.1");var tt,G=window,w=G.trustedTypes,yt=w?w.createPolicy("lit-html",{createHTML:o=>o}):void 0,st="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+_,jt=`<${xt}>`,P=document,T=()=>P.createComment(""),O=o=>o===null||typeof o!="object"&&typeof o!="function",Ct=Array.isArray,qt=o=>Ct(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",et=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,gt=/>/g,A=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,bt=/"/g,wt=/^(?:script|style|textarea|title)$/i,Pt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Z=Pt(1),Yt=Pt(2),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Et=new WeakMap,C=P.createTreeWalker(P,129,null,!1),zt=(o,t)=>{let e=o.length-1,s=[],i,n=t===2?"<svg>":"",r=N;for(let l=0;l<e;l++){let a=o[l],v,h,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===N?h[1]==="!--"?r=_t:h[1]!==void 0?r=gt:h[2]!==void 0?(wt.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=A):h[3]!==void 0&&(r=A):r===A?h[0]===">"?(r=i!=null?i:N,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?A:h[3]==='"'?bt:At):r===bt||r===At?r=A:r===_t||r===gt?r=N:(r=A,i=void 0);let L=r===A&&o[l+1].startsWith("/>")?" ":"";n+=r===N?a+jt:c>=0?(s.push(v),a.slice(0,c)+st+a.slice(c)+_+L):a+_+(c===-2?(s.push(void 0),l):L)}let d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(d):d,s]},E=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0,d=t.length-1,l=this.parts,[a,v]=zt(t,e);if(this.el=E.createElement(a,s),C.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=C.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith(st)||c.startsWith(_)){let p=v[r++];if(h.push(c),p!==void 0){let L=i.getAttribute(p.toLowerCase()+st).split(_),j=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:j[2],strings:L,ctor:j[1]==="."?ot:j[1]==="?"?rt:j[1]==="@"?nt:R})}else l.push({type:6,index:n})}for(let c of h)i.removeAttribute(c)}if(wt.test(i.tagName)){let h=i.textContent.split(_),c=h.length-1;if(c>0){i.textContent=w?w.emptyScript:"";for(let p=0;p<c;p++)i.append(h[p],T()),C.nextNode(),l.push({type:2,index:++n});i.append(h[c],T())}}}else if(i.nodeType===8)if(i.data===xt)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)l.push({type:7,index:n}),h+=_.length-1}n++}}static createElement(t,e){let s=P.createElement("template");return s.innerHTML=t,s}};function U(o,t,e=o,s){var i,n,r,d;if(t===b)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=O(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=U(o,l._$AS(o,t.values),l,s)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(s,!0);C.currentNode=n;let r=C.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new S(r,r.nextSibling,this,t):a.type===1?v=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(v=new lt(r,this,t)),this._$AV.push(v),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=C.nextNode(),d++)}return n}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},S=class{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),O(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=E.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{let r=new it(n,this),d=r.u(this.options);r.v(s),this.$(d),this._$AH=r}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new E(t)),e}T(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new S(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},R=class{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let n=this.strings,r=!1;if(n===void 0)t=U(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{let d=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=U(this,d[s+l],e,l),a===b&&(a=this._$AH[l]),r||(r=!O(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ot=class extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Bt=w?w.emptyScript:"",rt=class extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}},nt=class extends R{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=U(this,t,e,0))!==null&&s!==void 0?s:u)===b)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},lt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};var St=G.litHtmlPolyfillSupport;St==null||St(E,S),((tt=G.litHtmlVersions)!==null&&tt!==void 0?tt:G.litHtmlVersions=[]).push("2.7.2");var Ut=(o,t,e)=>{var s,i;let n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,r=n._$litPart$;if(r===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new S(t.insertBefore(T(),d),d,void 0,e!=null?e:{})}return r._$AI(o),r};var at,ht;var g=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}};g.finalized=!0,g._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:g});var Rt=globalThis.litElementPolyfillSupport;Rt==null||Rt({LitElement:g});((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.3.1");var kt=o=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(o,t):((e,s)=>{let{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(r){customElements.define(e,r)}}})(o,t);var Dt=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?z(q({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function $(o){return(t,e)=>e!==void 0?((s,i,n)=>{i.constructor.createProperty(n,s)})(o,t,e):Dt(o,t)}var dt,Ce=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var y=class extends g{createRenderRoot(){return this}static get styles(){return Y`${I(document.getElementById("global-styles"))}`}};m([$()],y.prototype,"id",2),m([$()],y.prototype,"componentTitle",2),m([$()],y.prototype,"endpoint",2),m([$()],y.prototype,"value",2);var x=class extends y{constructor(){super(...arguments);this.username=""}newGameRequest(e){return k(this,null,function*(){e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:this.endpoint}}))})}render(){let e=this.getAttribute("username"),s=Z`
        <div id="saved-game" className="savedGame">
            <h2>you have a game saved</h2>
            <div>
              <p>Your Team: {game?.playersTeam?.name}</p>
              <p>Game Week: {game?.gameWeek}</p>
            </div>
            <button id="load-game-button" type="submit">Continue this game</button>
            <p>Starting a new game will overwrite your saved game</p>
        </div>
    `,i=Z`
        <div>
            <p>You do not currently have any saved games</p>
        </div>
    `;return Z`
        <div>
            <h2>Hi ${e},</h2>
            ${(()=>{var r;return(r=this.savedGame)!=null&&r.playersTeam?s:i})()}
            <button id="new-game-button" type="button" @click=${this.newGameRequest} className="button">Start a new game</button>
      </div>
    `}};m([$({attribute:!1})],x.prototype,"username",2),m([$({attribute:!1})],x.prototype,"savedGame",2),x=m([kt("wc-select-game")],x);export{x as default};
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
//# sourceMappingURL=select-game.js.map
