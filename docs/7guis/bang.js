(function(){var __webpack_modules__={876:function(__unused_webpack_module,exports,__webpack_require__){!function(e){const t=""+Math.random(),n=O,r=P,a=()=>{},s=/(?:<!\-\-)?(key\d+)(?:\-\->)?/gm,o=/\w+=/,i=20;new DOMParser;const c=new class{beforeend(e,t){t.appendChild(e)}beforebegin(e,t){t.parentNode.insertBefore(e,t)}afterend(e,t){t.parentNode.insertBefore(e,t.nextSibling)}replace(e,t){t.parentNode.replaceChild(e,t)}afterbegin(e,t){t.insertBefore(e,t.firstChild)}innerhtml(e,t){t.replaceChildren(),t.appendChild(e)}insert(e,t){t.replaceChildren(e)}},l=new Map;document.createElement("template");const u=document.createElement("div"),d="",{stringify:f}=JSON,h=e=>f(e,null,d);globalThis.onerror=(...e)=>(console.log(e,e[0]+d,e[4]&&e[4].message,e[4]&&e[4].stack),!0);const p=e=>!!e&&("string"==typeof e.key||"number"==typeof e.key)&&Object.getOwnPropertyNames(e).length<=2,E={};async function m(e,...t){const n=this;let r,a=!1;if(0===e[0].length&&t[0].state&&(a=!0),a)return({state:r}=t.shift()),e.shift(),t=await Promise.all(t.map((e=>y(n,e,r)))),g(e,t);{const r=async r=>(t=await Promise.all(t.map((e=>y(n,e,r)))),g(e,t));return r}}function _(e,...t){return g(e,t,{useCache:!1})}function g(e,n,{useCache:r=!0}={}){const a={};let s,o;if(n=n.map(F),r){s=n.find(p)||{},o=e.join("<link rel=join>");const{cached:t,firstCall:r}=function(e,t,n){let r,a=E[e];return null==a?(a=E[e]={},void 0!==n.key&&(a.instances={},a=a.instances[n.key]={}),r=!0):void 0!==n.key?a.instances?(a=a.instances[n.key],a?!0===n.kill?(a=E[e],a&&a.instances&&(a.instances[n.key]=null),a=null,r=!0):r=!1:r=!0):(a.instances={},r=!0):r=!1,{cached:a,firstCall:r}}(o,0,s);if(!r)return t.update(n),t;a.oldVals=Array.from(n)}else a.oldVals=Array.from(n);e=[...e];const c={},u=n.map(function(e){return(n,r)=>{if(p(n))return d;const a=("key"+Math.random()).replace(".",d).padEnd(i,"0").slice(0,i);let s=a;return n.code===t&&Array.isArray(n.nodes)&&(s=`\x3c!--${s}--\x3e`),e[a.trim()]={vi:r,val:n,replacers:[]},s}}(c)),f=[];let h=d;for(;e.length>1;)h+=e.shift()+u.shift();h+=e.shift();const m=D(h),_=document.createTreeWalker(m,NodeFilter.SHOW_ALL);do{S({walker:_,vmap:c,externals:f})}while(_.nextNode());return Object.assign(a,{externals:f,v:Object.values(c),cacheKey:o,instance:s,to:b,update:L,code:t,nodes:Array.from(m.childNodes)}),r&&(void 0!==s.key?E[o].instances[s.key]=a:E[o]=a,a.nodes.forEach((e=>{l.set(e,{ck:o,ik:s.key+d})}))),a}async function y(e,n,r){if("string"==typeof n)return n;if("number"==typeof n)return n+d;if("boolean"==typeof n)return n+d;if(n instanceof Date)return n+d;if(T(n)){if(e.CONFIG.allowUnset)return e.CONFIG.unsetPlaceholder||d;throw new TypeError(`Value cannot be unset, was: ${n}`)}if(n instanceof Promise)return await y(e,await n.catch((e=>e+d)),r);if(n instanceof Element)return n.outerHTML;if(n instanceof Node)return n.textContent;const a=Array.isArray(n)&&(0===n.length||Array.isArray(n[0].nodes));if(null!==(s=n)&&s[Symbol.iterator]instanceof Function&&!a)return y(e,await Promise.all((await Promise.all(Array.from(n)).catch((e=>err+d))).map((t=>y(e,t,r)))),r);var s;const o=p(n),i=n.code===t&&Array.isArray(n.nodes),c=n.code===t&&"string"==typeof n.str;if(a||o||c||i)return a?x(n):n;if("AsyncFunction"===Object.getPrototypeOf(n).constructor.name)return await y(e,await n(r),r);if(n instanceof Function)return n(r);{let t;if(Object.prototype.hasOwnProperty.call(n,e.CONFIG.bangKey)){t=new e.StateKey(n[e.CONFIG.bangKey])+d;const r=e.STATE.get(t);e.STATE.delete(r),e.STATE.set(t,n),e.STATE.set(n,t)}else{const r=h(n);if(e.STATE.has(n)){t=e.STATE.get(n);const a=e.STATE.get(t+".json.last");r!==a&&(e.STATE.delete(a),t.startsWith("system-key")&&(e.STATE.delete(t),t=new e.StateKey+d),e.STATE.set(t,n),e.STATE.set(n,t))}else t=new e.StateKey+d,e.STATE.set(t,n),e.STATE.set(n,t);e.STATE.set(r,t+".json.last"),e.STATE.set(t+".json.last",r)}return t+=d,t}}function T(e){return null==e}function b(e,t){const n=(t||"replace").toLocaleLowerCase(),r=document.createDocumentFragment();this.nodes.forEach((e=>r.appendChild(e)));const a=e instanceof Node?e:document.querySelector(e);try{c[n](r,a)}catch(t){switch(t.constructor&&t.constructor.name){case"DOMException":R({error:"Error inserting template into DOM. Position must be one of: replace, beforebegin, afterbegin, beforeend, innerhtml, afterend"});break;case"TypeError":R({error:(s=e,`Error inserting template into DOM. Location ${s} was not found in the document.`)});break;default:throw t}}for(var s;this.externals.length;)this.externals.shift()()}function S({walker:e,vmap:t,externals:n}){const r=e.currentNode;switch(r.nodeType){case Node.ELEMENT_NODE:!function({node:e,vmap:t,externals:n}){N(e).forEach((({name:r,value:a}={})=>{const o={node:e,vmap:t,externals:n,name:r,lengths:[]};s.lastIndex=0;let i=s.exec(r);for(;i;)A(i,o,{updateName:!0}),i=s.exec(r);for(s.lastIndex=0,i=s.exec(a);i;)A(i,o,{updateName:!1}),i=s.exec(a)}))}({node:r,vmap:t,externals:n});break;case Node.COMMENT_NODE:case Node.TEXT_NODE:!function({node:e,vmap:t,externals:n}){const r=[],a=e.nodeValue;let o=s.exec(a);for(;o;){const{index:i}=o,c=t[o[1]],l=w({node:e,index:i,lengths:r,val:c});n.push((()=>l(c.val))),c.replacers.push(l),o=s.exec(a)}}({node:r,vmap:t,externals:n})}}function w(e){const{node:t}=e,n=Object.assign({},e,{oldVal:{length:i},oldNodes:[t],lastAnchor:t});return e=>{if(n.oldVal!=e)switch(n.val.val=e,v(e)){case"markupobject":case"vanillaviewobject":!function(e,t){let{oldNodes:n,lastAnchor:r}=t;if(e.nodes.length)if(a=n,s=e.nodes,a.length==s.length&&Array.from(a).every(((e,t)=>e==s[t])));else{const n=[];for(Array.from(e.nodes).forEach((e=>{if(document.contains(e.ownerDocument))for(;n.length;){const t=n.shift();e.parentNode.insertBefore(t,e)}else n.push(e)}));n.length;){const e=n.shift();r.parentNode.insertBefore(e,r)}t.lastAnchor=e.nodes[e.nodes.length-1]}else{const e=function(e){let t=[...e.parentNode.childNodes].find((e=>e.isConnected&&e.nodeType==Node.COMMENT_NODE&&"vanillaview_placeholder"==e.nodeValue));return t||(t=D("\x3c!--vanillaview_placeholder--\x3e").firstChild),t}(r);r.parentNode.insertBefore(e,r.nextSibling),t.lastAnchor=e}var a,s;const o=(i=n,c=e.nodes,i=new Set(i),c=new Set(c),new Set([...i].filter((e=>!c.has(e)))));var i,c;if(o.size){const e=document.createDocumentFragment(),t=new Set;o.forEach((n=>{if(e.appendChild(n),n.linkedCustomElement&&e.appendChild(n.linkedCustomElement),n.nodeType===Node.COMMENT_NODE&&n.textContent.match(/key\d+/))return;const r=l.get(n);t.add(h(r))})),t.forEach((e=>{const{ck:t,ik:n}=JSON.parse(e);t&&n?E[t].instances[n]=null:t&&(E[t]=null)}))}for(t.oldNodes=e.nodes||[r];e.externals.length;)e.externals.shift()()}(e,n);break;default:!function(e,t){let{oldVal:n,index:r,val:a,lengths:s,node:o}=t;const c=a.vi,l=Object.keys(s.slice(0,c)).length*i,u=s.slice(0,c).reduce(((e,t)=>e+t),0),d=o.nodeValue;s[c]=e.length;const f=u-l,h=d.slice(0,r+f)+e+d.slice(r+f+n.length);o.nodeValue=h,o.linkedCustomElement&&h!==n&&function(e){const t=e.linkedCustomElement,n=D(`<span ${e.textContent}></span>`).firstChild,r=new Set(N(t).filter((({name:e})=>!e.startsWith("on"))).map((({name:e})=>e)));N(n).forEach((({name:e,value:n})=>{e!==t.localName&&(e.startsWith("on")||(t.setAttribute(e,n),r.delete(e)))})),r.forEach((e=>t.removeAttribute(e)))}(o),t.oldVal=e}(e,n)}}}function A(e,t,{updateName:n}){const{index:r,input:a}=e,s=Object.assign({},t,{index:r,input:a,updateName:n,val:t.vmap[e[1]],oldVal:{length:i},oldName:t.name});let c;c=n?function(e){let{oldName:t,node:n,val:r}=e;return e=>{if(t==e)return;r.val=e;const a=n.hasAttribute(t)?t:d;if(a!==e){if(a&&(n.removeAttribute(t),n[t]=void 0),e){let t,r=e=e.trim();if(o.test(e)){const n=e.indexOf("=");[r,t]=[e.slice(0,n),e.slice(n+1)]}C(n,r,t)}t=e}}}(s):function(e){const t=t=>{if(e.oldVal!=t)switch(e.val.val=t,v(t)){case"funcarray":!function(e,t){let{oldVal:n,node:r,name:a,externals:s}=t;if(n&&!Array.isArray(n)&&(n=[n]),"bond"!==a){let t={};a.includes(":")&&([a,...t]=a.split(":"),t=t.reduce(((e,t)=>(e[t]=!0,e)),{})),n&&n.forEach((e=>r.removeEventListener(a,e,t))),e.forEach((e=>r.addEventListener(a,e,t)))}else n&&n.forEach((e=>{const t=s.indexOf(e);t>=0&&s.splice(t,1)})),e.forEach((e=>s.push((()=>e(r)))));t.oldVal=e}(t,e);break;case"function":!function(e,t){let{oldVal:n,node:r,name:a,externals:s}=t;if("bond"!==a){let t={};a.includes(":")&&([a,...t]=a.split(":"),t=t.reduce(((e,t)=>(e[t]=!0,e)),{})),n&&r.removeEventListener(a,n,t),r.addEventListener(a,e,t),C(r,a,d)}else{if(n){const e=s.indexOf(n);e>=0&&s.splice(e,1)}s.push((()=>e(r)))}t.oldVal=e}(t,e);break;case"handlers":!function(e,t){let{oldVal:n,node:r,externals:a}=t;n&&"object"==typeof n&&Object.entries(n).forEach((([e,t])=>{if("bond"!==e){let n={};e.includes(":")&&([e,...n]=e.split(":"),n=n.reduce(((e,t)=>(e[t]=!0,e)),{})),console.log(e,t,n),r.removeEventListener(e,t,n)}else{const e=a.indexOf(t);e>=0&&a.splice(e,1)}})),Object.entries(e).forEach((([e,t])=>{if("bond"!==e){let n={};e.includes(":")&&([e,...n]=e.split(":"),n=n.reduce(((e,t)=>(e[t]=!0,e)),{})),r.addEventListener(e,t,n)}else a.push((()=>t(r)))})),t.oldVal=e}(t,e);break;case"markupobject":case"vanillaviewobject":k(t=function(e){const t=document.createDocumentFragment();e.forEach((e=>t.appendChild(e.cloneNode(!0))));const n=document.createElement("body");return n.appendChild(t),n.innerHTML}(t.nodes),e);break;case"markupattrobject":t=t.str;default:k(t,e)}};return t(e.val.val),t}(s),s.externals.push((()=>c(s.val.val))),s.val.replacers.push(c)}function N(e){if(!e.hasAttribute)return[];if(e.hasAttribute("class")&&e.setAttribute("class",M(e.getAttribute("class"))),e.attributes&&Number.isInteger(e.attributes.length))return Array.from(e.attributes);const t=[];for(const n of e)e.hasAttribute(n)&&t.push({name:n,value:e.getAttribute(n)});return t}function k(e,t){let{oldVal:n,node:r,index:a,name:s,val:o,lengths:c}=t,l=0;const u=o.vi,f=Object.keys(c.slice(0,u)).length*i;"class"==s&&(0==(e=e.trim()).length&&(l=-1),t.val.val=e),c[u]=e.length+l;let h=r.getAttribute(s);const p=c.slice(0,u).reduce(((e,t)=>e+t),0)-f,E=h.slice(0,a+p),m=h.slice(a+p+n.length);let _;if("class"==s){const t=0==n.length?" ":d;_=E+t+e+t+m}else _=E+e+m;C(r,s,_),t.oldVal=e}function C(e,t,n){"class"==t&&(n=M(n));try{e.setAttribute(t,T(n)?t:n)}catch(e){}if("style"!==t)try{e[t]=!!T(n)||n}catch(e){}}function v(e){const n=typeof e;return"function"===n?"function":e.code===t&&Array.isArray(e.nodes)?"vanillaviewobject":e.code===t&&"string"==typeof e.str?"markupattrobject":Array.isArray(e)&&(0===e.length||e[0].code===t&&Array.isArray(e[0].nodes))?"vanillaviewarray":!Array.isArray(e)||0!==e.length&&"function"!=typeof e[0]?"object"===n?"handlers":"default":"funcarray"}function O(e){const n=D(e=T(e)?d:e);return{type:"MarkupObject",code:t,nodes:Array.from(n.childNodes),externals:[]}}function P(e){return e=(e=T(e)?d:e).replace(/"/g,"&quot;"),{type:"MarkupAttrObject",code:t,str:e}}function M(e){return(e=e.trim()).replace(/\s+/g," ")}function D(e){return u.replaceChildren(),u.insertAdjacentHTML("beforeend",`<template>${e}</template>`),u.firstElementChild.content}function F(e){const n=Array.isArray(e)&&(0===e.length||Array.isArray(e[0].nodes)),r=T(e),a=e.code!==t&&Array.isArray(e.nodes),s="object"==typeof e;return n?x(e):p(e)||e.code===t?e:(r&&R({error:"Unset values not allowed here."}),a&&R({error:"Possible XSS / object forgery attack detected. Object code could not be verified."}),s&&R({error:"Object values not allowed here."}),e+d)}function x(e){const n=[],r=[];for(const t of e)n.push(...t.externals),r.push(...t.nodes);return{v:[],code:t,oldVals:[],nodes:r,to:b,update:L,externals:n}}function L(e){this.v.filter((({vi:t})=>function(e,t){const[n,r]=[e,t].map(v);let a;if(n!=r)a=!0;else switch(n){case"vanillaviewobject":case"funcarray":case"function":case"vanillaviewarray":case"markupattrobject":case"markupobject":a=!0;break;default:a=h(e)!==h(t)}return a}(e[t],this.oldVals[t]))).forEach((({vi:t,replacers:n})=>n.forEach((n=>n(e[t]))))),this.oldVals=Array.from(e)}function R(e,t){throw e.stack=(new Error).stack.split(/\s*\n\s*/g),h(e)}Object.assign(m,{say:function(e){},attrskip:r,skip:n,attrmarkup:P,markup:O,guardEmptyHandlers:function(e){return Array.isArray(e)?0==e.length?[a]:e:T(e)?a:void 0},die:R}),Object.assign(globalThis,{vanillaview:{c:_,s:m}}),e.c=_,e.s=m,Object.defineProperty(e,"__esModule",{value:!0})}(exports),function(){const DEBUG=!1,PIPELINE_REQUESTS=!0,RANDOM_SLEEP_ON_FIRST_PRINT=!0,OPTIMIZE=!0,GET_ONLY=!0,MOBILE=isMobile(),EMPTY="",{stringify:_STR}=JSON,JS=e=>_STR(e,null,EMPTY),LIGHTHOUSE=navigator.userAgent.includes("Chrome-Lighthouse"),DOUBLE_BARREL=/^\w+-(?:\w+-?)*$/,POS="beforeend",LOCAL_PATH="this.",PARENT_PATH="this.getRootNode().host.",ONE_HIGHER="getRootNode().host.",CALL_WITH_EVENT="(event)",F=_FUNC,FUNC_CALL=/\);?$/,MirrorNode=Symbol.for("[[MN]]"),Template=document.createElement("template"),DIV=document.createElement("div"),path=location.pathname,CONFIG={htmlFile:"markup.html",scriptFile:"script.js",styleFile:"style.css",bangKey:"_bang_key",componentsPath:`${path}${path.endsWith("/")?EMPTY:"/"}components`,allowUnset:!1,unsetPlaceholder:EMPTY,EVENTS:"error load click pointerdown pointerup pointermove mousedown mouseup \n        mousemove touchstart touchend touchmove touchcancel dblclick dragstart dragend \n        dragmove drag mouseover mouseout focus blur focusin focusout scroll\n        input change compositionstart compositionend text paste beforepast select cut copy\n        contextmenu\n      ".split(/\s+/g).filter((e=>e.length)).map((e=>`[on${e}]`)).join(","),delayFirstPaintUntilLoaded:!1,capBangRatioAtUnity:!1,noHandlerPassthrough:!1},History=[],STATE=new Map,CACHE=new Map,Waiters=new Map,Started=new Set,TRANSFORMING=new WeakSet,Dependents=new Map,MAX_CONCURRENT_REQUESTS=5,RequestPipeLine=new Map,RequestWaiting=[];class Counter{started=0;finished=0}const Counts=new Counter,Finished=()=>Counts.finished++,SHADOW_OPTS={mode:"open"},OBSERVE_OPTS={subtree:!0,childList:!0,characterData:!0},INSERT="insert",ALL_DEPS={allDependents:!0};let RequestId=0,hindex=0,observer,systemKeys=1,_c$;const BangBase=e=>class t extends HTMLElement{static#e=["state"];static get observedAttributes(){return Array.from(t.#e)}#t=e;#n=[];constructor({task:t=(()=>{})}={}){super(),DEBUG&&say("log",e,"constructed"),this.cookMarkup=async(e,t)=>{const n=await cook.call(this,e,t);if(DEBUG&&console.log(n),!this.shadowRoot){const e=this.attachShadow(SHADOW_OPTS);observer.observe(e,OBSERVE_OPTS),n.to(e,INSERT),e.querySelectorAll(CONFIG.EVENTS).forEach((e=>this.handleAttrs(e.attributes,{node:e,originals:!0})));const t=await findBangs(transformBang,e,ALL_DEPS);this.#n=t.map((e=>e.untilLoaded()))}},this.markLoaded=async()=>{if(!this.loaded){this.counts.finished++;const e=await this.untilLoaded();e&&(this.loaded=e,this.setVisible(),this.isLazy||setTimeout(Finished,0))}},this.counts=new Counter,this.hasAttribute("lazy")?(this.isLazy=!0,this.hasAttribute("super")?(this.superLazy=!0,loaded().then((()=>sleep(405*Math.random()).then((()=>this.print().then(t)))))):RANDOM_SLEEP_ON_FIRST_PRINT?sleep(162*Math.random()).then((()=>this.print().then(t))):this.print().then(t)):this.print().then(t)}get name(){return this.#t}async print(){this.alreadyPrinted||(DEBUG&&loaded().then((()=>globalThis.exposeState=!0)),this.prepareVisibility());const e=this.handleAttrs(this.attributes);if(OPTIMIZE){const t=JS(e);if(this.alreadyPrinted&&this.lastState===t)return DEBUG&&globalThis.exposeState&&console.log(JSON.parse(this.lastState),e),void(DEBUG&&console.log(this,"state no change, returning"));this.lastState=t}return this.printShadow(e)}update(){return this.fastUpdate?this.fastUpdate():this.print()}prepareVisibility(){this.alreadyPrinted=!0,this.classList.add("bang-el"),this.counts.started++,this.isLazy||Counts.started++,this.classList.remove("bang-styled"),fetchStyle(e).catch((e=>{say("warn!",e)}))}async untilLoaded(){this.#n=this.#n;const e=(await Promise.all(this.#n)).every((e=>e));return await becomesTrue((()=>this.counts.started>0&&this.counts.finished>=this.counts.started))&&e}updateIfChanged(e){const{key:t,didChange:n}=stateChanged(e);if(n){DEBUG&&console.log("State changed",t,e);const n=getViews(e);DEBUG&&console.log("State views",n);const r=updateState(e);DEBUG&&console.log("New key",r),n.forEach((e=>e.setAttribute("state",r)))}}setVisible(){this.classList.add("bang-styled")}get state(){return cloneState(this.getAttribute("state"))}set state(e){const t=this.getAttribute("state");return t.startsWith("system-key:")?this.updateIfChanged(this.state):setState(t,e)}attributeChangedCallback(e,t,n){"state"!==e||isUnset(t)||this.update()}connectedCallback(){say("log",e,"connected"),this.handleAttrs(this.attributes,{originals:!0})}handleAttrs(e,{node:t,originals:n}={}){let r={};t||(t=this);for(let{name:a,value:s}of e)if(!isUnset(s))if("state"===a){const e=s.trim(),a=cloneState(e);if(isUnset(a))throw console.warn(t),new ReferenceError(`\n                <${t.localName}> constructor passed state key ${e} which is unset. It must be set.\n              `);if(r=a,!n)break;{let n=Dependents.get(e);n||(n=new Set,Dependents.set(e,n)),n.add(t),DEBUG&&console.log({acquirers:n,Dependents:Dependents})}}else if(n){if(!a.startsWith("on"))continue;if(s=s.trim(),!s)continue;const e=t[s]instanceof Function,n=t.getRootNode()?.host?.[s]instanceof Function,r=e?LOCAL_PATH:n?PARENT_PATH:getAncestor(t.getRootNode()?.host?.getRootNode?.()?.host,s);if(!r||s.startsWith(r))continue;const o=s.match(FUNC_CALL)?EMPTY:CALL_WITH_EVENT;t.setAttribute(a,`${r}${s}${o}`)}return r}printShadow(e){return fetchMarkup(this.#t,this).then((t=>this.cookMarkup(t,e))).catch((e=>DEBUG&&say("warn!",e))).finally(this.markLoaded)}};class StateKey extends String{constructor(e){super(null==e?"system-key:"+systemKeys++:`client-key:${e}`)}}async function use(name){let component;await fetchScript(name).then((script=>{const Base=BangBase(name),Compose=`(function () { ${Base.toString()}; return ${script}; }())`;try{component=eval(Compose)}catch(e){say("warn!",e,Compose,component)}})).catch((e=>{DEBUG&&say("log!",e),component=BangBase(name)})),self.customElements.define(name,component),DEBUG&&self.customElements.whenDefined(name).then((e=>say("log",name,"defined",e)))}async function schedule(e,t,{batchSize:n=1,yieldTime:r=0,strictSerial:a=!1,useFrame:s=!0}={}){const o=[];let i=0,c=0;for await(const l of e){let e;e=a?await t(l,i):t(l,i),o.push(e),i++,c++,c<n||(c=0,s?await nextFrame():r>-1&&await sleep(r))}return o}function undoState(e,t=(e=>e)){for(;hindex>0;)if(hindex-=1,History[hindex].name===e)return DEBUG&&console.log("Undo state to",History[hindex],hindex,History),setState(e,t(History[hindex].value)),!0;return!1}function redoState(e,t=(e=>e)){for(;hindex<History.length-1;)if(hindex+=1,History[hindex].name===e)return DEBUG&&console.log("Redo state to",History[hindex],hindex,History),setState(e,t(History[hindex].value)),!0;return!1}function bangFig(e={}){Object.assign(CONFIG,e)}function runCode(context,str){with(context)return eval(str)}function stateChanged(e){const t=STATE.get(e),n=STATE.get(t+".json.last"),r=JS(e);return{key:t,didChange:n!==r,stateJSON:r,oStateJSON:n}}function updateState(e,t){if(!(t=t||STATE.get(e)))throw console.warn("no key for state",e),new ReferenceError("Key must exist to update state.");DEBUG&&console.log("update state",t,e,STATE);const n=t,r=STATE.get(t+".json.last");DEBUG&&console.log("last state",r);const a=JS(e);STATE.delete(r),STATE.set(t,e),t.startsWith("system-key:")&&(STATE.delete(t),STATE.delete(t+".json.last"),t=new StateKey+"",STATE.set(t,e),STATE.set(e,t)),STATE.set(t+".json.last",a),STATE.set(a,t+".json.last");const s=Dependents.get(n);return Dependents.set(t,s),t}function getViews(e){const t=STATE.get(e),n=Dependents.get(t);return n?Array.from(n):(console.warn("No acquirers for key"),[])}function setState(e,t,{rerender:n=!0,save:r=!1}={}){const a=JS(t);let s=e+".json.last";if(GET_ONLY?STATE.has(e)?(DEBUG&&console.log("Updating state",e),STATE.get(s)!==a&&(DEBUG&&console.log("State really changed. Will update",e),e=updateState(t,e))):(STATE.set(e,t),STATE.set(t,e),DEBUG&&console.log("Setting stringified state",t,e),STATE.set(a,s),STATE.set(s,a)):(STATE.set(e,t),STATE.set(t,e),STATE.set(a,s),STATE.set(s,a)),r&&(hindex=Math.min(hindex+1,History.length),History.splice(hindex,0,{name:e,value:clone(t)}),DEBUG&&console.log("set state history add",hindex,History.length-1,History)),n){const t=Dependents.get(e);DEBUG&&console.log({acquirers:t,Dependents:Dependents}),t&&t.forEach((e=>e.print()))}return!0}function patchState(e,t){return setState(e,t,{rerender:!1})}function cloneState(e,t=GET_ONLY){if(t)return STATE.get(e);if(STATE.has(e))return clone(STATE.get(e));throw new ReferenceError(`State store does not have the key ${e}`)}async function loaded(){return becomesTrue(loadCheck)}function loadCheck(){const e=Counts.started>0,t=Counts.finished>=Counts.started;return e&&t}async function bangLoaded(){return becomesTrue((()=>"function"==typeof _c$))}async function pipeLinedFetch(...e){if(!PIPELINE_REQUESTS)return fetch(...e);const t=nextRequestId(),n={args:e,started:new Date};let r;if(RequestPipeLine.size<MAX_CONCURRENT_REQUESTS){r=fetch(...e).catch((e=>(say("log",e),e))),n.pr=r,RequestPipeLine.set(t,n),DEBUG&&console.log(`${RequestPipeLine.size} concurrent running requests. Request just started and added at ${n.started}`);const a=e=>{const n=RequestPipeLine.get(t);if(n.finished=new Date,n.duration=n.finished-n.started,RequestPipeLine.delete(t),DEBUG&&console.log(`${RequestPipeLine.size} concurrent running requests. Request just resolved and removed after ${(n.duration/1e3).toFixed(1)} seconds.`),RequestWaiting.length&&RequestPipeLine.size<MAX_CONCURRENT_REQUESTS){const e=RequestWaiting.shift();fetch(...e.args).then(a).then((t=>(e.resolve(t),t))).catch((t=>(e.reject(t),t))),RequestPipeLine.set(t,e),DEBUG&&console.log(`${RequestPipeLine.size} concurrent running requests. Request just started and added at ${e.started}`)}return e};r.then(a)}else{let e,t;r=new Promise(((n,r)=>(e=n,t=r))),n.resolve=e,n.reject=t,RequestWaiting.push(n)}return r}function nextRequestId(){return`${RequestId++}${Math.random().toString(36)}`}async function install(){Object.assign(globalThis,{use:use,setState:setState,patchState:patchState,cloneState:cloneState,loaded:loaded,sleep:sleep,bangFig:bangFig,bangLoaded:bangLoaded,isMobile:isMobile,trace:trace,undoState:undoState,redoState:redoState,stateChanged:stateChanged,getViews:getViews,updateState:updateState,dateString:dateString,runCode:runCode,...DEBUG?{STATE:STATE,CACHE:CACHE,TRANSFORMING:TRANSFORMING,Started:Started,BangBase:BangBase}:{}});const e=globalThis.vanillaview||await __webpack_require__.e(943).then(__webpack_require__.bind(__webpack_require__,943)),{s:t}=e,n={STATE:STATE,CONFIG:CONFIG,StateKey:StateKey,JS:JS};_c$=t.bind(n),n._c$=_c$,CONFIG.delayFirstPaintUntilLoaded&&becomesTrue((()=>document.body)).then((()=>document.body.classList.add("bang-el"))),observer=new MutationObserver(transformBangs),observer.observe(document,OBSERVE_OPTS),await findBangs(transformBang),loaded(globalThis.bangRatio).then((()=>document.body.classList.add("bang-styled")))}async function fetchMarkup(e,t){const n=`markup:${e}`;Started.has(n)?CACHE.has(n)||await cacheHasKey(n):Started.add(n);const r=`style${e}`,a=`${CONFIG.componentsPath}/${e}`;if(CACHE.has(n)){const e=CACHE.get(n);if(CACHE.get(r),Error,!(CACHE.get(r)instanceof Error&&e.includes(`href=${a}/${CONFIG.styleFile}`)))return e}const s=`${a}/${CONFIG.htmlFile}`;let o;return await pipeLinedFetch(s).then((async t=>{let n=EMPTY;return n=t.ok?await t.text():"<slot></slot>",o=CACHE.get(r)instanceof Error?`<style>\n            ${await fetchFile(EMPTY,CONFIG.styleFile).catch((e=>`/* ${e+EMPTY} */`)).then((t=>t instanceof Error?`/* no ${e}/${CONFIG.styleFile} defined */`:t))}\n          </style>${n}`:`<style>\n            ${await fetchFile(EMPTY,CONFIG.styleFile).catch((e=>`/* ${e+EMPTY} */`)).then((t=>t instanceof Error?`/* no ${e}/${CONFIG.styleFile} defined */`:t))}\n            ${await fetchStyle(e).then((t=>t instanceof Error?`/* no ${e}/${CONFIG.styleFile} defined */`:t))}\n          </style>${n}`,o})).finally((async()=>CACHE.set(n,await o)))}async function fetchFile(e,t){const n=`${t}:${e}`;if(Started.has(n)?CACHE.has(n)||await cacheHasKey(n):Started.add(n),CACHE.has(n))return CACHE.get(n);const r=`${CONFIG.componentsPath}/${e?e+"/":EMPTY}${t}`;let a;return await pipeLinedFetch(r).then((e=>{if(e.ok)return a=e.text(),a;throw a=new ReferenceError(`Fetch error: ${r}, ${e.statusText}`),a})).finally((async()=>CACHE.set(n,await a)))}async function fetchStyle(e){return fetchFile(e,CONFIG.styleFile)}async function fetchScript(e){return fetchFile(e,CONFIG.scriptFile)}async function transformBangs(e){for(const t of e){DEBUG&&say("log",t);const{addedNodes:e}=t;if(!e)return;for(const t of e)await findBangs(transformBang,t)}}function transformBang(e){DEBUG&&say("log",{transformBang:transformBang},{current:e});const[t,n]=getBangDetails(e);DEBUG&&say("log",{name:t,data:n});const r=createElement(t,n);say("log",{current:e,actualElement:r}),e.linkedCustomElement=r,r[MirrorNode]=e,e.parentNode.replaceChild(r,e)}async function findBangs(e,t=document.documentElement,{allDependents:n=!1,batchSize:r=10,yieldTime:a=0,useFrame:s=!0}={}){if(t.noFindBang)return n?[]:void 0;const o=n?e=>e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.ELEMENT_NODE:e=>e.nodeType===Node.COMMENT_NODE,i=n?NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_ELEMENT:NodeFilter.SHOW_COMMENT,c=n?getNodeDetails:getBangDetails,l=n?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_REJECT,u={acceptNode(e){if(o(e)){const[t]=c(e);return t.match(DOUBLE_BARREL)?NodeFilter.FILTER_ACCEPT:l}return isDocument(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}},d=document.createTreeWalker(t,i,u),f=[],h=[];DEBUG&&console.log("root",t,{allDependents:n});let p=d.currentNode;if(isBangTag(p)&&!TRANSFORMING.has(p)){TRANSFORMING.add(p);const e=p;f.push((()=>transformBang(e)))}for(;p=d.nextNode(),p;){if(p.nodeType===Node.COMMENT_NODE&&!TRANSFORMING.has(p)){TRANSFORMING.add(p);const e=p;f.push((()=>transformBang(e)))}h.push(p)}let E=0;for(;f.length;)f.pop()(),E++,E<r||(E=0,s?await nextFrame():await sleep(a));return n?h.map(actualElement).filter((e=>e&&!e.hasAttribute("lazy"))):void 0}function actualElement(e){return e.nodeType===Node.COMMENT_NODE?e.linkedCustomElement:e}function getAncestor(e,t){if(e){const n=[PARENT_PATH+ONE_HIGHER];for(;e;){if(e[t]instanceof Function)return n.join(EMPTY);e=e.getRootNode().host,n.push("getRootNode().host.")}}return null}function isBangTag(e){return e.nodeType===Node.COMMENT_NODE&&getBangDetails(e)[0].match(DOUBLE_BARREL)}function isDocument(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE||e.nodeType===Node.DOCUMENT_NODE}function getBangDetails(e){const t=e.textContent.trim(),[n,...r]=t.split(/[\s\t]/g);return[n.trim(),r.join(" ")]}function getNodeDetails(e){switch(e.nodeType){case Node.COMMENT_NODE:return getBangDetails(e);case Node.ELEMENT_NODE:return[e.localName]}}async function process(e,t){const n=typeof e;if("string"===n)return e;if("number"===n)return e+EMPTY;if("boolean"===n)return e+EMPTY;if(e instanceof Date)return e+EMPTY;if(isUnset(e)){if(CONFIG.allowUnset)return CONFIG.unsetPlaceholder||EMPTY;throw new ReferenceError(`Value cannot be unset, was: ${e}`)}if(e instanceof Promise)return await e.catch((e=>(say("warn!",e),e+EMPTY)));if(e instanceof Element)return e.outerHTML;if(e instanceof Node)return e.textContent;if(isIterable(e))return(await Promise.all((await Promise.all(Array.from(e)).catch((e=>(say("warn!",err),err+EMPTY)))).map((e=>process(e,t))))).join(" ");if("AsyncFunction"===Object.getPrototypeOf(e).constructor.name)return await e(t);if(e instanceof Function)return e(t);{const t=JS(e);let n;if(isUnset(e[CONFIG.bangKey]))if(STATE.has(t))n=STATE.get(t);else{n=new StateKey+EMPTY;const r=n+".json.last";STATE.set(n,e),STATE.set(e,n),STATE.set(js,r),STATE.set(r,t)}else{n=new StateKey(e[CONFIG.bangKey])+EMPTY;const r=n+".json.last",a=STATE.get(r);a!==t&&(STATE.delete(a),STATE.delete(STATE.get(n)),STATE.set(n,e),STATE.set(e,n),STATE.set(t,r),STATE.set(r,t))}return n+=EMPTY,DEBUG&&say("log",{stateKey:n}),n}}async function cook(markup,state){const that=this;let cooked=EMPTY;try{state._self||Object.defineProperty(state,"_self",{value:state}),DEBUG&&say("log","_self",state._self)}catch(e){say("warn!","Cannot add '_self' self-reference property to state. \n            This enables a component to inspect the top-level state object it is passed.")}try{with(state)cooked=await eval("(async function () { return await _FUNC`${{state}}"+markup+"`; }())");return DEBUG&&console.log({cooked:cooked}),cooked}catch(error){throw say("error!","Template error",{markup:markup,state:state,error:error}),error}}async function _FUNC(e,...t){const n=Array.from(e);return await _c$(n,...t)}function createElement(e,t){return toDOM(`<${e} ${t}></${e}>`).firstElementChild}function toDOM(e){return DIV.replaceChildren(),DIV.insertAdjacentHTML(POS,`<template>${e}</template>`),DIV.firstElementChild.content}function toDOM_(e){return Template.innerHTML=e,Template.content}async function becomesTrue(e=(()=>!0)){return new Promise((async t=>{for(;await nextFrame(),!e(););t(!0)}))}async function cacheHasKey(e){try{const t=`cache:${e}`;let n,r=Waiters.get(t);if(!r){const n=[];r={WaitKey:t,list:n,event:becomesTrue((()=>CACHE.has(e))).then((()=>n.reverse().forEach((e=>e()))))},Waiters.set(t,r),DEBUG&&console.log("Setup waiter list",r)}const a=new Promise((e=>n=e));return r.list.push(n),a}catch(e){}}async function sleep(e){return new Promise((t=>setTimeout(t,e)))}async function nextFrame(){return new Promise((e=>requestAnimationFrame(e)))}function isIterable(e){return null!==e&&e[Symbol.iterator]instanceof Function}function isUnset(e){return null==e}function say(e,...t){(DEBUG||"error"===e||e.endsWith("!"))&&MOBILE&&!LIGHTHOUSE&&alert(`${e}: ${t.join("\n")}`),(DEBUG||"error"===e||e.endsWith("!"))&&console[e.replace("!",EMPTY)](...t)}function isMobile(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((e=>navigator.userAgent.match(e)))}function trace(e=EMPTY){const t=new Error("Trace");console.log(e,"Call stack",t.stack)}function dateString(e){const t=e.getTimezoneOffset();return(e=new Date(e.getTime()-60*t*1e3)).toISOString().split("T")[0]}function clone(e){return JSON.parse(JS(e))}install()}()}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=function(e,t){for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,n){return __webpack_require__.f[n](e,t),t}),[]))},__webpack_require__.u=function(e){return e+".bang.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},inProgress={},dataWebpackPrefix="bang.html:",__webpack_require__.l=function(e,t,n,r){if(inProgress[e])inProgress[e].push(t);else{var a,s;if(void 0!==n)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var c=o[i];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==dataWebpackPrefix+n){a=c;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",dataWebpackPrefix+n),a.src=e),inProgress[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(u);var r=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e}(),function(){var e={179:0};__webpack_require__.f.j=function(t,n){var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var s=__webpack_require__.p+__webpack_require__.u(t),o=new Error;__webpack_require__.l(s,(function(n){if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,r[1](o)}}),"chunk-"+t,t)}};var t=function(t,n){var r,a,s=n[0],o=n[1],i=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)__webpack_require__.o(o,r)&&(__webpack_require__.m[r]=o[r]);i&&i(__webpack_require__)}for(t&&t(n);c<s.length;c++)a=s[c],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[s[c]]=0},n=self.webpackChunkbang_html=self.webpackChunkbang_html||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var __webpack_exports__=__webpack_require__(876)})();