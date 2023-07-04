var pt=Object.defineProperty,Nt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptor,Tt=Object.getOwnPropertyDescriptors;var ct=Object.getOwnPropertySymbols;var Lt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var ut=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,M=(r,t)=>{for(var e in t||(t={}))Lt.call(t,e)&&ut(r,e,t[e]);if(ct)for(var e of ct(t))Mt.call(t,e)&&ut(r,e,t[e]);return r},j=(r,t)=>Nt(r,Tt(t));var P=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ot(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&pt(t,e,i),i};var Z=(r,t,e)=>new Promise((s,i)=>{var n=l=>{try{d(e.next(l))}catch(a){i(a)}},o=l=>{try{d(e.throw(l))}catch(a){i(a)}},d=l=>l.done?s(l.value):Promise.resolve(l.value).then(n,o);d((e=e.apply(r,t)).next())});var q=window,z=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),vt=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&vt.set(e,t))}return t}toString(){return this.cssText}},B=r=>new U(typeof r=="string"?r:r+"",void 0,J),F=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new U(e,r,J)},W=(r,t)=>{z?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=q.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},I=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return B(e)})(r):r;var G,D=window,mt=D.trustedTypes,jt=mt?mt.emptyScript:"",ft=D.reactiveElementPolyfillSupport,X={toAttribute(r,t){switch(t){case Boolean:r=r?jt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},$t=(r,t)=>t!==r&&(t==t||r==r),Q={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:$t},m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(I(i))}else t!==void 0&&e.push(I(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return W(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Q){var i;let n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:X).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let o=i.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:X;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}_$Ej(){return Z(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},ft==null||ft({ReactiveElement:m}),((G=D.reactiveElementVersions)!==null&&G!==void 0?G:D.reactiveElementVersions=[]).push("1.6.1");var Y,V=window,E=V.trustedTypes,yt=E?E.createPolicy("lit-html",{createHTML:r=>r}):void 0,et="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+f,qt=`<${xt}>`,x=document,H=()=>x.createComment(""),R=r=>r===null||typeof r!="object"&&typeof r!="function",Ct=Array.isArray,zt=r=>Ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,gt=/>/g,y=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,bt=/"/g,wt=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Ut=Pt(1),Qt=Pt(2),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),St=new WeakMap,S=x.createTreeWalker(x,129,null,!1),Bt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":"",o=k;for(let l=0;l<e;l++){let a=r[l],v,h,c=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===k?h[1]==="!--"?o=_t:h[1]!==void 0?o=gt:h[2]!==void 0?(wt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=y):h[3]!==void 0&&(o=y):o===y?h[0]===">"?(o=i!=null?i:k,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,v=h[1],o=h[3]===void 0?y:h[3]==='"'?bt:At):o===bt||o===At?o=y:o===_t||o===gt?o=k:(o=y,i=void 0);let T=o===y&&r[l+1].startsWith("/>")?" ":"";n+=o===k?a+qt:c>=0?(s.push(v),a.slice(0,c)+et+a.slice(c)+f+T):a+f+(c===-2?(s.push(void 0),l):T)}let d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(d):d,s]},g=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,d=t.length-1,l=this.parts,[a,v]=Bt(t,e);if(this.el=g.createElement(a,s),S.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=S.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith(et)||c.startsWith(f)){let p=v[o++];if(h.push(c),p!==void 0){let T=i.getAttribute(p.toLowerCase()+et).split(f),L=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:L[2],strings:T,ctor:L[1]==="."?it:L[1]==="?"?rt:L[1]==="@"?ot:w})}else l.push({type:6,index:n})}for(let c of h)i.removeAttribute(c)}if(wt.test(i.tagName)){let h=i.textContent.split(f),c=h.length-1;if(c>0){i.textContent=E?E.emptyScript:"";for(let p=0;p<c;p++)i.append(h[p],H()),S.nextNode(),l.push({type:2,index:++n});i.append(h[c],H())}}}else if(i.nodeType===8)if(i.data===xt)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)l.push({type:7,index:n}),h+=f.length-1}n++}}static createElement(t,e){let s=x.createElement("template");return s.innerHTML=t,s}};function C(r,t,e=r,s){var i,n,o,d;if(t===_)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=R(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=C(r,l._$AS(r,t.values),l,s)),t}var st=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:x).importNode(s,!0);S.currentNode=n;let o=S.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new A(o,o.nextSibling,this,t):a.type===1?v=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(v=new nt(o,this,t)),this._$AV.push(v),a=i[++l]}d!==(a==null?void 0:a.index)&&(o=S.nextNode(),d++)}return n}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},A=class{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),R(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&R(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=g.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{let o=new st(n,this),d=o.u(this.options);o.v(s),this.$(d),this._$AH=o}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new g(t)),e}T(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new A(this.k(H()),this.k(H()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},w=class{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=C(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==_,o&&(this._$AH=t);else{let d=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=C(this,d[s+l],e,l),a===_&&(a=this._$AH[l]),o||(o=!R(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},it=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},It=E?E.emptyScript:"",rt=class extends w{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,It):this.element.removeAttribute(this.name)}},ot=class extends w{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:u)===_)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var Et=V.litHtmlPolyfillSupport;Et==null||Et(g,A),((Y=V.litHtmlVersions)!==null&&Y!==void 0?Y:V.litHtmlVersions=[]).push("2.7.2");var kt=(r,t,e)=>{var s,i;let n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,o=n._$litPart$;if(o===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new A(t.insertBefore(H(),d),d,void 0,e!=null?e:{})}return o._$AI(r),o};var lt,at;var $=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _}};$.finalized=!0,$._$litElement$=!0,(lt=globalThis.litElementHydrateSupport)===null||lt===void 0||lt.call(globalThis,{LitElement:$});var Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:$});((at=globalThis.litElementVersions)!==null&&at!==void 0?at:globalThis.litElementVersions=[]).push("3.3.1");var Rt=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{let{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(o){customElements.define(e,o)}}})(r,t);var Dt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?j(M({},t),{finisher(e){e.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function K(r){return(t,e)=>e!==void 0?((s,i,n)=>{i.constructor.createProperty(n,s)})(r,t,e):Dt(r,t)}var ht,Pe=((ht=window.HTMLSlotElement)===null||ht===void 0?void 0:ht.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var Vt=(r,t,e)=>{let s=document.getElementById(r);s==null||s.setAttribute(t,e.detail)},dt=Vt;var b=class extends ${createRenderRoot(){return this}static get styles(){return F`${B(document.getElementById("global-styles"))}`}addListener(){let e=this.id;return document.addEventListener(`change-value-${e}`,s=>dt(e,"value",s))}removeListener(){let e=this.id;return document.removeEventListener(`change-value-${e}`,s=>dt(e,"value",s))}connectedCallback(){super.connectedCallback(),this.addListener()}disconnectedCallback(){super.disconnectedCallback(),this.removeListener()}};P([K()],b.prototype,"id",2),P([K()],b.prototype,"value",2);var O=class extends b{render(){return Ut`<div id="login-form">
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
    </div>`}};O=P([Rt("wc-login-form")],O);export{O as default};
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
//# sourceMappingURL=login-form.js.map
