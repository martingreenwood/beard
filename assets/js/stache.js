/**
 * File beard.js.
 *
 * Contains shit to make the theme do awesome stuff. (enqueue to min file genius)
 *
 */

/*===================================
=            MIN SCRIPTS            =
===================================*/

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-apng-appearance-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-bloburls-borderimage-borderradius-boxshadow-boxsizing-capture-checked-classlist-cookies-cors-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-directory-display_runin-displaytable-documentfragment-ellipsis-fileinput-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-fullscreen-generatedcontent-geolocation-getrandomvalues-hairline-hidden-hiddenscroll-history-hovermq-hsla-ie8compat-imgcrossorigin-inlinesvg-jpeg2000-jpegxr-json-lastchild-localizednumber-localstorage-mediaqueries-multiplebgs-mutationobserver-nthchild-objectfit-opacity-overflowscrolling-placeholder-preserve3d-regions-requestautocomplete-rgba-sandbox-scrollsnappoints-seamless-shapes-siblinggeneral-smil-srcdoc-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-textalignlast-textareamaxlength-textshadow-userselect-willchange-wrapflow-domprefixes-prefixes-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),x.push((i?"":"no-")+s.join("-"))}}function o(e){var t=z.className,n=Modernizr._config.classPrefix||"";if(B&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),B?z.className.baseVal=t:z.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):B?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function d(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function l(e,t){return e-1===t||e===t||e+1===t}function c(){var e=t.body;return e||(e=a(B?"svg":"body"),e.fake=!0),e}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,n,r,i){var o,s,d,l,u="modernizr",f=a("div"),p=c();if(parseInt(r,10))for(;r--;)d=a("div"),d.id=i?i[r]:u+(r+1),f.appendChild(d);return o=a("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=z.style.overflow,z.style.overflow="hidden",z.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),z.style.overflow=l,z.offsetHeight):f.parentNode.removeChild(f),!!s}function p(e,t){if("object"==typeof e)for(var n in e)O(e,n)&&p(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?m(i,n||t):i);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function A(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(g(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+g(t[i])+":"+r+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function v(e,t,i,o){function d(){c&&(delete U.style,delete U.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=A(e,i);if(!r(l,"undefined"))return l}for(var c,f,p,m,h,g=["modernizr","tspan","samp"];!U.style&&g.length;)c=!0,U.modElem=a(g.shift()),U.style=U.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],h=U.style[m],s(m,"-")&&(m=u(m)),U.style[m]!==n){if(o||r(i,"undefined"))return d(),"pfx"==t?m:!0;try{U.style[m]=i}catch(v){}if(U.style[m]!=h)return d(),"pfx"==t?m:!0}return d(),!1}function b(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+H.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,i,o):(s=(e+" "+N.join(a+" ")+a).split(" "),h(s,t,n))}function y(e,t,r){return b(e,n,n,t,r)}var x=[],T=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var C=e.CSS;Modernizr.addTest("cssescape",C?"function"==typeof C.escape:!1);var k="CSS"in e&&"supports"in e.CSS,S="supportsCSS"in e;Modernizr.addTest("supports",k||S),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}}),Modernizr.addTest("mutationobserver",!!e.MutationObserver||!!e.WebKitMutationObserver),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var E=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=E;var z=t.documentElement;Modernizr.addTest("willchange","willChange"in z.style),Modernizr.addTest("classlist","classList"in z),Modernizr.addTest("documentfragment",function(){return"createDocumentFragment"in t&&"appendChild"in z});var B="svg"===z.nodeName.toLowerCase();B||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,l(t)}function o(e){var t=v[e[g]];return t||(t={},A++,e[g]=A,v[A]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),d=s.length;d>a;a++)i.createElement(s[a]);return i}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var r=o(e);return!b.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||d(e,r),e}var c,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",A=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:i};e.html5=b,l(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var j="Moz O ms Webkit",N=w._config.usePrefixes?j.toLowerCase().split(" "):[];w._domPrefixes=N,Modernizr.addTest("adownload",!e.externalHost&&"download"in a("a")),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+E.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=a("a");return e.style.cssText=E.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=E.length-1;o>i;i++)e=0===i?"to ":"",r+=t+E[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=a("a"),r=n.style;return r.cssText=e+E.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("csspointerevents",function(){var e=a("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,i=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=a("a"),n=a("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),z.appendChild(t),i=n.getBoundingClientRect(),z.removeChild(t),i=i.width&&i.width<4)}),Modernizr.addTest("hidden","hidden"in a("a")),Modernizr.addTest("capture","capture"in a("input")),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=a("input");return e.type="file",!e.disabled}),Modernizr.addTest("fileinputdirectory",function(){var e=a("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,r=N.length;r>n;n++)if(N[n]+t in e)return!0;return!1}),Modernizr.addTest("formattribute",function(){var e,n=a("form"),r=a("input"),i=a("div"),o="formtest"+(new Date).getTime(),s=!1;n.id=o;try{r.setAttribute("form",o)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,r.setAttributeNode(e))}return i.appendChild(n),i.appendChild(r),z.appendChild(i),s=n.elements&&1===n.elements.length&&r.form==n,i.parentNode.removeChild(i),s}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("sandbox","sandbox"in a("iframe")),Modernizr.addTest("seamless","seamless"in a("iframe")),Modernizr.addTest("srcdoc","srcdoc"in a("iframe")),Modernizr.addTest("imgcrossorigin","crossOrigin"in a("img")),Modernizr.addTest("stylescoped","scoped"in a("style")),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("textareamaxlength",!!("maxLength"in a("textarea")));var M={elem:a("modernizr")};Modernizr._q.push(function(){delete M.elem}),Modernizr.addTest("csschunit",function(){var e,t=M.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=M.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e}),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",s(e.backgroundColor,"rgba")||s(e.backgroundColor,"hsla")}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))});var R={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(R.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(R.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(R.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var _=w.testStyles=f;Modernizr.addTest("hiddenscroll",function(){return _("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("checked",function(){return _("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),_("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var P=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();P?Modernizr.addTest("fontface",!1):_('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),_('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),Modernizr.addTest("hairline",function(){return _("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),Modernizr.addTest("cssinvalid",function(){return _("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),_("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),_("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),_("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+E.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return _("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),_("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return _("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=a("input");return e.appendChild(t),t.clientWidth>10})}),_("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(d(t,null,"height"),10);Modernizr.addTest("cssvhunit",r==n)}),_("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.max(o,a),10),c=parseInt(d(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",l(s,c)||l(s,c-i))},3),_("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.min(o,a),10),c=parseInt(d(t,null,"width"),10);Modernizr.addTest("cssvminunit",l(s,c)||l(s,c-i))},3),_("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(d(t,null,"width"),10);Modernizr.addTest("cssvwunit",r==n)}),Modernizr.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',_("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r});var L=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return f("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=L,Modernizr.addTest("mediaqueries",L("only all"));var O;!function(){var e={}.hasOwnProperty;O=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=p}),Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=a("canvas"),n=t.getContext("2d");e.onload=function(){p("apng",function(){return"undefined"==typeof t.getContext?!1:(n.drawImage(e,0,0),0===n.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){p("jpeg2000",1==e.width)},e.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){p("jpegxr",1==e.width,{aliases:["jpeg-xr"]})},e.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),Modernizr.addTest("hovermq",L("(hover)")),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var I=a("input"),V="search tel url email datetime date month week time datetime-local number range color".split(" "),W={};Modernizr.inputtypes=function(e){for(var r,i,o,a=e.length,s="1)",d=0;a>d;d++)I.setAttribute("type",r=e[d]),o="text"!==I.type&&"style"in I,o&&(I.value=s,I.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&I.style.WebkitAppearance!==n?(z.appendChild(I),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(I,null).WebkitAppearance&&0!==I.offsetHeight,z.removeChild(I)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?I.checkValidity&&I.checkValidity()===!1:I.value!=s)),W[e[d]]=!!o;return W}(V),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=a("div"),r=c(),i=function(){return z.insertBefore(r,z.firstElementChild||z.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var o=n.childNodes[0];i.appendChild(n),o.focus();try{t.execCommand("SelectAll",!1),t.execCommand("InsertText",!1,"1,1")}catch(s){}return e="number"===o.type&&1.1===o.valueAsNumber&&o.checkValidity(),i.removeChild(n),r.fake&&i.parentNode.removeChild(i),e});var H=w._config.usePrefixes?j.split(" "):[];w._cssomPrefixes=H;var q=function(t){var r,i=E.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=E[a],d=s.toUpperCase()+"_"+r;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};w.atRule=q;var U={style:M.elem.style};Modernizr._q.unshift(function(){delete U.style});var F=w.testProp=function(e,t,r){return v([e],n,t,r)};Modernizr.addTest("textshadow",F("textShadow","1px 1px")),w.testAllProps=b;var D=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=u(e)),t?b(e,t,n):b(e,"pfx"))};Modernizr.addTest("fullscreen",!(!D("exitFullscreen",t,!1)&&!D("cancelFullScreen",t,!1)));var Q,G=D("crypto",e);if(G&&"getRandomValues"in G&&"Uint32Array"in e){var J=new Uint32Array(10),Y=G.getRandomValues(J);Q=Y&&r(Y[0],"number")}Modernizr.addTest("getrandomvalues",!!Q),Modernizr.addTest("backgroundblendmode",D("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!D("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("regions",function(){if(B)return!1;var e=D("flowFrom"),t=D("flowInto"),r=!1;if(!e||!t)return r;var i=a("iframe"),o=a("div"),s=a("div"),d=a("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,o.appendChild(s),o.appendChild(d),z.appendChild(o);var c,u,f=s.getBoundingClientRect();return s.style[t]=l,c=s.getBoundingClientRect(),u=parseInt(c.left-f.left,10),z.removeChild(o),42==u?r=!0:(z.appendChild(i),f=i.getBoundingClientRect(),i.style[t]=l,c=i.getBoundingClientRect(),f.height>0&&f.height!==c.height&&0===c.height&&(r=!0)),s=d=o=i=n,r}),Modernizr.addTest("wrapflow",function(){var e=D("wrapFlow");if(!e||B)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=a("div"),i=a("div"),o=a("span");i.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",r.appendChild(i),r.appendChild(o),z.appendChild(r);var s=o.offsetLeft;return z.removeChild(r),i=o=r=n,150==s}),Modernizr.addTest("requestautocomplete",!!D("requestAutocomplete",a("form")));var $=D("URL",e,!1);$=$&&e[$],Modernizr.addTest("bloburls",$&&"revokeObjectURL"in $&&"createObjectURL"in $),w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("appearance",y("appearance")),Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",y("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",y("grid-template-rows","none",!0)),Modernizr.addTest("displayrunin",y("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",y("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=a("a");return e.style.cssText=E.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function i(){try{var e=a("div"),n=a("span"),r=e.style,i=0,o=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",i=n.offsetHeight,o=n.offsetWidth,r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+E.join("hyphens:auto; "),s=n.offsetHeight!=i||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function o(e,n){try{var r=a("div"),i=a("span"),o=r.style,s=0,d=!1,l=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",r.appendChild(i),t.body.insertBefore(r,u),i.innerHTML="mm",s=i.offsetHeight,i.innerHTML="m"+e+"m",l=i.offsetHeight>s,n?(i.innerHTML="m<br />m",s=i.offsetWidth,i.innerHTML="m"+e+"m",c=i.offsetWidth>s):c=!0,l===!0&&c===!0&&(d=!0),t.body.removeChild(r),r.removeChild(i),d}catch(f){return!1}}function s(n){try{var r,i=a("input"),o=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(i,o),i.setSelectionRange?(i.focus(),i.setSelectionRange(0,0)):i.createTextRange&&(r=i.createTextRange(),r.collapse(!0),r.moveEnd("character",0),r.moveStart("character",0),r.select());try{e.find?d=e.find(s+s):(r=e.self.document.body.createTextRange(),d=r.findText(s+s))}catch(c){d=!1}return t.body.removeChild(o),t.body.removeChild(i),d}catch(c){return!1}}return t.body||t.getElementsByTagName("body")[0]?(p("csshyphens",function(){if(!y("hyphens","auto",!0))return!1;try{return i()}catch(e){return!1}}),p("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void p("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,r)}var r=300;setTimeout(n,r)}),Modernizr.addTest("cssmask",y("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),
Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("cssresize",y("resize","both",!0)),Modernizr.addTest("scrollsnappoints",y("scrollSnapType")),Modernizr.addTest("shapes",y("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",y("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in z.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",_(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransformslevel2",function(){return y("translate","45px",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("userselect",y("userSelect","none",!0)),i(),o(x),delete w.addTest,delete w.addAsyncTest;for(var Z=0;Z<Modernizr._q.length;Z++)Modernizr._q[Z]();e.Modernizr=Modernizr}(window,document);

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
	$element = $('#masthead');

	$document.scroll(function() {
		$element.toggleClass('hidden', $document.scrollTop() >= 99);
	});

	$document.scroll(function() {
		$element.toggleClass('fixed', $document.scrollTop() >= 700);
	});

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

/*======================================
=            EQUAL HEIGHTS             =
======================================*/

(function($) {
	$('#images .element').matchHeight();
})(jQuery);

/*=============================
=            VIDEO            =
=============================*/

// (function($) {
	var video = jQuery('video'); 
	var visibility = VisSense(video[0], { fullyvisible: 0.75 });

	var visibility_monitor = visibility.monitor({
	  fullyvisible: function() { 
	    video.play();
	  }, 
	  hidden: function() { 
	    video.stop(); 
	  }
	}).start();
// })(jQuery);
// 
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

/*=============================
=            LINK             =
=============================*/

(function($) {

	$('.error404 a.procrastinate').on('click', function(e) {
		e.preventDefault();
		
		var target = $(this).attr('href');
		$(target).toggleClass('show');
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

/*==============================
=            TITLEs            =
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