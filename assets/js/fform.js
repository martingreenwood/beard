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

/**
 * fullscreenForm.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
!function(t){"use strict";function e(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);return t}function s(t,e){var s=document.createElement(t);return e&&(e.cName&&(s.className=e.cName),e.inner&&(s.innerHTML=e.inner),e.appendTo&&e.appendTo.appendChild(s)),s}function i(t,s){this.el=t,this.options=e({},this.options),e(this.options,s),this._init()}var r={animations:Modernizr.cssanimations},n={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},o=n[Modernizr.prefixed("animation")];i.prototype.options={ctrlProgress:!0,ctrlNavDots:!0,ctrlNavPosition:!0,onReview:function(){return!1}},i.prototype._init=function(){this.formEl=this.el.querySelector("form"),this.fieldsList=this.formEl.querySelector("ol.fs-fields"),this.current=0,this.fields=[].slice.call(this.fieldsList.children),this.fieldsCount=this.fields.length,classie.add(this.fields[this.current],"fs-current"),this._addControls(),this._addErrorMsg(),this._initEvents()},i.prototype._addControls=function(){if(this.ctrls=s("div",{cName:"fs-controls",appendTo:this.el}),this.ctrlContinue=s("button",{cName:"fs-continue",inner:"Continue",appendTo:this.ctrls}),this._showCtrl(this.ctrlContinue),this.options.ctrlNavDots){this.ctrlNav=s("nav",{cName:"fs-nav-dots",appendTo:this.ctrls});for(var t="",e=0;e<this.fieldsCount;++e)t+=e===this.current?'<button class="fs-dot-current"></button>':"<button disabled></button>";this.ctrlNav.innerHTML=t,this._showCtrl(this.ctrlNav),this.ctrlNavDots=[].slice.call(this.ctrlNav.children)}this.options.ctrlNavPosition&&(this.ctrlFldStatus=s("span",{cName:"fs-numbers",appendTo:this.ctrls}),this.ctrlFldStatusCurr=s("span",{cName:"fs-number-current",inner:Number(this.current+1)}),this.ctrlFldStatus.appendChild(this.ctrlFldStatusCurr),this.ctrlFldStatusTotal=s("span",{cName:"fs-number-total",inner:this.fieldsCount}),this.ctrlFldStatus.appendChild(this.ctrlFldStatusTotal),this._showCtrl(this.ctrlFldStatus)),this.options.ctrlProgress&&(this.ctrlProgress=s("div",{cName:"fs-progress",appendTo:this.ctrls}),this._showCtrl(this.ctrlProgress))},i.prototype._addErrorMsg=function(){this.msgError=s("span",{cName:"fs-message-error",appendTo:this.el})},i.prototype._initEvents=function(){var t=this;this.ctrlContinue.addEventListener("click",function(){t._nextField()}),this.options.ctrlNavDots&&this.ctrlNavDots.forEach(function(e,s){e.addEventListener("click",function(){t._showField(s)})}),this.fields.forEach(function(e){if(e.hasAttribute("data-input-trigger")){var s=e.querySelector('input[type="radio"]')||e.querySelector("select");if(!s)return;switch(s.tagName.toLowerCase()){case"select":s.addEventListener("change",function(){t._nextField()});break;case"input":[].slice.call(e.querySelectorAll('input[type="radio"]')).forEach(function(e){e.addEventListener("change",function(e){t._nextField()})});break}}}),document.addEventListener("keydown",function(e){if(!t.isLastStep&&"textarea"!==e.target.tagName.toLowerCase()){13===(e.keyCode||e.which)&&(e.preventDefault(),t._nextField())}})},i.prototype._nextField=function(t){if(this.isLastStep||!this._validade()||this.isAnimating)return!1;this.isAnimating=!0,this.isLastStep=this.current===this.fieldsCount-1&&void 0===t,this._clearError();var e=this.fields[this.current];if(this.navdir=void 0!==t&&t<this.current?"prev":"next",this.current=void 0!==t?t:this.current+1,void 0===t&&(this._progress(),this.farthest=this.current),classie.add(this.fieldsList,"fs-display-"+this.navdir),classie.remove(e,"fs-current"),classie.add(e,"fs-hide"),!this.isLastStep){this._updateNav(),this._updateFieldNumber();var s=this.fields[this.current];classie.add(s,"fs-current"),classie.add(s,"fs-show")}var i=this,n=function(t){r.animations&&this.removeEventListener(o,n),classie.remove(i.fieldsList,"fs-display-"+i.navdir),classie.remove(e,"fs-hide"),i.isLastStep?(i._hideCtrl(i.ctrlNav),i._hideCtrl(i.ctrlProgress),i._hideCtrl(i.ctrlContinue),i._hideCtrl(i.ctrlFldStatus),classie.remove(i.formEl,"fs-form-full"),classie.add(i.formEl,"fs-form-overview"),classie.add(i.formEl,"fs-show"),i.options.onReview()):(classie.remove(s,"fs-show"),i.options.ctrlNavPosition&&(i.ctrlFldStatusCurr.innerHTML=i.ctrlFldStatusNew.innerHTML,i.ctrlFldStatus.removeChild(i.ctrlFldStatusNew),classie.remove(i.ctrlFldStatus,"fs-show-"+i.navdir))),i.isAnimating=!1};r.animations?"next"===this.navdir?this.isLastStep?e.querySelector(".fs-anim-upper").addEventListener(o,n):s.querySelector(".fs-anim-lower").addEventListener(o,n):s.querySelector(".fs-anim-upper").addEventListener(o,n):n()},i.prototype._showField=function(t){if(t===this.current||t<0||t>this.fieldsCount-1)return!1;this._nextField(t)},i.prototype._updateFieldNumber=function(){if(this.options.ctrlNavPosition){this.ctrlFldStatusNew=document.createElement("span"),this.ctrlFldStatusNew.className="fs-number-new",this.ctrlFldStatusNew.innerHTML=Number(this.current+1),this.ctrlFldStatus.appendChild(this.ctrlFldStatusNew);var t=this;setTimeout(function(){classie.add(t.ctrlFldStatus,"next"===t.navdir?"fs-show-next":"fs-show-prev")},25)}},i.prototype._progress=function(){this.options.ctrlProgress&&(this.ctrlProgress.style.width=this.current*(100/this.fieldsCount)+"%")},i.prototype._updateNav=function(){this.options.ctrlNavDots&&(classie.remove(this.ctrlNav.querySelector("button.fs-dot-current"),"fs-dot-current"),classie.add(this.ctrlNavDots[this.current],"fs-dot-current"),this.ctrlNavDots[this.current].disabled=!1)},i.prototype._showCtrl=function(t){classie.add(t,"fs-show")},i.prototype._hideCtrl=function(t){classie.remove(t,"fs-show")},i.prototype._validade=function(){var t=this.fields[this.current],e=t.querySelector("input[required]")||t.querySelector("textarea[required]")||t.querySelector("select[required]"),s;if(!e)return!0;switch(e.tagName.toLowerCase()){case"input":if("radio"===e.type||"checkbox"===e.type){var i=0;[].slice.call(t.querySelectorAll('input[type="'+e.type+'"]')).forEach(function(t){t.checked&&++i}),i||(s="NOVAL")}else""===e.value&&(s="NOVAL");break;case"select":""!==e.value&&"-1"!==e.value||(s="NOVAL");break;case"textarea":""===e.value&&(s="NOVAL");break}return void 0==s||(this._showError(s),!1)},i.prototype._showError=function(t){var e="";switch(t){case"NOVAL":e="Please fill the field before continuing";break;case"INVALIDEMAIL":e="Please fill a valid email address";break}this.msgError.innerHTML=e,this._showCtrl(this.msgError)},i.prototype._clearError=function(){this._hideCtrl(this.msgError)},t.FForm=i}(window);


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

	(function() {
		var formWrap = document.getElementById( 'fs-form-wrap' );

		[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
			new SelectFx( el, {
				stickyPlaceholder: false,
				onChange: function(val){
					document.querySelector('span.cs-placeholder').style.backgroundColor = val;
				}
			});
		} );

		new FForm( formWrap, {
			onReview : function() {
				classie.add( document.body, 'overview' ); // for demo purposes only
			}
		} );
	})();

	var frm = $('.work-with-us form');
	
	 $('.work-with-us').parent().addClass('ffs');

	$(frm).addClass('fs-form fs-form-full');

	frm.submit(function (e) {

		e.preventDefault();

		$.ajax({
			type: frm.attr('method'),
			url: frm.attr('action'),
			data: frm.serialize(),
			success: function (data) {
				console.log('Submission was successful.');
				console.log(data);
			},
			error: function (data) {
				console.log('An error occurred.');
				console.log(data);
			},
		});
	});

})(jQuery);