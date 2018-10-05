!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1);var i=wp,a=i.data,u=i.apiRequest,c=i.element;if(wp.editPost&&void 0!==wp.editPost.PluginSidebarMoreMenuItem){var l=wp.i18n,f=l.__,s=l.setLocaleData,p=wp.editPost.PluginSidebarMoreMenuItem;(0,wp.plugins.registerPlugin)("wp-safe-edit",{render:function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s(wpSafeEditGutenbergData.locale,"wp-safe-edit"),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"forkPost",value:async function(e){e.preventDefault();var t={path:"wp-safe-edit/v1/fork/"+document.getElementById("post_ID").value,data:{nonce:wpSafeEditGutenbergData.forknonce},nonce:wpSafeEditGutenbergData.forknonce,type:"GET",dataType:"json"},r=await u(t);r.data&&r.data.shouldRedirect&&(document.location=r.data.redirectUrl)}},{key:"mergeFork",value:async function(e){var t={path:"wp-safe-edit/v1/merge/"+document.getElementById("post_ID").value,data:{nonce:wpSafeEditGutenbergData.forknonce},nonce:wpSafeEditGutenbergData.forknonce,type:"GET",dataType:"json"},r=await u(t);r.data&&r.data.shouldRedirect&&(document.location=r.data.redirectUrl)}},{key:"componentDidMount",value:function(){var e=this,t=a.subscribe,r=a.select("core/editor").getEditedPostAttribute("status");if("wpse-draft"===r||"wpse-pending"===r)var n=t(function(t){"publish"===a.select("core/editor").getEditedPostAttribute("status")&&(n(),setTimeout(function(){e.mergeFork()},300))});else wpSafeEditGutenbergData.message?a.dispatch("core/editor").createSuccessNotice(c.createElement("p",{},wpSafeEditGutenbergData.message),{id:"wp-safe-edit-notice"}):a.dispatch("core/editor").removeNotice("wp-safe-edit-notice");if(a.dispatch("core/editor").removeNotice("wp-safe-edit-status"),"wpse-draft"===a.select("core/editor").getEditedPostAttribute("status")){var o=f("A draft has been created and you can edit it below. Publish your changes to make them live.","wp-safe-edit");a.dispatch("core/editor").createSuccessNotice(c.createElement("p",{},o),{id:"wp-safe-edit-status",isDismissible:!1})}}},{key:"render",value:function(){var e=a.select("core/editor").getEditedPostAttribute("status");return a.select("core/editor").isCurrentPostPublished()&&"wpse-draft"!==e?React.createElement(p,null,React.createElement("span",{type:"button",className:"components-button components-icon-button components-menu-item__button",id:"gutenberg-wpse-fork-post-button",value:f("Save as Draft","wp-safe-edit"),onClick:this.forkPost},f("Save as Draft","wp-safe-edit"))):null}}]),t}(),icon:null})}},function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112;o&&Symbol.for("react.placeholder");var y="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,i,a,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,u],l=0;(e=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||v}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||v}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var _=w.prototype=new g;_.constructor=w,n(_,h.prototype),_.isPureReactComponent=!0;var S={current:null,currentDispatcher:null},P=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n=void 0,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:i,type:e,key:a,ref:u,props:o,_owner:S.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g,x=[];function C(e,t,r,n){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function $(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return n(o,t,""===r?"."+R(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+R(u=t[l],l);c+=e(u,f,n,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=y&&t[y]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,f=r+R(u,l++),n,o);else"object"===u&&b("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,function(e){return e}):null!=e&&(O(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(E,"$&/")+"/"),$(e,M,t=C(t,i,n,o)),D(t)}var I={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,A,t=C(null,null,t,r)),D(t)},count:function(e){return $(e,function(){return null},null)},toArray:function(e){var t=[];return T(e,t,null,function(e){return e}),t},only:function(e){return O(e)||b("143"),e}},createRef:function(){return{current:null}},Component:h,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:f,_context:e},e.Consumer=e,e.unstable_read=function(e,t){var r=S.currentDispatcher;return null===r&&b("277"),r.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:d,render:e}},Fragment:u,StrictMode:c,unstable_AsyncMode:p,unstable_Profiler:l,createElement:k,cloneElement:function(e,t,r){(null===e||void 0===e)&&b("267",e);var o=void 0,a=n({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=S.current),void 0!==t.key&&(u=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)P.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:i,type:e.type,key:u,ref:c,props:a,_owner:l}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:O,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:S,assign:n}},N={default:I},G=N&&I||N;e.exports=G.default||G},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))o.call(r,l)&&(u[l]=r[l]);if(n){a=n(r);for(var f=0;f<a.length;f++)i.call(r,a[f])&&(u[a[f]]=r[a[f]])}}return u}}]);