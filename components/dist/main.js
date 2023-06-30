var dt=Object.defineProperty,Nt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors;var at=Object.getOwnPropertySymbols;var Tt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var ht=(r,t,e)=>t in r?dt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,L=(r,t)=>{for(var e in t||(t={}))Tt.call(t,e)&&ht(r,e,t[e]);if(at)for(var e of at(t))Lt.call(t,e)&&ht(r,e,t[e]);return r},M=(r,t)=>Nt(r,Ot(t));var P=(r,t,e,s)=>{for(var i=s>1?void 0:s?Rt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&dt(t,e,i),i};var K=(r,t,e)=>new Promise((s,i)=>{var o=l=>{try{d(e.next(l))}catch(a){i(a)}},n=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,n);d((e=e.apply(r,t)).next())});var j=window,z=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),ct=new WeakMap,q=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ct.set(e,t))}return t}toString(){return this.cssText}},pt=r=>new q(typeof r=="string"?r:r+"",void 0,ut);var Z=(r,t)=>{z?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=j.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},B=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return pt(e)})(r):r;var J,D=window,vt=D.trustedTypes,Mt=vt?vt.emptyScript:"",mt=D.reactiveElementPolyfillSupport,G={toAttribute(r,t){switch(t){case Boolean:r=r?Mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},ft=(r,t)=>t!==r&&(t==t||r==r),F={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:ft},m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(B(i))}else t!==void 0&&e.push(B(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Z(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=F){var i;let o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){let n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:G).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=i.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:G;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ft)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return K(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},mt==null||mt({ReactiveElement:m}),((J=D.reactiveElementVersions)!==null&&J!==void 0?J:D.reactiveElementVersions=[]).push("1.6.1");var W,I=window,b=I.trustedTypes,$t=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,X="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+f,jt=`<${bt}>`,C=document,k=()=>C.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Ct=Array.isArray,qt=r=>Ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,yt=/>/g,_=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,At=/"/g,xt=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Pt=wt(1),Qt=wt(2),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Et=new WeakMap,S=C.createTreeWalker(C,129,null,!1),zt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=U;for(let l=0;l<e;l++){let a=r[l],v,h,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,h=n.exec(a),h!==null);)p=n.lastIndex,n===U?h[1]==="!--"?n=_t:h[1]!==void 0?n=yt:h[2]!==void 0?(xt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=_):h[3]!==void 0&&(n=_):n===_?h[0]===">"?(n=i!=null?i:U,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?_:h[3]==='"'?At:gt):n===At||n===gt?n=_:n===_t||n===yt?n=U:(n=_,i=void 0);let O=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===U?a+jt:c>=0?(s.push(v),a.slice(0,c)+X+a.slice(c)+f+O):a+f+(c===-2?(s.push(void 0),l):O)}let d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$t!==void 0?$t.createHTML(d):d,s]},g=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,d=t.length-1,l=this.parts,[a,v]=zt(t,e);if(this.el=g.createElement(a,s),S.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=S.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith(X)||c.startsWith(f)){let p=v[n++];if(h.push(c),p!==void 0){let O=i.getAttribute(p.toLowerCase()+X).split(f),T=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:T[2],strings:O,ctor:T[1]==="."?tt:T[1]==="?"?et:T[1]==="@"?st:w})}else l.push({type:6,index:o})}for(let c of h)i.removeAttribute(c)}if(xt.test(i.tagName)){let h=i.textContent.split(f),c=h.length-1;if(c>0){i.textContent=b?b.emptyScript:"";for(let p=0;p<c;p++)i.append(h[p],k()),S.nextNode(),l.push({type:2,index:++o});i.append(h[c],k())}}}else if(i.nodeType===8)if(i.data===bt)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)l.push({type:7,index:o}),h+=f.length-1}o++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function x(r,t,e=r,s){var i,o,n,d;if(t===y)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=x(r,l._$AS(r,t.values),l,s)),t}var Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(s,!0);S.currentNode=o;let n=S.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new A(n,n.nextSibling,this,t):a.type===1?v=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(v=new it(n,this,t)),this._$AV.push(v),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=S.nextNode(),d++)}return o}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},A=class{constructor(t,e,s,i){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),H(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=g.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{let n=new Y(o,this),d=n.u(this.options);n.v(s),this.$(d),this._$AH=n}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new g(t)),e}T(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new A(this.k(k()),this.k(k()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},w=class{constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=x(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==y,n&&(this._$AH=t);else{let d=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=x(this,d[s+l],e,l),a===y&&(a=this._$AH[l]),n||(n=!H(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},tt=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Bt=b?b.emptyScript:"",et=class extends w{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Bt):this.element.removeAttribute(this.name)}},st=class extends w{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:u)===y)return;let i=this._$AH,o=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var St=I.litHtmlPolyfillSupport;St==null||St(g,A),((W=I.litHtmlVersions)!==null&&W!==void 0?W:I.litHtmlVersions=[]).push("2.7.2");var Ut=(r,t,e)=>{var s,i;let o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new A(t.insertBefore(k(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n};var rt,ot;var $=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}};$.finalized=!0,$._$litElement$=!0,(rt=globalThis.litElementHydrateSupport)===null||rt===void 0||rt.call(globalThis,{LitElement:$});var kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:$});((ot=globalThis.litElementVersions)!==null&&ot!==void 0?ot:globalThis.litElementVersions=[]).push("3.3.1");var Ht=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{let{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(n){customElements.define(e,n)}}})(r,t);var Dt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?M(L({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function V(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):Dt(r,t)}var nt,Pe=((nt=window.HTMLSlotElement)===null||nt===void 0?void 0:nt.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var It=(r,t,e)=>{let s=document.getElementById(r);s==null||s.setAttribute(t,e.detail)},lt=It;var E=class extends ${addListener(){let e=this.id;return document.addEventListener(`change-value-${e}`,s=>lt(e,"value",s))}removeListener(){let e=this.id;return document.removeEventListener(`change-value-${e}`,s=>lt(e,"value",s))}connectedCallback(){super.connectedCallback(),this.addListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeListener()}};P([V()],E.prototype,"id",2),P([V()],E.prototype,"value",2);var R=class extends E{render(){return Pt`<main>Main Content Goes here</main>`}};R=P([Ht("wc-main")],R);export{R as default};
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
//# sourceMappingURL=main.js.map
