"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=o(function(q,t){
var f=require('@stdlib/utils-get-prototype-of/dist'),s=require('@stdlib/utils-type-of/dist'),n=require('@stdlib/assert-is-error/dist');function u(r){if(typeof r!="object"||r===null)return!1;if(r instanceof URIError)return!0;if(n(r))for(;r;){if(s(r)==="urierror")return!0;r=f(r)}return!1}t.exports=u
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
