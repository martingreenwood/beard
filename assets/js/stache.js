/**
 * File beard.js.
 *
 * Contains shit to make the theme do awesome stuff. (enqueue to min file genius)
 *
 */

/*===================================
=            MIN SCRIPTS            =
===================================*/

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-css_calc-css_vhunit-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.cssanimations=function(){return F("animationName")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csscalc",function(){var a="width:",b="calc(10px);",c=document.createElement("div");return c.style.cssText=a+Modernizr._prefixes.join(b+a),!!c.style.length}),Modernizr.addTest("cssvhunit",function(){var a;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(b,c){var d=parseInt(window.innerHeight/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);a=e==d}),a});

// MASON JS
!function t(e,r,o){function i(l,a){if(!r[l]){if(!e[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(n)return n(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[l]={exports:{}};e[l][0].call(u.exports,function(t){var r=e[l][1][t];return i(r?r:t)},u,u.exports,t,e,r,o)}return r[l].exports}for(var n="function"==typeof require&&require,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(t,e,r){!function(t){return t.fn.mason=function(e,r){var o,i,n,l,a,s;return l={itemSelector:"",ratio:0,sizes:[],columns:[[0,480,1],[480,780,2],[780,1080,3],[1080,1320,4],[1320,1680,5]],promoted:[],filler:{itemSelector:e.itemSelector,filler_class:"mason_filler",keepDataAndEvents:!1},randomSizes:!1,randomFillers:!1,layout:"none",gutter:0,debug:!1},o=null,n={container:t("<div id='debug'></div>"),block:"<div class='mason-debug' style='background-color: rgba(244, 67, 54, .5); float: left;'></div>"},s="<div class='mason_clear' style='clear:both; position:relative;'></div>",r&&(i={complete:r}),a={block:{height:0,width:0},matrix:[],startWidth:0},this.each(function(){var c,u,d,h,f,g,p,m,b;return p=t.extend(l,e),c=t.extend(i,r),o=t(this),m=function(){return p.debug&&console.log("SETUP"),o.children(".mason_clear").length<1&&o.append(s),a.block.height=Math.round(parseFloat(o.width()/u()/p.ratio)).toFixed(2),a.block.width=Math.round(parseFloat(o.width()/u())).toFixed(2),a.startWidth=o.width(),b(),p.debug?(console.log("############## Running In Debug Mode ##############"),d()):void 0},b=function(){var e;return 1!==u()?(o.children(""+p.itemSelector,"."+p.filler.filler_class).each(function(){var r,o,i,n,l,s,c;for(e=t(this),o=0,i=!1,n=0;o<p.promoted.length;)e.hasClass(p.promoted[o][0])&&(i=!0,n=o),o++;return i?(s=p.promoted[n],e.data("size",n),e.data("promoted",!0),r=parseFloat(a.block.height*s[2]).toFixed(0),r-=2*p.gutter,c=parseFloat(a.block.width*s[1]).toFixed(0),c-=2*p.gutter):(l=Math.floor(Math.random()*p.sizes.length),s=p.sizes[l],e.data("size",l),r=parseFloat(a.block.height*s[1]).toFixed(0),r-=2*p.gutter,c=parseFloat(a.block.width*s[0]).toFixed(0),c-=2*p.gutter),e.height(r+"px"),e.width(c+"px"),e.css({margin:p.gutter})}),f()):(e=o.children(""+p.itemSelector),e.height(a.block.height-2*p.gutter),e.width(a.block.width-2*p.gutter),e.css({margin:p.gutter}),"undefined"!=typeof c.complete?c.complete():void 0)},f=function(){var e,r,i,n,l;for(i=u(),n=o.height(),e=Math.round(n/a.block.height),a.matrix=[],l=0;e>l;){for(a.matrix[l]=[],r=0;i>r;)a.matrix[l][r]=!1,r++;l++}return o.children(""+p.itemSelector).each(function(){var e,r,o,i,n,s,c,u,d,h;for(e=t(this),s=Math.round(e.position().left/a.block.width),d=Math.round(e.position().top/a.block.height),u=parseFloat(e.data("size")),e.data("promoted")?(n=p.promoted[u][2],h=p.promoted[u][1],r=n*h):(n=p.sizes[u][1],h=p.sizes[u][0],r=n*h),l=0,c=[];r>l;){for(o=0;n>o;){for(i=0,a.matrix[d+o][s]=!0;h>i;)a.matrix[d+o][s+i]=!0,i++;o++}c.push(l++)}return c}),h()},h=function(){var e,r,i,n,l,s,u,d,h;for(s=0,n=t(""+p.filler.itemSelector).not("."+p.filler.filler_class).length,i=-1;s<a.matrix.length;){for(r=0;r<a.matrix[s].length;)a.matrix[s][r]||(l=a.block.height,u=a.block.width,d=s*l+p.gutter,h=r*u+p.gutter,l-=2*p.gutter,u-=2*p.gutter,p.randomFillers?i=Math.floor(Math.random()*n):(n>i&&i++,i===n&&(i=0)),e=t(""+p.filler.itemSelector).not("."+p.filler.filler_class).eq(i).clone(p.filler.keepDataAndEvents),e.addClass(p.filler.filler_class),e.css({position:"absolute",top:d+"px",left:h+"px",height:l+"px",width:u+"px",margin:"0px"}),e.appendTo(o)),r++;s++}return o.width()<a.startWidth?t(window,o).trigger("resize"):"undefined"!=typeof c.complete?c.complete():void 0},u=function(){var t,e,r,i;if(i=parseFloat(o.width()),t=0,e=p.columns.length-1,i>=p.columns[e[1]])t=p.columns[e[2]];else for(r=0;e>=r;)i>p.columns[r][0]&&p.columns[r][1]&&(t=p.columns[r][2]),r++;return Math.floor(t)},d=function(){var e,r,i,l,c,d,h;for(e=o.parent(),c=u(),d=o.height(),i=d/a.block.height,n.container.css({position:"absolute",top:"0",left:"0",height:o.height(),width:o.width()}),h=0;i>h;){for(l=0;c>l;)r=t(n.block),r.css({height:a.block.height-2*p.gutter,width:a.block.width-2*p.gutter,margin:p.gutter}),n.container.append(r),l++;h++}return n.container.append(s),e.prepend(n.container)},"fluid"===p.layout&&(g=null,t(window,o).on("resize",function(e){return function(e){return t("."+p.filler.filler_class).remove(),a.matrix=[],clearTimeout(g),g=null,g=setTimeout(function(){return m()},0)}}(this))),m()}),{destroy:function(){return t(window,o).off("resize")}}}}(jQuery)},{}]},{},[1]);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){(a(s,e)?c:t)(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,n){return e(n).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:n,has:a,add:t,remove:c,toggle:n};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);

/**
 * selectFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
 !function(e){"use strict";function t(e,t){if(!e)return!1;for(var s=e.target||e.srcElement||e||!1;s&&s!=t;)s=s.parentNode||!1;return!1!==s}function s(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return e}function l(e,t){this.el=e,this.options=s({},this.options),s(this.options,t),this._init()}l.prototype.options={newTab:!0,stickyPlaceholder:!0,onChange:function(e){return!1}},l.prototype._init=function(){var e=this.el.querySelector("option[selected]");this.hasDefaultPlaceholder=e&&e.disabled,this.selectedOpt=e||this.el.querySelector("option"),this._createSelectEl(),this.selOpts=[].slice.call(this.selEl.querySelectorAll("li[data-option]")),this.selOptsCount=this.selOpts.length,this.current=this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected"))||-1,this.selPlaceholder=this.selEl.querySelector("span.cs-placeholder"),this._initEvents()},l.prototype._createSelectEl=function(){var e=this,t="",s=function(e){var t="",s="",l="";return!e.selectedOpt||this.foundSelected||this.hasDefaultPlaceholder||(s+="cs-selected ",this.foundSelected=!0),e.getAttribute("data-class")&&(s+=e.getAttribute("data-class")),e.getAttribute("data-link")&&(l="data-link="+e.getAttribute("data-link")),""!==s&&(t='class="'+s+'" '),"<li "+t+l+' data-option data-value="'+e.value+'"><span>'+e.textContent+"</span></li>"};[].slice.call(this.el.children).forEach(function(e){if(!e.disabled){var l=e.tagName.toLowerCase();"option"===l?t+=s(e):"optgroup"===l&&(t+='<li class="cs-optgroup"><span>'+e.label+"</span><ul>",[].slice.call(e.children).forEach(function(e){t+=s(e)}),t+="</ul></li>")}});var l='<div class="cs-options"><ul>'+t+"</ul></div>";this.selEl=document.createElement("div"),this.selEl.className=this.el.className,this.selEl.tabIndex=this.el.tabIndex,this.selEl.innerHTML='<span class="cs-placeholder">'+this.selectedOpt.textContent+"</span>"+l,this.el.parentNode.appendChild(this.selEl),this.selEl.appendChild(this.el)},l.prototype._initEvents=function(){var e=this;this.selPlaceholder.addEventListener("click",function(){e._toggleSelect()}),this.selOpts.forEach(function(t,s){t.addEventListener("click",function(){e.current=s,e._changeOption(),e._toggleSelect()})}),document.addEventListener("click",function(s){var l=s.target;e._isOpen()&&l!==e.selEl&&!t(l,e.selEl)&&e._toggleSelect()}),this.selEl.addEventListener("keydown",function(t){switch(t.keyCode||t.which){case 38:t.preventDefault(),e._navigateOpts("prev");break;case 40:t.preventDefault(),e._navigateOpts("next");break;case 32:t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&e._changeOption(),e._toggleSelect();break;case 13:t.stopPropagation(),t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&(e._changeOption(),e._toggleSelect());break;case 27:t.preventDefault(),e._isOpen()&&e._toggleSelect();break}})},l.prototype._navigateOpts=function(e){this._isOpen()||this._toggleSelect();var t=void 0!==this.preSelCurrent&&-1!==this.preSelCurrent?this.preSelCurrent:this.current;("prev"===e&&t>0||"next"===e&&t<this.selOptsCount-1)&&(this.preSelCurrent="next"===e?t+1:t-1,this._removeFocus(),classie.add(this.selOpts[this.preSelCurrent],"cs-focus"))},l.prototype._toggleSelect=function(){this._removeFocus(),this._isOpen()?(-1!==this.current&&(this.selPlaceholder.textContent=this.selOpts[this.current].textContent),classie.remove(this.selEl,"cs-active")):(this.hasDefaultPlaceholder&&this.options.stickyPlaceholder&&(this.selPlaceholder.textContent=this.selectedOpt.textContent),classie.add(this.selEl,"cs-active"))},l.prototype._changeOption=function(){void 0!==this.preSelCurrent&&-1!==this.preSelCurrent&&(this.current=this.preSelCurrent,this.preSelCurrent=-1);var t=this.selOpts[this.current];this.selPlaceholder.textContent=t.textContent,this.el.value=t.getAttribute("data-value");var s=this.selEl.querySelector("li.cs-selected");s&&classie.remove(s,"cs-selected"),classie.add(t,"cs-selected"),t.getAttribute("data-link")&&(this.options.newTab?e.open(t.getAttribute("data-link"),"_blank"):e.location=t.getAttribute("data-link")),this.options.onChange(this.el.value)},l.prototype._isOpen=function(e){return classie.has(this.selEl,"cs-active")},l.prototype._removeFocus=function(e){var t=this.selEl.querySelector("li.cs-focus");t&&classie.remove(t,"cs-focus")},e.SelectFx=l}(window);



/*==============================
=            LOADER            =
==============================*/

(function($){

	function id(v){ return document.getElementById(v); }
	function loadbar() {
		var ovrl = id("loader"),
			prog = id("progress"),
			stat = id("progstat"),
			img = document.images,
			c = 0,
			tot = img.length;
		if(tot == 0) return doneLoading();

		function imgLoaded(){
			c += 1;
			var perc = ((100/tot*c) << 0) +"%";
			prog.style.width = perc;
			stat.innerHTML = "Loading "+ perc;
			if(c===tot) return doneLoading();
		}
		function doneLoading(){
			ovrl.style.opacity = 0;
			setTimeout(function(){ 
				ovrl.style.display = "none";
			}, 1200);
		}
		for(var i=0; i<tot; i++) {
			var tImg     = new Image();
			tImg.onload  = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src     = img[i].src;
		}
	}
	document.addEventListener('DOMContentLoaded', loadbar, false);

})(jQuery);

/*===============================
=            HEADER             =
===============================*/

(function($) {

	var $document = $(document),
	$element = $('#masthead'),
	header = $('#masthead');

	// className = 'hidden';

	$document.scroll(function() {
		$element.toggleClass('hidden', $document.scrollTop() >= 99);
	});

	$document.scroll(function() {
		$element.toggleClass('fixed', $document.scrollTop() >= $(window).height());
	});

	// var pfolioText = $(".pfolio .entry-content");
	// var pfolioTextOffset = $(".pfolio .entry-content").offset();

	// if (pfolioText.length) {
	// 	$(window).scroll(function() {	
	// 		if ( $(window).scrollTop() > pfolioTextOffset.top ){
	// 			$(pfolioText)
	// 				.stop()
	// 				.animate({"marginTop": ($(window).scrollTop() - pfolioTextOffset.top + 40) + "px"}, "slow" );
	// 		} else {
	// 			$(pfolioText)
	// 				.stop()
	// 				.animate({"marginTop": 0} );
	// 		}
	// 	})
	// }

})(jQuery);


/*================================
=            MEMBERS             =
================================*/

(function ($) {
    var parent = $(".members");
    var divs = parent.find('.staff');
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
})(jQuery);

// (function ($) {
//     $('#feature-image').mousemove(function (e) {
//         parallax(e, this, 1);
//         parallax(e, document.getElementById('baloon'), 2);
//         // parallax(e, document.getElementById('layer-three'), 3);
//     });
// })(jQuery);

// function parallax(e, target, layer) {
//     var layer_coeff = 10 / layer;
//     var x = (jQuery(window).width() - target.offsetWidth) / 2 - (e.pageX - (jQuery(window).width() / 2)) / layer_coeff;
//     var y = (jQuery(window).height() - target.offsetHeight) / 2 - (e.pageY - (jQuery(window).height() / 2)) / layer_coeff;
//     jQuery(target).offset({ top: y ,left : x });
// };

/*======================================
=            EQUAL HEIGHTS             =
======================================*/

// Select and loop the container element of the elements you want to equalise
    // $('#images .row').each(function(){  
      
    //   // Cache the highest
    //   var highestBox = 0;
      
    //   // Select and loop the elements you want to equalise
    //   $('.element', this).each(function(){
        
    //     // If this box is higher than the cached highest then store it
    //     if($(this).height() > highestBox) {
    //       highestBox = $(this).height(); 
    //     }
      
    //   });  
            
    //   // Set the height of all those children to whichever was highest 
    //   $('.element',this).height(highestBox);
                    
    // }); 


/*===================================
=            NAV SLOGAN             =
===================================*/

(function($) {

	$('.menu-toggle').on('click', function() {
		$(this).toggleClass('open');
		$("#sentence-wrapper").toggleClass('hide');
		$("#feature-image .elements").toggleClass('menuopen');
		$(".site-branding").toggleClass('open-menu');
		$("body").toggleClass('noscroll');
		// $("#sentence-wrapper .words").toggleClass('words-1');
	});

	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "flipInX",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: "|",
		// The delay between the changing of each phrase in milliseconds.
		speed: 4000,
		complete: function () {
		    // Called after the entrance animation is executed.
		}
	});	

})(jQuery);


/*============================
=            FORM             =
============================*/

// (function($) {

	// $('.member').on('click', function() {
		// $('.member.open').removeClass('open');
		// $(this).toggleClass('open');
	// });

// })(jQuery);


/*===================================
=            ORIENTATION            =
===================================*/

// jQuery(window).on("orientationchange",function($){
// 	if(window.orientation == 0) // Portrait
// 	{
// 		$('#turnme').removeClass('show');
// 		$('body').removeClass('disablescroll');
// 	}
// 	else // Landscape
// 	{
// 		$('#turnme').addClass('show');
// 		$('body').addClass('disablescroll');
// 	}
// });

/*==============================
=            SLIDER            =
==============================*/

(function($) {

	// Get page title
  	var pageTitle = $("title").text();
	var count = 0;
	var myArray = [
		"We are drinking coffee",
		"We are trying to detox",
		"We are looking forward to the weekend",
		"We are writing proposals",
		"We are playing with SASS",
		"We are Federer fan boys",
		"We are using pens and pencils",
		"We are addicted to Netflix",
		"We are heading to Burger Shop",
		"We are paying too much on parking fines",
		"We are working in Photoshop",
		"We are listening to 6Music",
		"We are off for cocktails",
		"We are designing and building",
		"We are creating wall murals",
		"We are expanding our vocabulary",
		"We are having a meeting",
		"We are wearing band t-shirts",
		"We are trying to be thrifty",
		"We are cutting and pasting",
		"We are running on fumes",
		"We are riding a Hog",
		"We are illustrating something elaborate",
		"We are over level 9000",
		"We are working on our serve",
		"We are drinking gin",
		"We are pretty, oh so pretty",
		"We are getting pixelated",
		"We are losing our eyesight",
		"We are fans of a baseball cap",
		"We are happy to chat",
		"We are shouting lager, lager, lager, lager",
		"We are standing on the shoulders of giants",
		"We are hairy and handsome",
		"We are needing a haircut",
		"We are playing with negative space",
		"We are making the logo bigger",
		"We are following our dream",
		"We are minding our p’s and q’s",
		"We are carving lino prints",
		"We are social animals",
		"We are Banksy",
		"We are too old for skinny jeans",
		"We are buffering…",
		"We are drinking more water",
		"We are direct messaging",
		"We are masking in Photoshop",
		"We are knocking down walls"
		// "I love you.",
		// "it's lit fam",
		// "Hadoken!",
		// "Do you like Apples?",
		// "How do you like them apples.",
		// "Pst. Over here."
	];

	// Change page title on blur
	$(window).blur(function() {
		$("title").text(myArray[Math.floor(Math.random()*myArray.length)]);
	});

	// Change page title back on focus
	$(window).focus(function() {
		$("title").text(pageTitle);
	});

	 window.status = "<TYPE YOUR MESSAGE>"; 

	// $("#offerings .slick").slick({
	// 	infinite: 		true,
	// 	slidesToShow: 	4,
	// 	centerMode: 	true,
 //  		centerPadding: '0',
	// 	dots: 			false,
	// 	arrows: 		true,
	// 	slidesToScroll: 1,
	// 	autoplay: 		false,

	// 	responsive: [
	// 		{
	// 			breakpoint: 		1024,
	// 			settings: {
	// 				slidesToShow: 	4,
	// 				slidesToScroll: 1,
	// 				infinite: 		true,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 		600,
	// 			settings: {
	// 				slidesToShow: 	2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 		480,
	// 			settings: {
	// 				slidesToShow: 	1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });

	// $('.brandicons').slick({
	// 	infinite: 		true,
	// 	slidesToShow: 	8,
	// 	speed: 			300,
	// 	dots: 			false,
	// 	arrows: 		false,
	// 	slidesToScroll: 1,
	// 	autoplay: 		true,
	// 	autoplaySpeed: 	3000,

	// 	responsive: [
	// 		{
	// 			breakpoint: 		1024,
	// 			settings: {
	// 				slidesToShow: 	8,
	// 				slidesToScroll: 8,
	// 				infinite: 		true,
	// 				dots: 			true
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 		600,
	// 			settings: {
	// 				slidesToShow: 	4,
	// 				slidesToScroll: 4
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 		480,
	// 			settings: {
	// 				slidesToShow: 	2,
	// 				slidesToScroll: 2
	// 			}
	// 		}
	// 	]
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	// });

})(jQuery);

/*===============================
=            FORM            =
===============================*/

(function($) {

	// $(window).scroll( function() {
		
	// 	var wrapBottom = $('.pfolio .site-main').position().top+$('.pfolio .site-main').outerHeight(true),
	// 		scrollPos = $(window).scrollTop();

	// 		console.log(wrapBottom);
	// 		console.log(scrollPos);

	// 	if( scrollPos > wrapBottom ) {
	// 		$('.single-portfolio .entry-content').css( {'position':'absolute','bottom':0+'px'});
	// 	} else {
	//     	$('.single-portfolio .entry-content').css( {'position':'fixed'});
	// 	}
	// });

	// $('.single-portfolio .entry-content').followTo('#buffer');

})(jQuery);

/*===============================
=            MASONRY            =
===============================*/

(function($) {

	// var $grid = $('.grid').imagesLoaded( function() {
	// 	// init Masonry after all images have loaded
	// 	$grid.masonry({
	// 		columnWidth: 		'.grid-sizer',
	// 		itemSelector: 		'.grid-item',
	// 		gutter: 			0,
	// 		percentPosition: 	true
	// 	});
	// });

	// $(".grid").mason({
	// 	itemSelector: ".grid-item",
	// 	ratio: 1.5,
	// 	sizes: [
	// 		[1,1],
	// 	],
	// 	promoted: [
	//         ['large', 1, 2],
	//     ],
	// 	columns: [
	// 		[0,3000,2],
	// 	],
	// 	filler: {
	// 		itemSelector: '.filler',
	// 		filler_class: 'mason_filler',
	// 		 keepDataAndEvents: false
	// 	},
	// 	randomFillers: true,
	// 	// gutter: 5,
	// 	layout: 'fluid',
	// });
     

})(jQuery);

/*===========================
=            MAP            =
===========================*/

(function($) {

	function new_map( $el ) {
		
		// var
		var $markers = $el.find('.marker');
		
		// vars
		var args = {
			zoom		: 13,
			center		: new google.maps.LatLng(0, 0),
			mapTypeId	: google.maps.MapTypeId.ROADMAP,
			// styles 		: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"off"},{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"lightness":20},{"color":"#000000"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#dbdbdb"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#212325"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#6b2f2f"},{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#858585"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
		};
		
		// create map	        	
		var map = new google.maps.Map( $el[0], args);
		
		
		// add a markers reference
		map.markers = [];
		
		// add markers
		$markers.each(function(){
			
	    	add_marker( $(this), map );
			
		});
		
		// center map
		center_map( map );
		
		// return
		return map;
		
	}

	/*
	*  add_marker
	*
	*  This function will add a marker to the selected Google Map
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	4.3.0
	*
	*  @param	$marker (jQuery element)
	*  @param	map (Google Map object)
	*  @return	n/a
	*/

	function add_marker( $marker, map ) {

		// var
		var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

		var icon = {
			url: $marker.attr('data-icon'), // url
			size: new google.maps.Size(64, 64),     // original size you defined in the SVG file
			scaledSize: new google.maps.Size(64, 64), // scaled size
			//origin: new google.maps.Point(0,0), // origin
			//anchor: new google.maps.Point(0, 0) // anchor
		}

		// create marker
		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map,
			icon 		: icon
		});

		// add to array
		map.markers.push( marker );

		// if marker contains HTML, add it to an infoWindow
		if( $marker.html() )
		{
			// create info window
			var infowindow = new google.maps.InfoWindow({
				content		: $marker.html()
			});

			// show info window when marker is clicked
			google.maps.event.addListener(marker, 'click', function() {

				infowindow.open( map, marker );

			});
		}

	}

	/*
	*  center_map
	*
	*  This function will center the map, showing all markers attached to this map
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	4.3.0
	*
	*  @param	map (Google Map object)
	*  @return	n/a
	*/

	function center_map( map ) {

		// vars
		var bounds = new google.maps.LatLngBounds();

		// loop through all markers and create bounds
		$.each( map.markers, function( i, marker ){

			var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

			bounds.extend( latlng );

		});

		// only 1 marker?
		if( map.markers.length == 1 )
		{
			// set center of map
		    map.setCenter( bounds.getCenter() );
		    map.setZoom( 13 );
		}
		else
		{
			// fit to bounds
			map.fitBounds( bounds );
		}

	}

	/*
	*  document ready
	*
	*  This function will render each map when the document is ready (page has loaded)
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	5.0.0
	*
	*  @param	n/a
	*  @return	n/a
	*/
	// global var
	var map = null;

	$(document).ready(function(){

		$('#map').each(function(){

			// create map
			map = new_map( $(this) );

		});

	});

})(jQuery);