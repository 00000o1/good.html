(function(){var __webpack_modules__={876:function(__unused_webpack_module,exports,__webpack_require__){!function(e){const t=""+Math.random(),n=A,r=O,s=()=>{},a=/(?:<!\-\-)?(key\d+)(?:\-\->)?/gm,o=/\w+=/,i=20;new DOMParser;const c=new class{beforeend(e,t){t.appendChild(e)}beforebegin(e,t){t.parentNode.insertBefore(e,t)}afterend(e,t){t.parentNode.insertBefore(e,t.nextSibling)}replace(e,t){t.parentNode.replaceChild(e,t)}afterbegin(e,t){t.insertBefore(e,t.firstChild)}innerhtml(e,t){t.innerHTML="",t.appendChild(e)}insert(e,t){t.replaceChildren(e)}},l=new Map;globalThis.onerror=(...e)=>(console.log(e,e[0]+"",e[4]&&e[4].message,e[4]&&e[4].stack),!0);const u=e=>!!e&&("string"==typeof e.key||"number"==typeof e.key)&&Object.getOwnPropertyNames(e).length<=2,d={};async function f(e,...t){const n=this;let r,s=!1;if(0===e[0].length&&t[0].state&&(s=!0),s)return({state:r}=t.shift()),e.shift(),t=await Promise.all(t.map((e=>y(n,e,r)))),p(e,t);{const r=async r=>(t=await Promise.all(t.map((e=>y(n,e,r)))),p(e,t));return r}}function h(e,...t){return p(e,t,{useCache:!1})}function p(e,n,{useCache:r=!0}={}){const s={};let a,o;if(n=n.map(C),r){a=n.find(u)||{},o=e.join("<link rel=join>");const{cached:t,firstCall:r}=function(e,t,n){let r,s=d[e];return null==s?(s=d[e]={},void 0!==n.key&&(s.instances={},s=s.instances[n.key]={}),r=!0):void 0!==n.key?s.instances?(s=s.instances[n.key],s?!0===n.kill?(s=d[e],s&&s.instances&&(s.instances[n.key]=null),s=null,r=!0):r=!1:r=!0):(s.instances={},r=!0):r=!1,{cached:s,firstCall:r}}(o,0,a);if(!r)return t.update(n),t;s.oldVals=Array.from(n)}else s.oldVals=Array.from(n);e=[...e];const c={},f=n.map(function(e){return(n,r)=>{if(u(n))return"";const s=("key"+Math.random()).replace(".","").padEnd(i,"0").slice(0,i);let a=s;return n.code===t&&Array.isArray(n.nodes)&&(a=`\x3c!--${a}--\x3e`),e[s.trim()]={vi:r,val:n,replacers:[]},a}}(c)),h=[];let p="";for(;e.length>1;)p+=e.shift()+f.shift();p+=e.shift();const y=v(p),g=document.createTreeWalker(y,NodeFilter.SHOW_ALL);do{_({walker:g,vmap:c,externals:h})}while(g.nextNode());return Object.assign(s,{externals:h,v:Object.values(c),cacheKey:o,instance:a,to:m,update:D,code:t,nodes:[...y.childNodes]}),r&&(void 0!==a.key?d[o].instances[a.key]=s:d[o]=s,s.nodes.forEach((e=>{l.set(e,JSON.stringify({cacheKey:o,instanceKey:a.key+""}))}))),s}async function y(e,n,r){if("string"==typeof n)return n;if("number"==typeof n)return n+"";if("boolean"==typeof n)return n+"";if(n instanceof Date)return n+"";if(g(n)){if(e.CONFIG.allowUnset)return e.CONFIG.unsetPlaceholder||"";throw new TypeError(`Value cannot be unset, was: ${n}`)}if(n instanceof Promise)return await y(e,await n.catch((e=>e+"")),r);if(n instanceof Element)return n.outerHTML;if(n instanceof Node)return n.textContent;const s=Array.isArray(n)&&(0===n.length||Array.isArray(n[0].nodes));if(null!==(a=n)&&a[Symbol.iterator]instanceof Function&&!s)return y(e,await Promise.all((await Promise.all(Array.from(n)).catch((e=>err+""))).map((t=>y(e,t,r)))),r);var a;const o=u(n),i=n.code===t&&Array.isArray(n.nodes),c=n.code===t&&"string"==typeof n.str;if(s||o||c||i)return s?x(n):n;if("AsyncFunction"===Object.getPrototypeOf(n).constructor.name)return await y(e,await n(r),r);if(n instanceof Function)return n(r);{let t;if(Object.prototype.hasOwnProperty.call(n,e.CONFIG.bangKey)){t=new e.StateKey(n[e.CONFIG.bangKey])+"";const r=e.STATE.get(t);e.STATE.delete(r),e.STATE.set(t,n),e.STATE.set(n,t)}else{if(e.STATE.has(n)){t=e.STATE.get(n);const r=e.STATE.get(t+".json.last");JSON.stringify(n)!==r&&(e.STATE.delete(r),t.startsWith("system-key")&&(e.STATE.delete(t),t=new e.StateKey+""),e.STATE.set(t,n),e.STATE.set(n,t))}else t=new e.StateKey+"",e.STATE.set(t,n),e.STATE.set(n,t);e.STATE.set(JSON.stringify(n),t+".json.last"),e.STATE.set(t+".json.last",JSON.stringify(n))}return t+="",t}}function g(e){return null==e}function m(e,t){const n=(t||"replace").toLocaleLowerCase(),r=document.createDocumentFragment();this.nodes.forEach((e=>r.appendChild(e)));const s=e instanceof Node?e:document.querySelector(e);try{c[n](r,s)}catch(t){switch(t.constructor&&t.constructor.name){case"DOMException":B({error:"Error inserting template into DOM. Position must be one of: replace, beforebegin, afterbegin, beforeend, innerhtml, afterend"});break;case"TypeError":B({error:(a=e,`Error inserting template into DOM. Location ${a} was not found in the document.`)});break;default:throw t}}for(var a;this.externals.length;)this.externals.shift()()}function _({walker:e,vmap:t,externals:n}){const r=e.currentNode;switch(r.nodeType){case Node.ELEMENT_NODE:!function({node:e,vmap:t,externals:n}){T(e).forEach((({name:r,value:s}={})=>{const o={node:e,vmap:t,externals:n,name:r,lengths:[]};a.lastIndex=0;let i=a.exec(r);for(;i;)b(i,o,{updateName:!0}),i=a.exec(r);for(a.lastIndex=0,i=a.exec(s);i;)b(i,o,{updateName:!1}),i=a.exec(s)}))}({node:r,vmap:t,externals:n});break;case Node.COMMENT_NODE:case Node.TEXT_NODE:!function({node:e,vmap:t,externals:n}){const r=[],s=e.nodeValue;let o=a.exec(s);for(;o;){const{index:i}=o,c=t[o[1]],l=E({node:e,index:i,lengths:r,val:c});n.push((()=>l(c.val))),c.replacers.push(l),o=a.exec(s)}}({node:r,vmap:t,externals:n})}}function E(e){const{node:t}=e,n=Object.assign({},e,{oldVal:{length:i},oldNodes:[t],lastAnchor:t});return e=>{if(n.oldVal!=e)switch(n.val.val=e,N(e)){case"markupobject":case"vanillaviewobject":!function(e,t){let{oldNodes:n,lastAnchor:r}=t;if(e.nodes.length)if(s=n,a=e.nodes,s.length==a.length&&Array.from(s).every(((e,t)=>e==a[t])));else{const n=[];for(Array.from(e.nodes).forEach((e=>{if(document.contains(e.ownerDocument))for(;n.length;){const t=n.shift();e.parentNode.insertBefore(t,e)}else n.push(e)}));n.length;){const e=n.shift();r.parentNode.insertBefore(e,r)}t.lastAnchor=e.nodes[e.nodes.length-1]}else{const e=function(e){let t=[...e.parentNode.childNodes].find((e=>e.isConnected&&e.nodeType==Node.COMMENT_NODE&&"vanillaview_placeholder"==e.nodeValue));return t||(t=v("\x3c!--vanillaview_placeholder--\x3e").firstChild),t}(r);r.parentNode.insertBefore(e,r.nextSibling),t.lastAnchor=e}var s,a;const o=(i=n,c=e.nodes,i=new Set(i),c=new Set(c),new Set([...i].filter((e=>!c.has(e)))));var i,c;if(o.size){const e=document.createDocumentFragment(),t=new Set;o.forEach((n=>{if(e.appendChild(n),n.linkedCustomElement&&e.appendChild(n.linkedCustomElement),n.nodeType===Node.COMMENT_NODE&&n.textContent.match(/key\d+/))return;const r=l.get(n);t.add(r)})),t.forEach((e=>{const{cacheKey:t,instanceKey:n}=JSON.parse(e);t&&n?d[t].instances[n]=null:t&&(d[t]=null)}))}for(t.oldNodes=e.nodes||[r];e.externals.length;)e.externals.shift()()}(e,n);break;default:!function(e,t){let{oldVal:n,index:r,val:s,lengths:a,node:o}=t;const c=s.vi,l=Object.keys(a.slice(0,c)).length*i,u=a.slice(0,c).reduce(((e,t)=>e+t),0),d=o.nodeValue;a[c]=e.length;const f=u-l,h=d.slice(0,r+f)+e+d.slice(r+f+n.length);o.nodeValue=h,o.linkedCustomElement&&h!==n&&function(e){const t=e.linkedCustomElement,n=v(`<span ${e.textContent}></span>`).firstChild,r=new Set(T(t).filter((({name:e})=>!e.startsWith("on"))).map((({name:e})=>e)));T(n).forEach((({name:e,value:n})=>{e!==t.localName&&(e.startsWith("on")||(t.setAttribute(e,n),r.delete(e)))})),r.forEach((e=>t.removeAttribute(e)))}(o),t.oldVal=e}(e,n)}}}function b(e,t,{updateName:n}){const{index:r,input:s}=e,a=Object.assign({},t,{index:r,input:s,updateName:n,val:t.vmap[e[1]],oldVal:{length:i},oldName:t.name});let c;c=n?function(e){let{oldName:t,node:n,val:r}=e;return e=>{if(t==e)return;r.val=e;const s=n.hasAttribute(t)?t:"";if(s!==e){if(s&&(n.removeAttribute(t),n[t]=void 0),e){let t,r=e=e.trim();if(o.test(e)){const n=e.indexOf("=");[r,t]=[e.slice(0,n),e.slice(n+1)]}w(n,r,t)}t=e}}}(a):function(e){const t=t=>{if(e.oldVal!=t)switch(e.val.val=t,N(t)){case"funcarray":!function(e,t){let{oldVal:n,node:r,name:s,externals:a}=t;if(n&&!Array.isArray(n)&&(n=[n]),"bond"!==s){let t={};s.includes(":")&&([s,...t]=s.split(":"),t=t.reduce(((e,t)=>(e[t]=!0,e)),{})),n&&n.forEach((e=>r.removeEventListener(s,e,t))),e.forEach((e=>r.addEventListener(s,e,t)))}else n&&n.forEach((e=>{const t=a.indexOf(e);t>=0&&a.splice(t,1)})),e.forEach((e=>a.push((()=>e(r)))));t.oldVal=e}(t,e);break;case"function":!function(e,t){let{oldVal:n,node:r,name:s,externals:a}=t;if("bond"!==s){let t={};s.includes(":")&&([s,...t]=s.split(":"),t=t.reduce(((e,t)=>(e[t]=!0,e)),{})),n&&r.removeEventListener(s,n,t),r.addEventListener(s,e,t),w(r,s,"")}else{if(n){const e=a.indexOf(n);e>=0&&a.splice(e,1)}a.push((()=>e(r)))}t.oldVal=e}(t,e);break;case"handlers":!function(e,t){let{oldVal:n,node:r,externals:s}=t;n&&"object"==typeof n&&Object.entries(n).forEach((([e,t])=>{if("bond"!==e){let n={};e.includes(":")&&([e,...n]=e.split(":"),n=n.reduce(((e,t)=>(e[t]=!0,e)),{})),console.log(e,t,n),r.removeEventListener(e,t,n)}else{const e=s.indexOf(t);e>=0&&s.splice(e,1)}})),Object.entries(e).forEach((([e,t])=>{if("bond"!==e){let n={};e.includes(":")&&([e,...n]=e.split(":"),n=n.reduce(((e,t)=>(e[t]=!0,e)),{})),r.addEventListener(e,t,n)}else s.push((()=>t(r)))})),t.oldVal=e}(t,e);break;case"markupobject":case"vanillaviewobject":S(t=function(e){const t=document.createDocumentFragment();e.forEach((e=>t.appendChild(e.cloneNode(!0))));const n=document.createElement("body");return n.appendChild(t),n.innerHTML}(t.nodes),e);break;case"markupattrobject":t=t.str;default:S(t,e)}};return t(e.val.val),t}(a),a.externals.push((()=>c(a.val.val))),a.val.replacers.push(c)}function T(e){if(!e.hasAttribute)return[];if(e.hasAttribute("class")&&e.setAttribute("class",k(e.getAttribute("class"))),e.attributes&&Number.isInteger(e.attributes.length))return Array.from(e.attributes);const t=[];for(const n of e)e.hasAttribute(n)&&t.push({name:n,value:e.getAttribute(n)});return t}function S(e,t){let{oldVal:n,node:r,index:s,name:a,val:o,lengths:c}=t,l=0;const u=o.vi,d=Object.keys(c.slice(0,u)).length*i;"class"==a&&(0==(e=e.trim()).length&&(l=-1),t.val.val=e),c[u]=e.length+l;let f=r.getAttribute(a);const h=c.slice(0,u).reduce(((e,t)=>e+t),0)-d,p=f.slice(0,s+h),y=f.slice(s+h+n.length);let g;if("class"==a){const t=0==n.length?" ":"";g=p+t+e+t+y}else g=p+e+y;w(r,a,g),t.oldVal=e}function w(e,t,n){"class"==t&&(n=k(n));try{e.setAttribute(t,g(n)?t:n)}catch(e){}if("style"!==t)try{e[t]=!!g(n)||n}catch(e){}}function N(e){const n=typeof e;return"function"===n?"function":e.code===t&&Array.isArray(e.nodes)?"vanillaviewobject":e.code===t&&"string"==typeof e.str?"markupattrobject":Array.isArray(e)&&(0===e.length||e[0].code===t&&Array.isArray(e[0].nodes))?"vanillaviewarray":!Array.isArray(e)||0!==e.length&&"function"!=typeof e[0]?"object"===n?"handlers":"default":"funcarray"}function A(e){const n=v(e=g(e)?"":e);return{type:"MarkupObject",code:t,nodes:[...n.childNodes],externals:[]}}function O(e){return e=(e=g(e)?"":e).replace(/"/g,"&quot;"),{type:"MarkupAttrObject",code:t,str:e}}function k(e){return(e=e.trim()).replace(/\s+/g," ")}function v(e){const t=document.createElement("template");return t.innerHTML=e,t.content}function C(e){const n=Array.isArray(e)&&(0===e.length||Array.isArray(e[0].nodes)),r=g(e),s=e.code!==t&&Array.isArray(e.nodes),a="object"==typeof e;return n?x(e):u(e)||e.code===t?e:(r&&B({error:"Unset values not allowed here."}),s&&B({error:"Possible XSS / object forgery attack detected. Object code could not be verified."}),a&&B({error:"Object values not allowed here."}),e+"")}function x(e){const n=[],r=[];return e.forEach((e=>{n.push(...e.externals),r.push(...e.nodes)})),{v:[],code:t,oldVals:[],nodes:r,to:m,update:D,externals:n}}function D(e){this.v.filter((({vi:t})=>function(e,t){const[n,r]=[e,t].map(N);let s;if(n!=r)s=!0;else switch(n){case"vanillaviewobject":case"funcarray":case"function":case"vanillaviewarray":case"markupattrobject":case"markupobject":s=!0;break;default:s=JSON.stringify(e)!==JSON.stringify(t)}return s}(e[t],this.oldVals[t]))).forEach((({vi:t,replacers:n})=>n.forEach((n=>n(e[t]))))),this.oldVals=Array.from(e)}function B(e,t){throw e.stack=(new Error).stack.split(/\s*\n\s*/g),JSON.stringify(e,null,2)}Object.assign(f,{say:function(e){},attrskip:r,skip:n,attrmarkup:O,markup:A,guardEmptyHandlers:function(e){return Array.isArray(e)?0==e.length?[s]:e:g(e)?s:void 0},die:B}),Object.assign(globalThis,{vanillaview:{c:h,s:f}}),e.c=h,e.s=f,Object.defineProperty(e,"__esModule",{value:!0})}(exports),function(){const DEBUG=!1,PIPELINE_REQUESTS=!0,RANDOM_SLEEP_ON_FIRST_PRINT=!0,OPTIMIZE=!0,GET_ONLY=!0,MOBILE=isMobile(),LIGHTHOUSE=navigator.userAgent.includes("Chrome-Lighthouse"),DOUBLE_BARREL=/^\w+-(?:\w+-?)*$/,F=_FUNC,FUNC_CALL=/\);?$/,MirrorNode=Symbol.for("[[MN]]"),Template=document.createElement("template"),path=location.pathname,CONFIG={htmlFile:"markup.html",scriptFile:"script.js",styleFile:"style.css",bangKey:"_bang_key",componentsPath:`${path}${path.endsWith("/")?"":"/"}components`,allowUnset:!1,unsetPlaceholder:"",EVENTS:"error load click pointerdown pointerup pointermove mousedown mouseup \n        mousemove touchstart touchend touchmove touchcancel dblclick dragstart dragend \n        dragmove drag mouseover mouseout focus blur focusin focusout scroll\n        input change compositionstart compositionend text paste beforepast select cut copy\n        contextmenu\n      ".split(/\s+/g).filter((e=>e.length)).map((e=>`[on${e}]`)).join(","),delayFirstPaintUntilLoaded:!1,capBangRatioAtUnity:!1,noHandlerPassthrough:!1},History=[],STATE=new Map,CACHE=new Map,Waiters=new Map,Started=new Set,TRANSFORMING=new WeakSet,Dependents=new Map,MAX_CONCURRENT_REQUESTS=5,RequestPipeLine=new Map,RequestWaiting=[];class Counter{started=0;finished=0}const Counts=new Counter,OBSERVE_OPTS={subtree:!0,childList:!0,characterData:!0};let RequestId=0,hindex=0,observer,systemKeys=1,_c$;const BangBase=e=>class t extends HTMLElement{static#e=["state"];static get observedAttributes(){return Array.from(t.#e)}#t=e;#n=[];constructor({task:t=(()=>{})}={}){super(),DEBUG&&say("log",e,"constructed"),this.counts=new Counter,this.hasAttribute("lazy")&&RANDOM_SLEEP_ON_FIRST_PRINT?sleep(162*Math.random()).then((()=>this.print().then(t))):this.print().then(t)}get name(){return this.#t}async print(){this.alreadyPrinted||this.prepareVisibility();const e=this.handleAttrs(this.attributes);if(OPTIMIZE){const t=JSON.stringify(e);if(this.alreadyPrinted&&this.lastState===t)return void(DEBUG&&console.log(this,"state no change, returning"));this.lastState=t}return this.printShadow(e)}connectedCallback(){say("log",e,"connected"),this.handleAttrs(this.attributes,{originals:!0})}prepareVisibility(){this.alreadyPrinted=!0,this.classList.add("bang-el"),this.counts.started++,this.classList.remove("bang-styled"),fetchStyle(e).catch((e=>{say("warn!",e)}))}async untilLoaded(){this.#n=this.#n;const e=(await Promise.all(this.#n)).every((e=>e));return await becomesTrue((()=>this.counts.started>0&&this.counts.finished>=this.counts.started))&&e}setVisible(){this.classList.add("bang-styled")}get state(){const e=this.getAttribute("state");if(e.startsWith("system-key:"))throw new TypeError("Cannot use cloneState built-in when component has an implicit key. \n            Instead use the global cloneState(key) method with an appropriate string key \n            from an ancestor component that sets a string key.\n          ");return cloneState(e)}set state(e){const t=this.getAttribute("state");if(t.startsWith("system-key:"))throw new TypeError("Cannot use setState built-in when component has an implicit key. \n            Instead use the global setState(key, data) method with an appropriate string key \n            from an ancestor component that sets a string key.\n          ");return setState(t,e)}attributeChangedCallback(e,t,n){"state"!==e||isUnset(t)||STATE.get(t+".json.last")!==JSON.stringify(STATE.get(n))&&(DEBUG&&say("log","Changing state, so calling print.",t,n,this),this.print())}handleAttrs(e,{node:t,originals:n}={}){let r={};t||(t=this);for(let{name:s,value:a}of e)if(!isUnset(a))if("state"===s){const e=a,o=cloneState(e);if(isUnset(o))throw new ReferenceError(`\n                <${s}> constructor passed state key ${e} which is unset. It must be set.\n              `);if(r=o,n){let n=Dependents.get(e);n||(n=new Set,Dependents.set(e,n)),n.add(t),DEBUG&&console.log({acquirers:n,Dependents:Dependents})}}else if(n){if(!s.startsWith("on"))continue;if(a=a.trim(),!a)continue;const e=()=>t[a],n=()=>t.getRootNode().host[a],r=e()?"this.":n()?"this.getRootNode().host.":null;if(!r)continue;if(a.startsWith(r))continue;const o=a.match(FUNC_CALL)||"function"!=typeof e()&&"function"!=typeof n()?"":"(event)";t.setAttribute(s,`${r}${a}${o}`)}return r}printShadow(e){return fetchMarkup(this.#t,this).then((async t=>{const n=await cook.call(this,t,e);if(DEBUG&&console.log(n),this.shadowRoot);else{const e=this.attachShadow({mode:"open"});observer.observe(e,OBSERVE_OPTS),n.to(e,"insert"),e.querySelectorAll(CONFIG.EVENTS).forEach((e=>this.handleAttrs(e.attributes,{node:e,originals:!0})));const t=findBangs(transformBang,e,{allDependents:!0});this.#n=t.map((e=>e.untilLoaded()))}})).catch((e=>DEBUG&&say("warn!",e))).finally((async()=>{if(!this.loaded){this.counts.finished++;const e=await this.untilLoaded();e&&(this.loaded=e,this.setVisible())}}))}};class StateKey extends String{constructor(e){super(null==e?"system-key:"+systemKeys++:`client-key:${e}`)}}async function use(name){let component;await fetchScript(name).then((script=>{const Base=BangBase(name),Compose=`(function () { ${Base.toString()}; return ${script}; }())`;try{component=eval(Compose)}catch(e){say("warn!",e,Compose,component)}})).catch((e=>{DEBUG&&say("log!",e),component=BangBase(name)})),self.customElements.define(name,component),DEBUG&&self.customElements.whenDefined(name).then((e=>say("log",name,"defined",e)))}function undoState(e,t=(e=>e)){for(;hindex>0;)if(hindex-=1,History[hindex].name===e)return setState(e,t(History[hindex].value)),DEBUG&&console.log("Undo state to",History[hindex],hindex,History),!0;return!1}function redoState(e,t=(e=>e)){for(;hindex<History.length-1;)if(hindex+=1,History[hindex].name===e)return setState(e,t(History[hindex].value)),DEBUG&&console.log("Redo state to",History[hindex],hindex,History),!0;return!1}function bangFig(e={}){Object.assign(CONFIG,e)}function setState(e,t,{rerender:n=!0,save:r=!1}={}){if(GET_ONLY)if(STATE.has(e)){DEBUG&&console.log("Updating state",e);const n=STATE.get(e),r=STATE.get(e+".json.last");if(JSON.stringify(t)!==r){DEBUG&&console.log("State really changed. Will update",e),Object.assign(n,t),STATE.delete(r),e.startsWith("system-key:")&&(STATE.delete(e),STATE.delete(e+".json.last"),e=new StateKey,STATE.set(e,n),STATE.set(n,e));const s=JSON.stringify(n);STATE.set(e+".json.last",s),STATE.set(s,e+".json.last")}}else STATE.set(e,t),STATE.set(t,e),DEBUG&&console.log("Setting stringified state",t,e),STATE.set(JSON.stringify(t),e+".json.last"),STATE.set(e+".json.last",JSON.stringify(t));else STATE.set(e,t),STATE.set(t,e),STATE.set(JSON.stringify(t),e+".json.last"),STATE.set(e+".json.last",JSON.stringify(t));if(r&&(hindex=Math.min(hindex+1,History.length),History.splice(hindex,0,{name:e,value:clone(t)}),DEBUG&&console.log("set state history add",hindex,History.length-1,History)),n){const t=Dependents.get(e);DEBUG&&console.log({acquirers:t,Dependents:Dependents}),t&&t.forEach((e=>e.print()))}return!0}function patchState(e,t){return setState(e,t,{rerender:!1})}function cloneState(e,t=GET_ONLY){if(t)return STATE.get(e);if(STATE.has(e))return clone(STATE.get(e));throw new ReferenceError(`State store does not have the key ${e}`)}async function loaded(e=1){return(isUnset(e)||Number.isNaN(e))&&(e=1),CONFIG.capBangRatioAtUnity&&(e=Math.min(1,e)),becomesTrue((()=>{(isUnset(e=globalThis.bangRatio||e)||Number.isNaN(e))&&(e=1),CONFIG.capBangRatioAtUnity&&(e=Math.min(1,e));const t=Counts.started>0,n=Counts.finished>=e*Counts.started;return t&&n}))}async function bangLoaded(){return becomesTrue((()=>"function"==typeof _c$))}async function pipeLinedFetch(...e){if(!PIPELINE_REQUESTS)return fetch(...e);const t=nextRequestId(),n={args:e,started:new Date};let r;if(RequestPipeLine.size<MAX_CONCURRENT_REQUESTS){r=fetch(...e).catch((e=>(say("log",e),e))),n.pr=r,RequestPipeLine.set(t,n),DEBUG&&console.log(`${RequestPipeLine.size} concurrent running requests. Request just started and added at ${n.started}`);const s=e=>{const n=RequestPipeLine.get(t);if(n.finished=new Date,n.duration=n.finished-n.started,RequestPipeLine.delete(t),DEBUG&&console.log(`${RequestPipeLine.size} concurrent running requests. Request just resolved and removed after ${(n.duration/1e3).toFixed(1)} seconds.`),RequestWaiting.length&&RequestPipeLine.size<MAX_CONCURRENT_REQUESTS){const e=RequestWaiting.shift();fetch(...e.args).then(s).then((t=>(e.resolve(t),t))).catch((t=>(e.reject(t),t))),RequestPipeLine.set(t,e),DEBUG&&console.log(`${RequestPipeLine.size} concurrent running requests. Request just started and added at ${e.started}`)}return e};r.then(s)}else{let e,t;r=new Promise(((n,r)=>(e=n,t=r))),n.resolve=e,n.reject=t,RequestWaiting.push(n)}return r}function nextRequestId(){return`${RequestId++}${Math.random().toString(36)}`}async function install(){Object.assign(globalThis,{use:use,setState:setState,patchState:patchState,cloneState:cloneState,loaded:loaded,sleep:sleep,bangFig:bangFig,bangLoaded:bangLoaded,isMobile:isMobile,trace:trace,undoState:undoState,redoState:redoState,dateString:dateString,...DEBUG?{STATE:STATE,CACHE:CACHE,TRANSFORMING:TRANSFORMING,Started:Started,BangBase:BangBase}:{}});const e=globalThis.vanillaview||await __webpack_require__.e(943).then(__webpack_require__.bind(__webpack_require__,943)),{s:t}=e,n={STATE:STATE,CONFIG:CONFIG,StateKey:StateKey};_c$=t.bind(n),n._c$=_c$,CONFIG.delayFirstPaintUntilLoaded&&becomesTrue((()=>document.body)).then((()=>document.body.classList.add("bang-el"))),observer=new MutationObserver(transformBangs),observer.observe(document,OBSERVE_OPTS),findBangs(transformBang),loaded(globalThis.bangRatio).then((()=>document.body.classList.add("bang-styled")))}async function fetchMarkup(e,t){const n=`markup:${e}`;Started.has(n)?CACHE.has(n)||await cacheHasKey(n):Started.add(n);const r=`style${e}`,s=`${CONFIG.componentsPath}/${e}`;if(CACHE.has(n)){const e=CACHE.get(n);if(CACHE.get(r),Error,!(CACHE.get(r)instanceof Error&&e.includes(`href=${s}/${CONFIG.styleFile}`)))return e}const a=`${s}/${CONFIG.htmlFile}`;let o;return await pipeLinedFetch(a).then((async t=>{let n="";return n=t.ok?await t.text():"<slot></slot>",o=CACHE.get(r)instanceof Error?`<style>\n            ${await fetchFile("","style.css").catch((e=>`/* ${e+""} */`)).then((t=>t instanceof Error?`/* no ${e}/style.css defined */`:t))}\n          </style>${n}`:`<style>\n            ${await fetchFile("","style.css").catch((e=>`/* ${e+""} */`)).then((t=>t instanceof Error?`/* no ${e}/style.css defined */`:t))}\n            ${await fetchStyle(e).then((t=>t instanceof Error?`/* no ${e}/style.css defined */`:t))}\n          </style>${n}`,o})).finally((async()=>CACHE.set(n,await o)))}async function fetchFile(e,t){const n=`${t}:${e}`;if(Started.has(n)?CACHE.has(n)||await cacheHasKey(n):Started.add(n),CACHE.has(n))return CACHE.get(n);const r=`${CONFIG.componentsPath}/${e?e+"/":""}${t}`;let s;return await pipeLinedFetch(r).then((e=>{if(e.ok)return s=e.text(),s;throw s=new ReferenceError(`Fetch error: ${r}, ${e.statusText}`),s})).finally((async()=>CACHE.set(n,await s)))}async function fetchStyle(e){return fetchFile(e,CONFIG.styleFile)}async function fetchScript(e){return fetchFile(e,CONFIG.scriptFile)}function transformBangs(e){e.forEach((e=>{DEBUG&&say("log",e);const{addedNodes:t}=e;t&&t.forEach((e=>findBangs(transformBang,e)))}))}function transformBang(e){DEBUG&&say("log",{transformBang:transformBang},{current:e});const[t,n]=getBangDetails(e);DEBUG&&say("log",{name:t,data:n});const r=createElement(t,n);e.linkedCustomElement=r,r[MirrorNode]=e,e.parentNode.replaceChild(r,e)}function findBangs(e,t=document.documentElement,{allDependents:n=!1}={}){const r=n?e=>e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.ELEMENT_NODE:e=>e.nodeType===Node.COMMENT_NODE,s=n?NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_ELEMENT:NodeFilter.SHOW_COMMENT,a=n?getNodeDetails:getBangDetails,o=n?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_REJECT,i={acceptNode(e){if(r(e)){const[t]=a(e);return t.match(DOUBLE_BARREL)?NodeFilter.FILTER_ACCEPT:o}return isDocument(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}},c=document.createTreeWalker(t,s,i),l=[],u=[];DEBUG&&console.log("root",t,{allDependents:n});let d=c.currentNode;if(isBangTag(d)&&!TRANSFORMING.has(d)){TRANSFORMING.add(d);const e=d;l.push((()=>transformBang(e)))}for(;d=c.nextNode(),d;){if(d.nodeType===Node.COMMENT_NODE&&!TRANSFORMING.has(d)){TRANSFORMING.add(d);const e=d;l.push((()=>transformBang(e)))}u.push(d)}for(;l.length;)l.pop()();return u.map((e=>e.nodeType===Node.COMMENT_NODE?e.linkedCustomElement:e)).filter((e=>!e.hasAttribute("lazy")))}function isBangTag(e){return e.nodeType===Node.COMMENT_NODE&&getBangDetails(e)[0].match(DOUBLE_BARREL)}function isDocument(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE||e.nodeType===Node.DOCUMENT_NODE}function getBangDetails(e){const t=e.textContent.trim(),[n,...r]=t.split(/[\s\t]/g);return[n.trim(),r.join(" ")]}function getNodeDetails(e){switch(e.nodeType){case Node.COMMENT_NODE:return getBangDetails(e);case Node.ELEMENT_NODE:return[e.localName.trim(),e.attributes]}}async function process(e,t){const n=typeof e;if("string"===n)return e;if("number"===n)return e+"";if("boolean"===n)return e+"";if(e instanceof Date)return e+"";if(isUnset(e)){if(CONFIG.allowUnset)return CONFIG.unsetPlaceholder||"";throw new ReferenceError(`Value cannot be unset, was: ${e}`)}if(e instanceof Promise)return await e.catch((e=>(say("warn!",e),e+"")));if(e instanceof Element)return e.outerHTML;if(e instanceof Node)return e.textContent;if(isIterable(e))return(await Promise.all((await Promise.all(Array.from(e)).catch((e=>(say("warn!",err),err+"")))).map((e=>process(e,t))))).join(" ");if("AsyncFunction"===Object.getPrototypeOf(e).constructor.name)return await e(t);if(e instanceof Function)return e(t);{const t=JSON.stringify(e);let n;if(Object.prototype.hasOwnProperty.call(e,CONFIG.bangKey)){n=new StateKey(e[CONFIG.bangKey])+"";const r=n+".json.last",s=STATE.get(r);s!==t&&(STATE.delete(s),STATE.delete(STATE.get(n)),STATE.set(n,e),STATE.set(e,n),STATE.set(t,r),STATE.set(r,t))}else if(STATE.has(t))n=STATE.get(t);else{n=new StateKey+"";const r=n+".json.last";STATE.set(n,e),STATE.set(e,n),STATE.set(js,r),STATE.set(r,t)}return n+="",DEBUG&&say("log",{stateKey:n}),n}}async function cook(markup,state){const that=this;let cooked="";try{Object.prototype.hasOwnProperty.call(state,"_self")||Object.defineProperty(state,"_self",{get:()=>state}),DEBUG&&say("log","_self",state._self)}catch(e){say("warn!","Cannot add '_self' self-reference property to state. \n            This enables a component to inspect the top-level state object it is passed.")}try{with(state)cooked=await eval("(async function () { return await _FUNC`${{state}}"+markup+"`; }())");return DEBUG&&console.log({cooked:cooked}),cooked}catch(error){throw say("error!","Template error",{markup:markup,state:state,error:error}),error}}async function _FUNC(e,...t){const n=Array.from(e);return await _c$(n,...t)}function createElement(e,t){return toDOM(`<${e} ${t}></${e}>`).firstElementChild}function toDOM(e){return Template.innerHTML=e,Template.content}async function becomesTrue(e=(()=>!0)){return new Promise((async t=>{for(;await sleep(47),!e(););t(!0)}))}async function cacheHasKey(e){try{const t=`cache:${e}`;let n,r=Waiters.get(t);if(!r){const n=[];r={WaitKey:t,list:n,event:becomesTrue((()=>CACHE.has(e))).then((()=>n.reverse().forEach((e=>e()))))},Waiters.set(t,r),DEBUG&&console.log("Setup waiter list",r)}const s=new Promise((e=>n=e));return r.list.push(n),s}catch(e){}}async function sleep(e){return new Promise((t=>setTimeout(t,e)))}function isIterable(e){return null!==e&&e[Symbol.iterator]instanceof Function}function isUnset(e){return null==e}function say(e,...t){(DEBUG||"error"===e||e.endsWith("!"))&&MOBILE&&!LIGHTHOUSE&&alert(`${e}: ${t.join("\n")}`),(DEBUG||"error"===e||e.endsWith("!"))&&console[e.replace("!","")](...t)}function isMobile(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((e=>navigator.userAgent.match(e)))}function trace(e=""){const t=new Error("Trace");console.log(e,"Call stack",t.stack)}function dateString(e){const t=e.getTimezoneOffset();return(e=new Date(e.getTime()-60*t*1e3)).toISOString().split("T")[0]}function clone(e){return JSON.parse(JSON.stringify(e))}install()}()}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=function(e,t){for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,n){return __webpack_require__.f[n](e,t),t}),[]))},__webpack_require__.u=function(e){return e+".bang.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},inProgress={},dataWebpackPrefix="bang.html:",__webpack_require__.l=function(e,t,n,r){if(inProgress[e])inProgress[e].push(t);else{var s,a;if(void 0!==n)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var c=o[i];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==dataWebpackPrefix+n){s=c;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,__webpack_require__.nc&&s.setAttribute("nonce",__webpack_require__.nc),s.setAttribute("data-webpack",dataWebpackPrefix+n),s.src=e),inProgress[e]=[t];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(u);var r=inProgress[e];if(delete inProgress[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),a&&document.head.appendChild(s)}},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e}(),function(){var e={179:0};__webpack_require__.f.j=function(t,n){var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(n,s){r=e[t]=[n,s]}));n.push(r[2]=s);var a=__webpack_require__.p+__webpack_require__.u(t),o=new Error;__webpack_require__.l(a,(function(n){if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",o.name="ChunkLoadError",o.type=s,o.request=a,r[1](o)}}),"chunk-"+t,t)}};var t=function(t,n){var r,s,a=n[0],o=n[1],i=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)__webpack_require__.o(o,r)&&(__webpack_require__.m[r]=o[r]);i&&i(__webpack_require__)}for(t&&t(n);c<a.length;c++)s=a[c],__webpack_require__.o(e,s)&&e[s]&&e[s][0](),e[a[c]]=0},n=self.webpackChunkbang_html=self.webpackChunkbang_html||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var __webpack_exports__=__webpack_require__(876)})();