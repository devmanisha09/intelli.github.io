!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=455)}({455:function(e,t,r){e.exports=r(456)},456:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a,f=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=r.settings.id;this.$form=t,this.formInstance=r,this.formId=n}var t,a,f;return t=e,(a=[{key:"init",value:function(){var e=this;this.$form.on("fluentform_next_action_paystack",(function(t,r){var n=r.response;e.$form.parent().find(".ff_paystack_text").remove(),jQuery("<div/>",{id:"form_success",class:"ff-message-success ff_paystck_text"}).html(n.data.message).insertAfter(e.$form),"initPaystackModal"===n.data.actionName?e.initPaystackModal(n.data):alert("No method found")}))}},{key:"initPaystackModal",value:function(e){var t=this,o=e.modal_data;o.callback=function(o){t.formInstance.hideFormSubmissionProgress(t.$form);var a=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({action:"fluentform_paystack_confirm_payment",form_id:t.formId},o);t.$form.parent().find(".ff_paystck_text").remove(),jQuery("<div/>",{id:t.formId+"_success",class:"ff-message-success ff_msg_temp ff_razorpay_text"}).html(e.confirming_text).insertAfter(t.$form),t.formInstance.showFormSubmissionProgress(t.$form),t.formInstance.sendData(t.$form,a)},o.onClose=function(e){t.$form.parent().find(".ff_paystck_text").remove()},PaystackPop.setup(o).openIframe()}}])&&o(t.prototype,a),f&&o(t,f),e}();(a=jQuery).each(a("form.fluentform_has_payment"),(function(){var e=a(this);e.on("fluentform_init_single",(function(t,r){new f(e,r).init()}))}))}});