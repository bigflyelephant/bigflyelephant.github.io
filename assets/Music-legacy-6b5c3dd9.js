!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register(["./index-legacy-7b867fa4.js","./index-legacy-ddefafa9.js"],(function(e,r){"use strict";var n,o,i,u,c,f,a,l,s,p;return{setters:[function(t){n=t.u,o=t.j,i=t.L,u=t.r,c=t.c,f=t.d,a=t.R,l=t.a,s=t.N},function(t){p=t.r}],execute:function(){function r(){return n(),o.jsxs(o.Fragment,{children:["music overview ,",o.jsx(i,{to:"tools",children:"to tools"})]})}function y(t){return o.jsx(o.Fragment,{children:t.children})}function v(){return o.jsx(o.Fragment,{children:"music tools"})}e("default",(function(){return o.jsx(tt,{store:je,children:o.jsx(y,{children:o.jsxs(a,{children:[o.jsx(l,{element:o.jsx(v,{}),path:"tools"}),o.jsx(l,{element:o.jsx(r,{}),path:""}),o.jsx(l,{path:"*",element:o.jsx(s,{to:""})})]})})})}));var d={exports:{}},b={},h=u;var g="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},m=h.useState,O=h.useEffect,w=h.useLayoutEffect,P=h.useDebugValue;function j(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!g(t,r)}catch(ct){return!0}}var S="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),n=m({inst:{value:r,getSnapshot:e}}),o=n[0].inst,i=n[1];return w((function(){o.value=r,o.getSnapshot=e,j(o)&&i({inst:o})}),[t,r,e]),O((function(){return j(o)&&i({inst:o}),t((function(){j(o)&&i({inst:o})}))}),[t]),P(r),r};b.useSyncExternalStore=void 0!==h.useSyncExternalStore?h.useSyncExternalStore:S,d.exports=b;var E=d.exports,x=u,A=E;"function"==typeof Object.is&&Object.is,A.useSyncExternalStore,x.useRef,x.useEffect,x.useMemo,x.useDebugValue;var _=function(t){t()},N=function(){return _},D=c.createContext(null),C=p,$={};$[C.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$[C.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var k,I={},M=Symbol.for("react.element"),R=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),U=Symbol.for("react.context"),K=Symbol.for("react.server_context"),W=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen");
/**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */function G(e){if("object"===t(e)&&null!==e){var r=e.$$typeof;switch(r){case M:switch(e=e.type){case T:case L:case F:case V:case X:return e;default:switch(e=e&&e.$$typeof){case K:case U:case W:case J:case B:case z:return e;default:return r}}case R:return r}}}k=Symbol.for("react.module.reference"),I.ContextConsumer=U,I.ContextProvider=z,I.Element=M,I.ForwardRef=W,I.Fragment=T,I.Lazy=J,I.Memo=B,I.Portal=R,I.Profiler=L,I.StrictMode=F,I.Suspense=V,I.SuspenseList=X,I.isAsyncMode=function(){return!1},I.isConcurrentMode=function(){return!1},I.isContextConsumer=function(t){return G(t)===U},I.isContextProvider=function(t){return G(t)===z},I.isElement=function(e){return"object"===t(e)&&null!==e&&e.$$typeof===M},I.isForwardRef=function(t){return G(t)===W},I.isFragment=function(t){return G(t)===T},I.isLazy=function(t){return G(t)===J},I.isMemo=function(t){return G(t)===B},I.isPortal=function(t){return G(t)===R},I.isProfiler=function(t){return G(t)===L},I.isStrictMode=function(t){return G(t)===F},I.isSuspense=function(t){return G(t)===V},I.isSuspenseList=function(t){return G(t)===X},I.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===T||e===L||e===F||e===V||e===X||e===q||"object"===t(e)&&null!==e&&(e.$$typeof===J||e.$$typeof===B||e.$$typeof===z||e.$$typeof===U||e.$$typeof===W||e.$$typeof===k||void 0!==e.getModuleId)},I.typeOf=G;var H={notify:function(){},get:function(){return[]}};function Q(t,e){var r,n=H;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=e?e.addNestedSub(o):t.subscribe(o),n=function(){var t=N(),e=null,r=null;return{clear:function(){e=null,r=null},notify:function(){t((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],r=e;r;)t.push(r),r=r.next;return t},subscribe:function(t){var n=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}var u={addNestedSub:function(t){return i(),n.subscribe(t)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=H)},getListeners:function(){return n}};return u}var Y,Z=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?u.useLayoutEffect:u.useEffect;function tt(t){var e=t.store,r=t.context,n=t.children,o=t.serverState,i=u.useMemo((function(){var t=Q(e);return{store:e,subscription:t,getServerState:o?function(){return o}:void 0}}),[e,o]),f=u.useMemo((function(){return e.getState()}),[e]);Z((function(){var t=i.subscription;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),f!==e.getState()&&t.notifyNestedSubs(),function(){t.tryUnsubscribe(),t.onStateChange=void 0}}),[i,f]);var a=r||D;return c.createElement(a.Provider,{value:i},n)}function et(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function rt(t){return!!t&&!!t[Kt]}function nt(e){return!!e&&(function(e){if(!e||"object"!=t(e))return!1;var r=Object.getPrototypeOf(e);if(null===r)return!0;var n=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Wt}(e)||Array.isArray(e)||!!e[Ut]||!!e.constructor[Ut]||at(e)||lt(e))}function ot(e,r,n){void 0===n&&(n=!1),0===it(e)?(n?Object.keys:Vt)(e).forEach((function(o){n&&"symbol"==t(o)||r(o,e[o],e)})):e.forEach((function(t,n){return r(n,t,e)}))}function it(t){var e=t[Kt];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:at(t)?2:lt(t)?3:0}function ut(t,e){return 2===it(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ct(t,e,r){var n=it(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function ft(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function at(t){return Tt&&t instanceof Map}function lt(t){return Ft&&t instanceof Set}function st(t){return t.o||t.t}function pt(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Xt(t);delete e[Kt];for(var r=Vt(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function yt(t,e){return void 0===e&&(e=!1),dt(t)||rt(t)||!nt(t)||(it(t)>1&&(t.set=t.add=t.clear=t.delete=vt),Object.freeze(t),e&&ot(t,(function(t,e){return yt(e,!0)}),!0)),t}function vt(){et(2)}function dt(e){return null==e||"object"!=t(e)||Object.isFrozen(e)}function bt(t){var e=Bt[t];return e||et(18,t),e}function ht(){return Mt}function gt(t,e){e&&(bt("Patches"),t.u=[],t.s=[],t.v=e)}function mt(t){Ot(t),t.p.forEach(Pt),t.p=null}function Ot(t){t===Mt&&(Mt=t.l)}function wt(t){return Mt={p:[],l:Mt,h:t,m:!0,_:0}}function Pt(t){var e=t[Kt];0===e.i||1===e.i?e.j():e.O=!0}function jt(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.g||bt("ES5").S(e,t,n),n?(r[Kt].P&&(mt(e),et(4)),nt(t)&&(t=St(e,t),e.l||xt(e,t)),e.u&&bt("Patches").M(r[Kt].t,t,e.u,e.s)):t=St(e,r,[]),mt(e),e.u&&e.v(e.u,e.s),t!==zt?t:void 0}function St(t,e,r){if(dt(e))return e;var n=e[Kt];if(!n)return ot(e,(function(o,i){return Et(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return xt(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=pt(n.k):n.o;ot(3===n.i?new Set(o):o,(function(e,i){return Et(t,n,o,e,i,r)})),xt(t,o,!1),r&&t.u&&bt("Patches").R(n,r,t.u,t.s)}return n.o}function Et(t,e,r,n,o,i){if(rt(o)){var u=St(t,o,i&&e&&3!==e.i&&!ut(e.D,n)?i.concat(n):void 0);if(ct(r,n,u),!rt(u))return;t.m=!1}if(nt(o)&&!dt(o)){if(!t.h.F&&t._<1)return;St(t,o),e&&e.A.l||xt(t,o)}}function xt(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&yt(e,r)}function At(t,e){var r=t[Kt];return(r?st(r):t)[e]}function _t(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function Nt(t){t.P||(t.P=!0,t.l&&Nt(t.l))}function Dt(t){t.o||(t.o=pt(t.t))}function Ct(t,e,r){var n=at(e)?bt("MapSet").N(e,r):lt(e)?bt("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:ht(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Jt;r&&(o=[n],i=qt);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):bt("ES5").J(e,r);return(r?r.A:ht()).p.push(n),n}function $t(t){return rt(t)||et(22,t),function t(e){if(!nt(e))return e;var r,n=e[Kt],o=it(e);if(n){if(!n.P&&(n.i<4||!bt("ES5").K(n)))return n.t;n.I=!0,r=kt(e,o),n.I=!1}else r=kt(e,o);return ot(r,(function(e,o){n&&function(t,e){return 2===it(t)?t.get(e):t[e]}(n.t,e)===o||ct(r,e,t(o))})),3===o?new Set(r):r}(t)}function kt(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return pt(t)}Y=f.unstable_batchedUpdates,_=Y;var It,Mt,Rt="undefined"!=typeof Symbol&&"symbol"==t(Symbol("x")),Tt="undefined"!=typeof Map,Ft="undefined"!=typeof Set,Lt="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,zt=Rt?Symbol.for("immer-nothing"):((It={})["immer-nothing"]=!0,It),Ut=Rt?Symbol.for("immer-draftable"):"__$immer_draftable",Kt=Rt?Symbol.for("immer-state"):"__$immer_state",Wt=""+Object.prototype.constructor,Vt="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Xt=Object.getOwnPropertyDescriptors||function(t){var e={};return Vt(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},Bt={},Jt={get:function(t,e){if(e===Kt)return t;var r=st(t);if(!ut(r,e))return function(t,e,r){var n,o=_t(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!nt(n)?n:n===At(t.t,e)?(Dt(t),t.o[e]=Ct(t.A.h,n,t)):n},has:function(t,e){return e in st(t)},ownKeys:function(t){return Reflect.ownKeys(st(t))},set:function(t,e,r){var n=_t(st(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=At(st(t),e),i=null==o?void 0:o[Kt];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(ft(r,o)&&(void 0!==r||ut(t.t,e)))return!0;Dt(t),Nt(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==At(t.t,e)||e in t.t?(t.D[e]=!1,Dt(t),Nt(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=st(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){et(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){et(12)}},qt={};ot(Jt,(function(t,e){qt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),qt.deleteProperty=function(t,e){return qt.set.call(this,t,e,void 0)},qt.set=function(t,e,r){return Jt.set.call(this,t[0],e,r,t[0])};var Gt=function(){function e(e){var r=this;this.g=Lt,this.F=!0,this.produce=function(e,n,o){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var u=r;return function(t){var e=this;void 0===t&&(t=i);for(var r=arguments.length,o=Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return u.produce(t,(function(t){var r;return(r=n).call.apply(r,[e,t].concat(o))}))}}var c;if("function"!=typeof n&&et(6),void 0!==o&&"function"!=typeof o&&et(7),nt(e)){var f=wt(r),a=Ct(r,e,void 0),l=!0;try{c=n(a),l=!1}finally{l?mt(f):Ot(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return gt(f,o),jt(t,f)}),(function(t){throw mt(f),t})):(gt(f,o),jt(c,f))}if(!e||"object"!=t(e)){if(void 0===(c=n(e))&&(c=e),c===zt&&(c=void 0),r.F&&yt(c,!0),o){var s=[],p=[];bt("Patches").M(e,c,s,p),o(s,p)}return c}et(21,e)},this.produceWithPatches=function(t,e){if("function"==typeof t)return function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return r.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(o))}))};var n,o,i=r.produce(t,e,(function(t,e){n=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var r=e.prototype;return r.createDraft=function(t){nt(t)||et(8),rt(t)&&(t=$t(t));var e=wt(this),r=Ct(this,t,void 0);return r[Kt].C=!0,Ot(e),r},r.finishDraft=function(t,e){var r=(t&&t[Kt]).A;return gt(r,e),jt(void 0,r)},r.setAutoFreeze=function(t){this.F=t},r.setUseProxies=function(t){t&&!Lt&&et(20),this.g=t},r.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var o=bt("Patches").$;return rt(t)?o(t,e):this.produce(t,(function(t){return o(t,e)}))},e}(),Ht=new Gt;function Qt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Zt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Yt(Object(r),!0).forEach((function(e){Qt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Yt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function te(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}Ht.produce,Ht.produceWithPatches.bind(Ht),Ht.setAutoFreeze.bind(Ht),Ht.setUseProxies.bind(Ht),Ht.applyPatches.bind(Ht),Ht.createDraft.bind(Ht),Ht.finishDraft.bind(Ht);var ee="function"==typeof Symbol&&Symbol.observable||"@@observable",re=function(){return Math.random().toString(36).substring(7).split("").join(".")},ne={INIT:"@@redux/INIT"+re(),REPLACE:"@@redux/REPLACE"+re(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+re()}};function oe(e,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(te(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(te(1));return n(oe)(e,r)}if("function"!=typeof e)throw new Error(te(2));var i=e,u=r,c=[],f=c,a=!1;function l(){f===c&&(f=c.slice())}function s(){if(a)throw new Error(te(3));return u}function p(t){if("function"!=typeof t)throw new Error(te(4));if(a)throw new Error(te(5));var e=!0;return l(),f.push(t),function(){if(e){if(a)throw new Error(te(6));e=!1,l();var r=f.indexOf(t);f.splice(r,1),c=null}}}function y(e){if(!function(e){if("object"!==t(e)||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}(e))throw new Error(te(7));if(void 0===e.type)throw new Error(te(8));if(a)throw new Error(te(9));try{a=!0,u=i(u,e)}finally{a=!1}for(var r=c=f,n=0;n<r.length;n++){(0,r[n])()}return e}return y({type:ne.INIT}),(o={dispatch:y,subscribe:p,getState:s,replaceReducer:function(t){if("function"!=typeof t)throw new Error(te(10));i=t,y({type:ne.REPLACE})}})[ee]=function(){var e,r=p;return(e={subscribe:function(e){if("object"!==t(e)||null===e)throw new Error(te(11));function n(){e.next&&e.next(s())}return n(),{unsubscribe:r(n)}}})[ee]=function(){return this},e},o}function ie(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,u=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:ne.INIT}))throw new Error(te(12));if(void 0===r(void 0,{type:ne.PROBE_UNKNOWN_ACTION()}))throw new Error(te(13))}))}(r)}catch(F){i=F}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var f=u[c],a=r[f],l=t[f],s=a(l,e);if(void 0===s)throw e&&e.type,new Error(te(14));o[f]=s,n=n||s!==l}return(n=n||u.length!==Object.keys(t).length)?o:t}}function ue(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function ce(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(te(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=ue.apply(void 0,i)(r.dispatch),Zt(Zt({},r),{},{dispatch:n})}}}function fe(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var ae=fe();ae.withExtraArgument=fe;var le,se=ae,pe=globalThis&&globalThis.__extends||(le=function(t,e){return le=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},le(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}le(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});globalThis&&globalThis.__generator;var ye=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},ve=Object.defineProperty,de=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,ge=function(t,e,r){return e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},me="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===t(arguments[0])?ue:ue.apply(null,arguments)};var Oe=function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return pe(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,ye([void 0],t[0].concat(this)))):new(e.bind.apply(e,ye([void 0],t.concat(this))))},e}(Array);function we(){return function(t){return function(t){void 0===t&&(t={});var e=t.thunk,r=void 0===e||e;t.immutableCheck,t.serializableCheck;var n=new Oe;r&&(!function(t){return"boolean"==typeof t}(r)?n.push(se.withExtraArgument(r.extraArgument)):n.push(se));return n}(t)}}!function(){function e(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[Kt];return Jt.get(e,t)},set:function(e){var r=this[Kt];Jt.set(r,t,e)}},r}function r(t){for(var e=t.length-1;e>=0;e--){var r=t[e][Kt];if(!r.P)switch(r.i){case 5:o(r)&&Nt(r);break;case 4:n(r)&&Nt(r)}}}function n(t){for(var e=t.t,r=t.k,n=Vt(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Kt){var u=e[i];if(void 0===u&&!ut(e,i))return!0;var c=r[i],f=c&&c[Kt];if(f?f.t!==u:!ft(c,u))return!0}}var a=!!e[Kt];return n.length!==Vt(e).length+(a?0:1)}function o(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);if(r&&!r.get)return!0;for(var n=0;n<e.length;n++)if(!e.hasOwnProperty(n))return!0;return!1}var i={};!function(t,e){Bt[t]||(Bt[t]=e)}("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=Xt(r);delete i[Kt];for(var u=Vt(i),c=0;c<u.length;c++){var f=u[c];i[f]=e(f,t||!!i[f].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:ht(),P:!1,I:!1,D:{},l:r,t:t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,Kt,{value:i,writable:!0}),o},S:function(e,n,i){i?rt(n)&&n[Kt].A===e&&r(e.p):(e.u&&function e(r){if(r&&"object"==t(r)){var n=r[Kt];if(n){var i=n.t,u=n.k,c=n.D,f=n.i;if(4===f)ot(u,(function(t){t!==Kt&&(void 0!==i[t]||ut(i,t)?c[t]||e(u[t]):(c[t]=!0,Nt(n)))})),ot(i,(function(t){void 0!==u[t]||ut(u,t)||(c[t]=!1,Nt(n))}));else if(5===f){if(o(n)&&(Nt(n),c.length=!0),u.length<i.length)for(var a=u.length;a<i.length;a++)c[a]=!1;else for(var l=i.length;l<u.length;l++)c[l]=!0;for(var s=Math.min(u.length,i.length),p=0;p<s;p++)u.hasOwnProperty(p)||(c[p]=!0),void 0===c[p]&&e(u[p])}}}}(e.p[0]),r(e.p))},K:function(t){return 4===t.i?n(t):o(t)}})}();var Pe=function(e){var r,n=we(),o=e||{},i=o.reducer,u=void 0===i?void 0:i,c=o.middleware,f=void 0===c?n():c,a=o.devTools,l=void 0===a||a,s=o.preloadedState,p=void 0===s?void 0:s,y=o.enhancers,v=void 0===y?void 0:y;if("function"==typeof u)r=u;else{if(!function(e){if("object"!==t(e)||null===e)return!1;var r=Object.getPrototypeOf(e);if(null===r)return!0;for(var n=r;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return r===n}(u))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');r=ie(u)}var d=f;"function"==typeof d&&(d=d(n));var b=ce.apply(void 0,d),h=ue;l&&(h=me(function(t,e){for(var r in e||(e={}))be.call(e,r)&&ge(t,r,e[r]);if(de)for(var n=0,o=de(e);n<o.length;n++)r=o[n],he.call(e,r)&&ge(t,r,e[r]);return t}({trace:!1},"object"===t(l)&&l)));var g=[b];return Array.isArray(v)?g=ye([b],v):"function"==typeof v&&(g=v(g)),oe(r,p,h.apply(void 0,g))}({reducer:{}}),je=Pe}}}))}();