!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(1);var a=r(6),s=function(){function e(t){var r=t.data,n=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this._data={},this.element=null,this.data=r}return o(e,[{key:"render",value:function(){if(!this.data.service){var t=document.createElement("div");return this.element=t,t}var r=e.services[this.data.service].html,n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("template"),a=document.createElement("div");return a.classList.add("ce-embed-preloader"),a.textContent="loading...",n.appendChild(a),i.contentEditable=!0,i.classList.add(this.api.styles.input),i.dataset.placeholder="Enter a caption",i.innerHTML=this.data.caption||"",o.innerHTML=r,o.content.firstChild.setAttribute("src",this.data.embed),o.content.firstChild.classList.add(this.api.styles.block),this.embedIsReady(n).then(function(){setTimeout(function(){a.textContent=""},450),n.appendChild(o.content.firstChild),n.appendChild(i)}),this.element=n,n}},{key:"save",value:function(){var e=this.element.querySelector("."+this.api.styles.input);return this.data={caption:e.innerHTML},this.data}},{key:"onPaste",value:function(t){var r=t.detail,n=r.key,i=r.data,o=e.services[n],a=o.regex,s=o.embedUrl,u=o.width,c=o.height,l=o.id,d=void 0===l?function(e){return e.shift()}:l,f=a.exec(i).slice(1),h=s.replace(/<\%\= remote\_id \%\>/g,d(f));this.data={service:n,source:i,embed:h,width:u,height:c}}},{key:"observeNode",value:function(e){var t=this;new MutationObserver(function(e,r){t.mutationHandler(e,r)}).observe(e,{childList:!0,subtree:!0})}},{key:"mutationHandler",value:function(e,t){var r=!1;return e.forEach(function(e){r=!0}),r}},{key:"embedIsReady",value:function(e){var t=this;return new Promise(function(r,n){r(t.observeNode(e))})}},{key:"data",set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");var t=e.service,r=e.source,n=e.embed,i=e.width,o=e.height,a=e.caption,s=void 0===a?"":a;this._data={service:t||this.data.service,source:r||this.data.source,embed:n||this.data.embed,width:i||this.data.width,height:o||this.data.height,caption:s||this.data.caption||""};var u=this.element;u&&u.parentNode.replaceChild(this.render(),u)},get:function(){return this._data}}],[{key:"prepare",value:function(t){var r=t.config,o=(void 0===r?{}:r).services,s=void 0===o?{}:o,u=Object.entries(a),c=Object.entries(s).filter(function(e){var t=i(e,2),r=(t[0],t[1]);return"boolean"==typeof r&&!0===r}).map(function(e){return i(e,1)[0]}),l=Object.entries(s).filter(function(e){var t=i(e,2),r=(t[0],t[1]);return"object"===(void 0===r?"undefined":n(r))}).filter(function(t){var r=i(t,2),n=(r[0],r[1]);return e.checkServiceConfig(n)}).map(function(e){var t=i(e,2),r=t[0],n=t[1];return[r,{regex:n.regex,embedUrl:n.embedUrl,html:n.html,height:n.height,width:n.width,id:n.id}]});c.length&&(u=u.filter(function(e){var t=i(e,1)[0];return c.includes(t)})),u=u.concat(l),e.services=u.reduce(function(e,t){var r=i(t,2),n=r[0],o=r[1];return n in e?(e[n]=Object.assign({},e[n],o),e):(e[n]=o,e)},{}),e.patterns=u.reduce(function(e,t){var r=i(t,2),n=r[0],o=r[1];return e[n]=o.regex,e},{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,r=e.embedUrl,n=e.html,i=e.height,o=e.width,a=e.id,s=t&&t instanceof RegExp&&r&&"string"==typeof r&&n&&"string"==typeof n;return s=(s=(s=s&&(void 0===a||a instanceof Function))&&(void 0===i||Number.isFinite(i)))&&(void 0===o||Number.isFinite(o))}},{key:"pasteConfig",get:function(){return{patterns:e.patterns}}}]),e}();e.exports=s},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(4)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,".ce-embed-preloader {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),o=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(o).concat([i]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,u=[],c=r(5);function l(e,t){for(var r=0;r<e.length;r++){var i=e[r],o=n[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(b(i.parts[a],t))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(b(i.parts[a],t));n[i.id]={id:i.id,refs:1,parts:s}}}}function d(e,t){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function f(e,t){var r=o(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),p(t,e.attrs),f(e,t),t}function p(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function b(e,t){var r,n,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var u=s++;r=a||(a=m(t)),n=y.bind(null,r,u,!1),i=y.bind(null,r,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",p(t,e.attrs),f(e,t),t}(t),n=function(e,t,r){var n=r.css,i=r.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(n=c(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),i=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){h(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=d(e,t);return l(r,t),function(e){for(var i=[],o=0;o<r.length;o++){var a=r[o];(s=n[a.id]).refs--,i.push(s)}e&&l(d(e,t),t);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete n[s.id]}}}};var v=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function y(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,r){"use strict";var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.exports={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:function(e){var t=n(e,2),r=t[0],i=t[1];if(!i&&r)return r;var o={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return i=i.slice(1).split("&").map(function(e){var t=e.split("="),i=n(t,2),a=i[0],s=i[1];if(r||"v"!==a){if(o[a])return o[a]+"="+s}else r=s}).filter(function(e){return!!e}),r+"?"+i.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}}}}])});