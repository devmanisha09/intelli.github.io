!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=461)}({145:function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"}));return[e].concat(o).concat([i]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<n.length;i++){var s=n[i];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},146:function(n,t,e){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),f=function(n,t){return t?t.querySelector(n):document.querySelector(n)},a=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=f.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,u=0,p=[],l=e(158);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],t))}else{var f=[];for(s=0;s<r.parts.length;s++)f.push(v(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:f}}}}function _(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],s=t.base?o[0]+t.base:o[0],f={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(f):e.push(r[s]={id:s,parts:[f]})}return e}function b(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),p.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,e);e.insertBefore(t,i)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=p.indexOf(n);t>=0&&p.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return y(t,n.attrs),b(n,t),t}function y(n,t){Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])}))}function v(n,t){var e,r,i,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var s=u++;e=c||(c=m(t)),r=w.bind(null,e,s,!1),i=w.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",y(t,n.attrs),b(n,t),t}(t),r=O.bind(null,e,t),i=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),r=j.bind(null,e),i=function(){h(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=_(n,t);return d(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var s=e[i];(f=o[s.id]).refs--,r.push(f)}n&&d(_(n,t),t);for(i=0;i<r.length;i++){var f;if(0===(f=r[i]).refs){for(var a=0;a<f.parts.length;a++)f.parts[a]();delete o[f.id]}}}};var g,x=(g=[],function(n,t){return g[n]=t,g.filter(Boolean).join("\n")});function w(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(o,s[t]):n.appendChild(o)}}function j(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function O(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=l(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),f=n.href;n.href=URL.createObjectURL(s),f&&URL.revokeObjectURL(f)}},158:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(n,t){return t})).replace(/^'(.*)'$/,(function(n,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},461:function(n,t,e){n.exports=e(462)},462:function(n,t,e){"use strict";e.r(t);var r;e(463);jQuery(document).ready(((r=jQuery)(".ff_show_payments").on("click",(function(n){n.preventDefault(),r(".ff_sub_cancel_confirmation").hide();var t=r(this),e=t.data("subscription_id"),i=t.closest(".ff_subscription").find(".ff_subscription_payments");if(t.attr("data-got_payments"))return t.attr("data-got_payments",""),void i.removeClass("ff_has_payments").html("");i.html("Fetching Payments..."),function(n,t,e){t.addClass("ff_payments_fetching").prop("disabled",!0),jQuery.get(window.ff_transactions_vars.ajax_url,{subscription_id:n,action:"fluentform_user_payment_endpoints",route:"get_subscription_transactions",_nonce:window.ff_transactions_vars.nonce}).then((function(n){e(n.data.html,"success")})).catch((function(n){n.responseJSON?n.responseJSON.data?e(n.responseJSON.data.message):e("Could not fetch the payments. Please try again"):e(n.responseText)})).always((function(){t.removeClass("ff_payments_fetching").prop("disabled",!1)}))}(e,t,(function(n,e){e?t.attr("data-got_payments","yes"):t.attr("data-got_payments",""),i.addClass("ff_has_payments").html(n)}))})),r(".ff_cancel_subscription").on("click",(function(n){n.preventDefault(),r(".ff_subscription_payments").html("").removeClass("ff_has_payments");var t=r(this),e=t.data("subscription_id"),i=t.closest(".ff_subscription").find(".ff_sub_cancel_confirmation");i.find(".ff_confirm_subscription_cancel").attr("data-subscription_id",e),i.show()})),r(".ff_confirm_subscription_cancel").on("click",(function(){var n=r(this),t=n.data("subscription_id");n.prop("disabled",!0);var e=n.closest(".ff_sub_cancel_confirmation").find(".ff_sub_message_notices");e.html("Sending Request Please wait..."),jQuery.post(window.ff_transactions_vars.ajax_url,{subscription_id:t,action:"fluentform_user_payment_endpoints",route:"cancel_transaction",_nonce:window.ff_transactions_vars.nonce}).then((function(n){e.html(n.message),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(n){var t="Request failed. Please try again";n.responseJSON?n.responseJSON.data&&(t=n.responseJSON.data.message):t=n.responseText,e.html(t)})).always((function(){n.prop("disabled",!1)}))})),void r(".ff_cancel_close").on("click",(function(){r(".ff_sub_cancel_confirmation").hide()}))))},463:function(n,t,e){var r=e(464);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(146)(r,i);r.locals&&(n.exports=r.locals)},464:function(n,t,e){(n.exports=e(145)(!1)).push([n.i,".ff_subscriptions .ff_subscription {\n  background-color: white;\n  border: 2px solid #e3e8ee;\n  padding: 15px 20px;\n  color: #3a4f66;\n}\n\n.ff_subscriptions .ff_subscription button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: 0;\n  margin: 0;\n  transition: .1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 6px 15px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .ff_subscriptions .ff_subscription .ff_subscription_header {\n    flex-direction: column;\n  }\n  .ff_subscriptions .ff_subscription .ff_subscription_header > div {\n    display: flex;\n    flex-direction: column;\n    flex-basis: 100%;\n    flex: 1;\n  }\n  .ff_subscriptions .ff_subscription .ff_subscription_header > div.ff_plan_info {\n    text-align: left;\n  }\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_form_name {\n  font-size: 110%;\n  font-weight: 500;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header > div {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 1;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_plan_info {\n  text-align: right;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .pay_amount {\n  font-size: 20px;\n  line-height: 28px;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_sub_name {\n  color: #393c40;\n  padding-bottom: 10px;\n  display: block;\n  overflow: hidden;\n  position: relative;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_pay_status_badge {\n  background-color: #d6ecff;\n  border-radius: 20px;\n  padding: 2px 8px;\n  color: #3d4eac;\n  font-weight: 500;\n  font-size: 90%;\n  text-transform: capitalize;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_pay_status_badge.ff_pay_status_cancelled {\n  background: #ff623e;\n  color: white;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_pay_status_badge.ff_pay_status_active {\n  background: #67C23A;\n  color: white;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_billing_text, .ff_subscriptions .ff_subscription .ff_subscription_header .ff_billing_dates {\n  margin: 0;\n  padding: 0 0 10px;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_header .ff_billing_text {\n  margin-top: 5px;\n}\n\n.ff_subscriptions .ff_subscription .ff_subscription_payments.ff_has_payments {\n  margin: 0 -20px -15px;\n  padding: 20px;\n  background: #fafdff;\n  border-top: 1px solid #e3e8ed;\n}\n\n.ff_subscriptions .ff_subscription span.ff_sub_id {\n  font-style: italic;\n  font-size: 80%;\n  opacity: 0.5;\n}\n\n.ff_subscriptions .ff_sub_cancel_confirmation {\n  margin: 10px -20px -20px;\n  padding: 20px;\n  text-align: center;\n  background: #fff7f5;\n  overflow: hidden;\n  position: relative;\n}\n\n.ff_subscriptions .ff_sub_cancel_confirmation button.ff_confirm_subscription_cancel {\n  background: #cf3917;\n  color: white;\n}\n",""])}});