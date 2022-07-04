// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=s()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[_],u=_,r=null!=(o=t)&&d.call(o,u);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)};var w=j,g=Boolean.prototype.toString;var m=s();function O(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function h(t){return y(t)||O(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",O);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof P?P:null;var T=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),x=T.document&&T.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,F=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",F),C=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};var G=C;function L(t){return null!==t&&"object"==typeof t}var I=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!G(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(L);function M(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(L,"isObjectLikeArray",I);var R="function"==typeof t||"object"==typeof V||"function"==typeof x?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};var U,N,X=Object.getPrototypeOf;N=Object.getPrototypeOf,U="function"===R(N)?X:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var q=U;function z(t){return null==t?null:(t=Object(t),q(t))}function D(t){if("object"!=typeof t||null===t)return!1;if(t instanceof URIError)return!0;if(function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===w(t))return!0;t=z(t)}return!1}(t))for(;t;){if("urierror"===R(t))return!0;t=z(t)}return!1}export{D as default};
//# sourceMappingURL=mod.js.map
