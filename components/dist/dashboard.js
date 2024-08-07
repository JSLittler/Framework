var pt=Object.defineProperty,Rt=Object.defineProperties,Ht=Object.getOwnPropertyDescriptor,Nt=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Ot=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var ct=(o,t,e)=>t in o?pt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,q=(o,t)=>{for(var e in t||(t={}))Ot.call(t,e)&&ct(o,e,t[e]);if(ut)for(var e of ut(t))Lt.call(t,e)&&ct(o,e,t[e]);return o},z=(o,t)=>Rt(o,Nt(t));var p=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ht(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&pt(t,e,i),i};var F=(o,t,e)=>new Promise((s,i)=>{var r=l=>{try{u(e.next(l))}catch(a){i(a)}},n=l=>{try{u(e.throw(l))}catch(a){i(a)}},u=l=>l.done?s(l.value):Promise.resolve(l.value).then(r,n);u((e=e.apply(o,t)).next())});var B=window,G=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),mt=new WeakMap,R=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(G&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}},I=o=>new R(typeof o=="string"?o:o+"",void 0,Z),J=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new R(e,o,Z)},W=(o,t)=>{G?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},V=G?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return I(e)})(o):o;var Y,K=window,vt=K.trustedTypes,Mt=vt?vt.emptyScript:"",$t=K.reactiveElementPolyfillSupport,X={toAttribute(o,t){switch(t){case Boolean:o=o?Mt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch(s){e=null}}return e}},ft=(o,t)=>t!==o&&(t==t||o==o),Q={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:ft},y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return W(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Q){var i;let r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){let n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:X).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){let n=i.getPropertyOptions(r),u=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:X;this._$El=r,this[r]=u.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ft)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return F(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},$t==null||$t({ReactiveElement:y}),((Y=K.reactiveElementVersions)!==null&&Y!==void 0?Y:K.reactiveElementVersions=[]).push("1.6.1");var tt,D=window,T=D.trustedTypes,yt=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,st="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+_,jt=`<${xt}>`,P=document,N=()=>P.createComment(""),O=o=>o===null||typeof o!="object"&&typeof o!="function",Ct=Array.isArray,qt=o=>Ct(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",et=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,_t=/>/g,b=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,bt=/"/g,wt=/^(?:script|style|textarea|title)$/i,Tt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),C=Tt(1),Jt=Tt(2),S=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),St=new WeakMap,w=P.createTreeWalker(P,129,null,!1),zt=(o,t)=>{let e=o.length-1,s=[],i,r=t===2?"<svg>":"",n=H;for(let l=0;l<e;l++){let a=o[l],v,d,h=-1,$=0;for(;$<a.length&&(n.lastIndex=$,d=n.exec(a),d!==null);)$=n.lastIndex,n===H?d[1]==="!--"?n=gt:d[1]!==void 0?n=_t:d[2]!==void 0?(wt.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=b):d[3]!==void 0&&(n=b):n===b?d[0]===">"?(n=i!=null?i:H,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,v=d[1],n=d[3]===void 0?b:d[3]==='"'?bt:At):n===bt||n===At?n=b:n===gt||n===_t?n=H:(n=b,i=void 0);let M=n===b&&o[l+1].startsWith("/>")?" ":"";r+=n===H?a+jt:h>=0?(s.push(v),a.slice(0,h)+st+a.slice(h)+_+M):a+_+(h===-2?(s.push(void 0),l):M)}let u=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(u):u,s]},E=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0,u=t.length-1,l=this.parts,[a,v]=zt(t,e);if(this.el=E.createElement(a,s),w.currentNode=this.el.content,e===2){let d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=w.nextNode())!==null&&l.length<u;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let h of i.getAttributeNames())if(h.endsWith(st)||h.startsWith(_)){let $=v[n++];if(d.push(h),$!==void 0){let M=i.getAttribute($.toLowerCase()+st).split(_),j=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:j[2],strings:M,ctor:j[1]==="."?ot:j[1]==="?"?rt:j[1]==="@"?nt:U})}else l.push({type:6,index:r})}for(let h of d)i.removeAttribute(h)}if(wt.test(i.tagName)){let d=i.textContent.split(_),h=d.length-1;if(h>0){i.textContent=T?T.emptyScript:"";for(let $=0;$<h;$++)i.append(d[$],N()),w.nextNode(),l.push({type:2,index:++r});i.append(d[h],N())}}}else if(i.nodeType===8)if(i.data===xt)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(_,d+1))!==-1;)l.push({type:7,index:r}),d+=_.length-1}r++}}static createElement(t,e){let s=P.createElement("template");return s.innerHTML=t,s}};function k(o,t,e=o,s){var i,r,n,u;if(t===S)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=O(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((n=(u=e)._$Co)!==null&&n!==void 0?n:u._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=k(o,l._$AS(o,t.values),l,s)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(s,!0);w.currentNode=r;let n=w.nextNode(),u=0,l=0,a=i[0];for(;a!==void 0;){if(u===a.index){let v;a.type===2?v=new x(n,n.nextSibling,this,t):a.type===1?v=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(v=new lt(n,this,t)),this._$AV.push(v),a=i[++l]}u!==(a==null?void 0:a.index)&&(n=w.nextNode(),u++)}return r}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},x=class{constructor(t,e,s,i){var r;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),O(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=E.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{let n=new it(r,this),u=n.u(this.options);n.v(s),this.$(u),this._$AH=n}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new E(t)),e}T(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new x(this.k(N()),this.k(N()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},U=class{constructor(t,e,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=k(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{let u=t,l,a;for(t=r[0],l=0;l<r.length-1;l++)a=k(this,u[s+l],e,l),a===S&&(a=this._$AH[l]),n||(n=!O(a)||a!==this._$AH[l]),a===c?t=c:t!==c&&(t+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ot=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},Bt=T?T.emptyScript:"",rt=class extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==c?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}},nt=class extends U{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=k(this,t,e,0))!==null&&s!==void 0?s:c)===S)return;let i=this._$AH,r=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==c&&(i===c||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},lt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var Et=D.litHtmlPolyfillSupport;Et==null||Et(E,x),((tt=D.litHtmlVersions)!==null&&tt!==void 0?tt:D.litHtmlVersions=[]).push("2.7.2");var Pt=(o,t,e)=>{var s,i;let r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,n=r._$litPart$;if(n===void 0){let u=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=n=new x(t.insertBefore(N(),u),u,void 0,e!=null?e:{})}return n._$AI(o),n};var at,ht;var A=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};A.finalized=!0,A._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:A});var kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:A});((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.3.1");var Ut=o=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(o,t):((e,s)=>{let{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(n){customElements.define(e,n)}}})(o,t);var Gt=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?z(q({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function m(o){return(t,e)=>e!==void 0?((s,i,r)=>{i.constructor.createProperty(r,s)})(o,t,e):Gt(o,t)}var dt,Ce=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var g=class extends A{createRenderRoot(){return this}static get styles(){return J`${I(document.getElementById("global-styles"))}`}};p([m({reflect:!0})],g.prototype,"id",2),p([m()],g.prototype,"componentTitle",2),p([m()],g.prototype,"endpoint",2),p([m()],g.prototype,"value",2);var f=class extends g{constructor(){super(...arguments);this.username=null;this.getNextGame=()=>{var i;if(!((i=this.fixtures)!=null&&i.length))return C`
              <div></div>
            `;let s=this.fixtures.find(r=>r.gameWeek===this.gameWeek).fixtures.find(r=>r.home===this.playersTeam.name||r.away===this.playersTeam.name);return C`
            <div>
              <h2>Season ${this.season} - Game Week ${this.gameWeek}</h2>
                <p>(HOME) 
                    <button type="button" class=${this.playersTeam.name===s.home?"button-small green-text":"button-small"} value=${s.home} @click=${this.goToTeam}>
                        ${s.home}
                    </button>
                     vs 
                    <button type="button" class=${this.playersTeam.name===s.away?"button-small green-text":"button-small"} value=${s.away} @click=${this.goToTeam}>
                        ${s.away}
                    </button>
                     (AWAY)
                </p>
            </div>
          `}}goToPage(e){e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:e.target.value}}))}goToTeam(e){e.preventDefault(),e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:`${this.pageLinks.viewTeam}${e.target.value}`}}))}isTeamUnselected(){var d;let{tactics:e}=this.playersTeam||{tactics:{formation:"",selectedTeam:[]}},{formation:s,selectedTeam:i}=e;if(!s||!((d=i.goalkeeper[0])!=null&&d.player))return!0;let[r,n,u]=s.split("-"),{defence:l,midfield:a,forwards:v}=i;for(let h=0;h<r;h++)if(!l[h].player)return!0;for(let h=0;h<n;h++)if(!a[h].player)return!0;for(let h=0;h<u;h++)if(!v[h].player)return!0;return!1}getStandings(){return this.leagueTable.map((e,s)=>{let{name:i,played:r,won:n,lost:u,drawn:l,goalsFor:a,goalsAgainst:v,goalDifference:d,points:h}=e;return C`
                <tr key=${s}>
                    <td>${s+1}</td>
                    <td>
                        <button type="button" class=${this.playersTeam.name===i?"button-small green-text":"button-small"} value=${i} @click=${this.goToTeam}>
                            ${i}
                        </button>
                    </td>
                    <td>${r}</td>
                    <td>${n}</td>
                    <td>${l}</td>
                    <td>${u}</td>
                    <td>${a}</td>
                    <td>${v}</td>
                    <td>${d}</td>
                    <td>${h}</td>
                </tr>
            `})}getLeagueTable(){return this.leagueTable?C`
            <div>
                <table id='leagueTable' class="table">
                    <thead>
                        <tr>
                            <th colSpan="10"><h2>Season ${this.season} League Table</h2></th>
                        </tr>
                        <tr>
                            <th>Pos</th>
                            <th>Team</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Drawn</th>
                            <th>Lost</th>
                            <th>For</th>
                            <th>Against</th>
                            <th>Goal Diff +/-</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.getStandings()}
                    </tbody>
                </table>
            </div>
        `:C``}render(){return C`
            <div class="div-padding-bottom">
                <h2>${this.username}, use the navigation buttons to select your next action</h2>
                <div class="button-ball-container">
                    <button id="transfers-button" type="button" class="button-ball" value=${this.pageLinks.transfers} @click=${this.goToPage}>Transfer Players</button>
                    <button id="pick-team-button" type="button" class="button-ball" value=${this.pageLinks.pickTeam} @click=${this.goToPage}>Pick Team</button>
                    <button id="play-game-button" type="button" class="button-ball" value=${this.pageLinks.playGame} @click=${this.goToPage} ?disabled=${this.isTeamUnselected()}>Play Game</button>
                </div>
                ${this.getNextGame()}
                ${this.getLeagueTable()}
            </div>
        `}};p([m()],f.prototype,"username",2),p([m({type:Object})],f.prototype,"leagueTable",2),p([m()],f.prototype,"season",2),p([m()],f.prototype,"gameWeek",2),p([m({type:Object})],f.prototype,"playersTeam",2),p([m({type:Object})],f.prototype,"fixtures",2),p([m()],f.prototype,"pageLinks",2),f=p([Ut("wc-dashboard")],f);export{f as default};
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
//# sourceMappingURL=dashboard.js.map
