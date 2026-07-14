"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(o){throw (e=0, o)}};};var i=f(function(y,t){
var s=require('@stdlib/utils-get-prototype-of/dist'),n=require('@stdlib/utils-type-of/dist'),u=require('@stdlib/assert-is-error/dist');function c(r){if(typeof r!="object"||r===null)return!1;if(r instanceof URIError)return!0;if(u(r))for(;r;){if(n(r)==="urierror")return!0;r=s(r)}return!1}t.exports=c
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
