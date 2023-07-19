var pt=Object.defineProperty,Rt=Object.defineProperties,Tt=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Ot=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var ct=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,q=(r,t)=>{for(var e in t||(t={}))Ot.call(t,e)&&ct(r,e,t[e]);if(ut)for(var e of ut(t))Mt.call(t,e)&&ct(r,e,t[e]);return r},z=(r,t)=>Rt(r,Ht(t));var p=(r,t,e,s)=>{for(var i=s>1?void 0:s?Tt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&pt(t,e,i),i};var Z=(r,t,e)=>new Promise((s,i)=>{var n=l=>{try{d(e.next(l))}catch(a){i(a)}},o=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(n,o);d((e=e.apply(r,t)).next())});var B=window,D=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),vt=new WeakMap,R=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(D&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&vt.set(e,t))}return t}toString(){return this.cssText}},K=r=>new R(typeof r=="string"?r:r+"",void 0,J),G=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new R(e,r,J)},Q=(r,t)=>{D?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},I=D?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return K(e)})(r):r;var X,V=window,$t=V.trustedTypes,Lt=$t?$t.emptyScript:"",mt=V.reactiveElementPolyfillSupport,W={toAttribute(r,t){switch(t){case Boolean:r=r?Lt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},ft=(r,t)=>t!==r&&(t==t||r==r),Y={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ft},g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(I(i))}else t!==void 0&&e.push(I(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Q(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Y){var i;let n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let o=i.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:W;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ft)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return Z(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},mt==null||mt({ReactiveElement:g}),((X=V.reactiveElementVersions)!==null&&X!==void 0?X:V.reactiveElementVersions=[]).push("1.6.1");var tt,F=window,w=F.trustedTypes,yt=w?w.createPolicy("lit-html",{createHTML:r=>r}):void 0,st="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+A,jt=`<${Ct}>`,k=document,H=()=>k.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",xt=Array.isArray,qt=r=>xt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",et=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,_t=/>/g,S=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,bt=/"/g,Pt=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),m=wt(1),Gt=wt(2),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),St=new WeakMap,P=k.createTreeWalker(k,129,null,!1),zt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":"",o=T;for(let l=0;l<e;l++){let a=r[l],y,h,u=-1,$=0;for(;$<a.length&&(o.lastIndex=$,h=o.exec(a),h!==null);)$=o.lastIndex,o===T?h[1]==="!--"?o=gt:h[1]!==void 0?o=_t:h[2]!==void 0?(Pt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=S):h[3]!==void 0&&(o=S):o===S?h[0]===">"?(o=i!=null?i:T,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,y=h[1],o=h[3]===void 0?S:h[3]==='"'?bt:At):o===bt||o===At?o=S:o===gt||o===_t?o=T:(o=S,i=void 0);let L=o===S&&r[l+1].startsWith("/>")?" ":"";n+=o===T?a+jt:u>=0?(s.push(y),a.slice(0,u)+st+a.slice(u)+A+L):a+A+(u===-2?(s.push(void 0),l):L)}let d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(d):d,s]},C=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,d=t.length-1,l=this.parts,[a,y]=zt(t,e);if(this.el=C.createElement(a,s),P.currentNode=this.el.content,e===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=P.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(st)||u.startsWith(A)){let $=y[o++];if(h.push(u),$!==void 0){let L=i.getAttribute($.toLowerCase()+st).split(A),j=/([.?@])?(.*)/.exec($);l.push({type:1,index:n,name:j[2],strings:L,ctor:j[1]==="."?rt:j[1]==="?"?ot:j[1]==="@"?nt:N})}else l.push({type:6,index:n})}for(let u of h)i.removeAttribute(u)}if(Pt.test(i.tagName)){let h=i.textContent.split(A),u=h.length-1;if(u>0){i.textContent=w?w.emptyScript:"";for(let $=0;$<u;$++)i.append(h[$],H()),P.nextNode(),l.push({type:2,index:++n});i.append(h[u],H())}}}else if(i.nodeType===8)if(i.data===Ct)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:n}),h+=A.length-1}n++}}static createElement(t,e){let s=k.createElement("template");return s.innerHTML=t,s}};function U(r,t,e=r,s){var i,n,o,d;if(t===E)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=O(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=U(r,l._$AS(r,t.values),l,s)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:k).importNode(s,!0);P.currentNode=n;let o=P.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let y;a.type===2?y=new x(o,o.nextSibling,this,t):a.type===1?y=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(y=new lt(o,this,t)),this._$AV.push(y),a=i[++l]}d!==(a==null?void 0:a.index)&&(o=P.nextNode(),d++)}return n}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},x=class{constructor(t,e,s,i){var n;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),O(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{let o=new it(n,this),d=o.u(this.options);o.v(s),this.$(d),this._$AH=o}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new C(t)),e}T(t){xt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new x(this.k(H()),this.k(H()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},N=class{constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=U(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let d=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=U(this,d[s+l],e,l),a===E&&(a=this._$AH[l]),o||(o=!O(a)||a!==this._$AH[l]),a===c?t=c:t!==c&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},rt=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},Bt=w?w.emptyScript:"",ot=class extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==c?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}},nt=class extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=U(this,t,e,0))!==null&&s!==void 0?s:c)===E)return;let i=this._$AH,n=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==c&&(i===c||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},lt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};var Et=F.litHtmlPolyfillSupport;Et==null||Et(C,x),((tt=F.litHtmlVersions)!==null&&tt!==void 0?tt:F.litHtmlVersions=[]).push("2.7.2");var kt=(r,t,e)=>{var s,i;let n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,o=n._$litPart$;if(o===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new x(t.insertBefore(H(),d),d,void 0,e!=null?e:{})}return o._$AI(r),o};var at,ht;var b=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};b.finalized=!0,b._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:b});var Ut=globalThis.litElementPolyfillSupport;Ut==null||Ut({LitElement:b});((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.3.1");var Nt=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{let{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(o){customElements.define(e,o)}}})(r,t);var Dt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?z(q({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function v(r){return(t,e)=>e!==void 0?((s,i,n)=>{i.constructor.createProperty(n,s)})(r,t,e):Dt(r,t)}var dt,xe=((dt=window.HTMLSlotElement)===null||dt===void 0?void 0:dt.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var _=class extends b{createRenderRoot(){return this}static get styles(){return G`${K(document.getElementById("global-styles"))}`}};p([v({reflect:!0})],_.prototype,"id",2),p([v()],_.prototype,"componentTitle",2),p([v()],_.prototype,"endpoint",2),p([v()],_.prototype,"value",2);var f=class extends _{constructor(){super(...arguments);this.username=null;this.goToPage=e=>{e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:e.target.value}}))};this.viewPlayer=e=>{let s=this.pageLinks.viewPlayer.replace(":team",this.team);e.target.dispatchEvent(new CustomEvent("updatePage",{bubbles:!0,detail:{endpoint:`${s}${e.target.value}`}}))};this.getAttributeColumnTitles=e=>e==="goalKeepers"?m`<th>Overall</th>`:m`
            <th>Defence</th>
            <th>Midfield</th>
            <th>Attack</th>
        `;this.getAttributeColumnValues=(e,s)=>e==="goalKeepers"?m`<td>${s.attributesAverages[0].attributeFinalValue}</td>`:m`
            <td>${s.attributesAverages.find(i=>i.attributeName==="defenceAverage").attributeFinalValue}</td>
            <td>${s.attributesAverages.find(i=>i.attributeName==="midfieldAverage").attributeFinalValue}</td>
            <td>${s.attributesAverages.find(i=>i.attributeName==="attackAverage").attributeFinalValue}</td>
        `;this.getPlayerTable=(e,s)=>m`<div>
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
            ${s.map(i=>m`
                <tr>
                  <td>
                    <button type="button" value=${i.name} @click=${this.viewPlayer} class="button-small">
                      ${i.name}
                    </button>
                  </td>
                  <td>${i.club}</td>
                  ${m`<td>${i.positions.map(n=>m`<td>${n}</td>`)}</td>`}
                  ${this.getAttributeColumnValues(e,i)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>`}render(){this.setAttribute("id",this.id);let e=this.team===this.playersTeam.name?this.playersTeam.squad:this.oppositionTeams.find(d=>d.name===this.team).squad,{goalKeepers:s,defenders:i,midfielders:n,forwards:o}=e;return m`
            <div id=${this.id}>
                <h2>${this.username}, here are the players in the ${this.team} squad</h2>
                <p>Click on a player to view their attributes in detail, or return to the dashboard</p>
                ${this.getPlayerTable("goalKeepers",s)}
                ${this.getPlayerTable("defenders",i)}
                ${this.getPlayerTable("midfielders",n)}
                ${this.getPlayerTable("forwards",o)}
                <button type="button" value=${this.pageLinks.dashboard} @click=${this.goToPage}>Return to Dashboard</button>
            </div>
        `}};p([v()],f.prototype,"username",2),p([v()],f.prototype,"team",2),p([v({type:Object})],f.prototype,"playersTeam",2),p([v({type:Object})],f.prototype,"oppositionTeams",2),p([v()],f.prototype,"pageLinks",2),f=p([Nt("wc-view-team")],f);export{f as default};
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
//# sourceMappingURL=view-team.js.map
