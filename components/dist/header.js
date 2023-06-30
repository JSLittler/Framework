var ut=Object.defineProperty,Mt=Object.defineProperties,jt=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors;var dt=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var ct=(r,t,e)=>t in r?ut(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,M=(r,t)=>{for(var e in t||(t={}))Dt.call(t,e)&&ct(r,e,t[e]);if(dt)for(var e of dt(t))qt.call(t,e)&&ct(r,e,t[e]);return r},j=(r,t)=>Mt(r,Bt(t));var P=(r,t,e,s)=>{for(var i=s>1?void 0:s?jt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ut(t,e,i),i};var J=(r,t,e)=>new Promise((s,i)=>{var o=l=>{try{d(e.next(l))}catch(a){i(a)}},n=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,n);d((e=e.apply(r,t)).next())});var B=window,q=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),pt=new WeakMap,D=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(q&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pt.set(e,t))}return t}toString(){return this.cssText}},ft=r=>new D(typeof r=="string"?r:r+"",void 0,vt);var F=(r,t)=>{q?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},z=q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ft(e)})(r):r;var W,I=window,mt=I.trustedTypes,zt=mt?mt.emptyScript:"",$t=I.reactiveElementPolyfillSupport,G={toAttribute(r,t){switch(t){case Boolean:r=r?zt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},_t=(r,t)=>t!==r&&(t==t||r==r),Y={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:_t},f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return F(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Y){var i;let o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){let n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:G).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=i.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:G;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||_t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return J(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},$t==null||$t({ReactiveElement:f}),((W=I.reactiveElementVersions)!==null&&W!==void 0?W:I.reactiveElementVersions=[]).push("1.6.1");var Q,V=window,b=V.trustedTypes,yt=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,tt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+$,It=`<${xt}>`,C=document,U=()=>C.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",wt=Array.isArray,Vt=r=>wt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,At=/>/g,y=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,St=/"/g,Pt=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Ut=Tt(1),se=Tt(2),m=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),bt=new WeakMap,S=C.createTreeWalker(C,129,null,!1),Kt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=T;for(let l=0;l<e;l++){let a=r[l],v,h,u=-1,p=0;for(;p<a.length&&(n.lastIndex=p,h=n.exec(a),h!==null);)p=n.lastIndex,n===T?h[1]==="!--"?n=gt:h[1]!==void 0?n=At:h[2]!==void 0?(Pt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=y):h[3]!==void 0&&(n=y):n===y?h[0]===">"?(n=i!=null?i:T,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?y:h[3]==='"'?St:Et):n===St||n===Et?n=y:n===gt||n===At?n=T:(n=y,i=void 0);let O=n===y&&r[l+1].startsWith("/>")?" ":"";o+=n===T?a+It:u>=0?(s.push(v),a.slice(0,u)+tt+a.slice(u)+$+O):a+$+(u===-2?(s.push(void 0),l):O)}let d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(d):d,s]},g=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,d=t.length-1,l=this.parts,[a,v]=Kt(t,e);if(this.el=g.createElement(a,s),S.currentNode=this.el.content,e===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=S.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith(tt)||u.startsWith($)){let p=v[n++];if(h.push(u),p!==void 0){let O=i.getAttribute(p.toLowerCase()+tt).split($),L=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:L[2],strings:O,ctor:L[1]==="."?st:L[1]==="?"?it:L[1]==="@"?rt:w})}else l.push({type:6,index:o})}for(let u of h)i.removeAttribute(u)}if(Pt.test(i.tagName)){let h=i.textContent.split($),u=h.length-1;if(u>0){i.textContent=b?b.emptyScript:"";for(let p=0;p<u;p++)i.append(h[p],U()),S.nextNode(),l.push({type:2,index:++o});i.append(h[u],U())}}}else if(i.nodeType===8)if(i.data===xt)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)l.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function x(r,t,e=r,s){var i,o,n,d;if(t===m)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=x(r,l._$AS(r,t.values),l,s)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(s,!0);S.currentNode=o;let n=S.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new A(n,n.nextSibling,this,t):a.type===1?v=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(v=new ot(n,this,t)),this._$AV.push(v),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=S.nextNode(),d++)}return o}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},A=class{constructor(t,e,s,i){var o;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),N(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==m&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=g.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{let n=new et(o,this),d=n.u(this.options);n.v(s),this.$(d),this._$AH=n}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new g(t)),e}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new A(this.k(U()),this.k(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},w=class{constructor(t,e,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=x(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==m,n&&(this._$AH=t);else{let d=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=x(this,d[s+l],e,l),a===m&&(a=this._$AH[l]),n||(n=!N(a)||a!==this._$AH[l]),a===c?t=c:t!==c&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},st=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},Zt=b?b.emptyScript:"",it=class extends w{constructor(){super(...arguments),this.type=4}j(t){t&&t!==c?this.element.setAttribute(this.name,Zt):this.element.removeAttribute(this.name)}},rt=class extends w{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:c)===m)return;let i=this._$AH,o=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==c&&(i===c||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var Ct=V.litHtmlPolyfillSupport;Ct==null||Ct(g,A),((Q=V.litHtmlVersions)!==null&&Q!==void 0?Q:V.litHtmlVersions=[]).push("2.7.2");var Nt=(r,t,e)=>{var s,i;let o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new A(t.insertBefore(U(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n};var nt,lt;var _=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return m}};_.finalized=!0,_._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:_});var Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:_});((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.3.1");var kt=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{let{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);var Jt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?j(M({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function K(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):Jt(r,t)}var at,ke=((at=window.HTMLSlotElement)===null||at===void 0?void 0:at.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=r=>(...t)=>({_$litDirective$:r,values:t}),Z=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var k=class extends Z{constructor(t){if(super(t),this.et=c,t.type!==Rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this.ft=void 0,this.et=t;if(t===m)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;let e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};k.directiveName="unsafeHTML",k.resultType=1;var Lt=Ot(k);var Ft=(r,t,e)=>{let s=document.getElementById(r);s==null||s.setAttribute(t,e.detail)},ht=Ft;var E=class extends _{addListener(){let e=this.id;return document.addEventListener(`change-value-${e}`,s=>ht(e,"value",s))}removeListener(){let e=this.id;return document.removeEventListener(`change-value-${e}`,s=>ht(e,"value",s))}connectedCallback(){super.connectedCallback(),this.addListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeListener()}};P([K()],E.prototype,"id",2),P([K()],E.prototype,"value",2);var R=class extends E{render(){return Ut`<header>
        <div>${Lt(this.value)}</div>
        <div>${Math.random()*10}</div>
      </header>`}};R=P([kt("wc-header")],R);export{R as default};
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

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=header.js.map
