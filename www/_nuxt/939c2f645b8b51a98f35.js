(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{245:function(t,e,n){"use strict";var r=n(0),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var f={__proto__:[]}instanceof Array;function d(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function v(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(l.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=r.value,e}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}(this,t)}});var d=t.__decorators__;d&&(d.forEach((function(t){return t(e)})),delete t.__decorators__);var v,h,O=Object.getPrototypeOf(t.prototype),_=O instanceof r.a?O.constructor:r.a,m=_.extend(e);return function(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!y[r]){var o=Object.getOwnPropertyDescriptor(t,r);if(!o||o.configurable){var c,d,l=Object.getOwnPropertyDescriptor(e,r);if(!f){if("cid"===r)return;var v=Object.getOwnPropertyDescriptor(n,r);if(c=l.value,d=typeof c,null!=c&&("object"===d||"function"===d)&&v&&v.value===l.value)return}0,Object.defineProperty(t,r,l)}}}))}(m,t,_),o&&(c(v=m,h=t),Object.getOwnPropertyNames(h.prototype).forEach((function(t){c(v.prototype,h.prototype,t)})),Object.getOwnPropertyNames(h).forEach((function(t){c(v,h,t)}))),m}var y={prototype:!0,arguments:!0,callee:!0,caller:!0};function h(t){return"function"==typeof t?v(t):function(e){return v(e,t)}}h.registerHooks=function(t){l.push.apply(l,t)};var O=h;n.d(e,"b",(function(){return j})),n.d(e,"d",(function(){return w})),n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return r.a}));var _="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function m(t,e,n){_&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function j(t){return void 0===t&&(t={}),function(e,n){m(t,e,n),d((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}function w(path,t){void 0===t&&(t={});var e=t.deep,n=void 0!==e&&e,r=t.immediate,o=void 0!==r&&r;return d((function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[path]||Array.isArray(r[path])?void 0===r[path]&&(r[path]=[]):r[path]=[r[path]],r[path].push({handler:e,deep:n,immediate:o})}))}},256:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6b5680c4",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";var r=n(256);n.n(r).a},304:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,".indexContainer[data-v-755780c6]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.subtitle[data-v-755780c6]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px;display:block}",""])},333:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(21),c=n(16),f=n(22),d=n(23),l=n(14),v=n(245),y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"gotoPage",value:function(t){this.$router.push({path:t})}}]),e}(v.c),O=h=y([v.a],h),_=(n(303),n(49)),m=n(110),j=n.n(m),w=n(230),component=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexContainer"},[n("div",[n("h2",{staticClass:"subtitle"},[t._v("\n      Chamulation\n    ")]),t._v(" "),n("div",[n("v-btn",{staticClass:"ma-1",attrs:{color:"primary",block:"",to:"/form",nuxt:""}},[t._v("\n        Start\n      ")]),t._v(" "),n("hr",{staticClass:"mt-10 mb-5"}),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{color:"default",block:"",to:"/result",nuxt:""}},[t._v("\n        とりあえずchart\n      ")]),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{color:"default",block:"",to:"/spdragtest",nuxt:""}},[t._v("\n        SPドラッグ問題確認\n      ")]),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{color:"default",block:"",to:"/spdragtestt",nuxt:""}},[t._v("\n        SPドラッグ問題確認2\n      ")])],1)])])}),[],!1,null,"755780c6",null);e.default=component.exports;j()(component,{VBtn:w.a})}}]);