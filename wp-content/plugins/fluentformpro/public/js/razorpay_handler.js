!function(r){var e={};function n(o){if(e[o])return e[o].exports;var t=e[o]={i:o,l:!1,exports:{}};return r[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=r,n.c=e,n.d=function(r,e,o){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)n.d(o,t,function(e){return r[e]}.bind(null,t));return o},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="/",n(n.s=453)}({453:function(r,e,n){r.exports=n(454)},454:function(r,e){function n(r,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}var o,t=function(){function r(e,n){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var o=n.settings.id;this.$form=e,this.formInstance=n,this.formId=o}var e,o,t;return e=r,(o=[{key:"init",value:function(){var r=this;this.$form.on("fluentform_next_action_razorpay",(function(e,n){var o=n.response;r.$form.parent().find(".ff_razorpay_text").remove(),jQuery("<div/>",{id:"form_success",class:"ff-message-success ff_razorpay_text"}).html(o.data.message).insertAfter(r.$form),"initRazorPayModal"===o.data.actionName?r.initRazorPayModal(o.data):alert("No method found")}))}},{key:"initRazorPayModal",value:function(r){var e=this,n=r.modal_data;n.handler=function(n){e.formInstance.hideFormSubmissionProgress(e.$form);var o={action:"fluentform_razorpay_confirm_payment",transaction_hash:r.transaction_hash,form_id:e.formId,razorpay_order_id:n.razorpay_order_id,razorpay_payment_id:n.razorpay_payment_id,razorpay_signature:n.razorpay_signature};e.$form.parent().find(".ff_razorpay_text").remove(),jQuery("<div/>",{id:e.formId+"_success",class:"ff-message-success ff_msg_temp ff_razorpay_text"}).html(r.confirming_text).insertAfter(e.$form),e.formInstance.showFormSubmissionProgress(e.$form),e.formInstance.sendData(e.$form,o)},n.modal={escape:!1,ondismiss:function(){e.$form.parent().find(".ff_razorpay_text").remove(),e.formInstance.hideFormSubmissionProgress(e.$form)}};var o=new Razorpay(n);o.on("payment.failed",(function(r){console.log(r),e.formInstance.hideFormSubmissionProgress(e.$form)})),this.formInstance.showFormSubmissionProgress(this.$form),o.open()}}])&&n(e.prototype,o),t&&n(e,t),r}();(o=jQuery).each(o("form.fluentform_has_payment"),(function(){var r=o(this);r.on("fluentform_init_single",(function(e,n){new t(r,n).init()}))}))}});