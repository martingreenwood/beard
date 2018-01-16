/**
 * File beard.js.
 *
 * Contains shit to make the theme do awesome stuff. (enqueue to min file genius)
 *
 */

/*===================================
=            MIN SCRIPTS            =
===================================*/

// MASON JS
!function t(e,r,o){function i(l,a){if(!r[l]){if(!e[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(n)return n(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[l]={exports:{}};e[l][0].call(u.exports,function(t){var r=e[l][1][t];return i(r?r:t)},u,u.exports,t,e,r,o)}return r[l].exports}for(var n="function"==typeof require&&require,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(t,e,r){!function(t){return t.fn.mason=function(e,r){var o,i,n,l,a,s;return l={itemSelector:"",ratio:0,sizes:[],columns:[[0,480,1],[480,780,2],[780,1080,3],[1080,1320,4],[1320,1680,5]],promoted:[],filler:{itemSelector:e.itemSelector,filler_class:"mason_filler",keepDataAndEvents:!1},randomSizes:!1,randomFillers:!1,layout:"none",gutter:0,debug:!1},o=null,n={container:t("<div id='debug'></div>"),block:"<div class='mason-debug' style='background-color: rgba(244, 67, 54, .5); float: left;'></div>"},s="<div class='mason_clear' style='clear:both; position:relative;'></div>",r&&(i={complete:r}),a={block:{height:0,width:0},matrix:[],startWidth:0},this.each(function(){var c,u,d,h,f,g,p,m,b;return p=t.extend(l,e),c=t.extend(i,r),o=t(this),m=function(){return p.debug&&console.log("SETUP"),o.children(".mason_clear").length<1&&o.append(s),a.block.height=Math.round(parseFloat(o.width()/u()/p.ratio)).toFixed(2),a.block.width=Math.round(parseFloat(o.width()/u())).toFixed(2),a.startWidth=o.width(),b(),p.debug?(console.log("############## Running In Debug Mode ##############"),d()):void 0},b=function(){var e;return 1!==u()?(o.children(""+p.itemSelector,"."+p.filler.filler_class).each(function(){var r,o,i,n,l,s,c;for(e=t(this),o=0,i=!1,n=0;o<p.promoted.length;)e.hasClass(p.promoted[o][0])&&(i=!0,n=o),o++;return i?(s=p.promoted[n],e.data("size",n),e.data("promoted",!0),r=parseFloat(a.block.height*s[2]).toFixed(0),r-=2*p.gutter,c=parseFloat(a.block.width*s[1]).toFixed(0),c-=2*p.gutter):(l=Math.floor(Math.random()*p.sizes.length),s=p.sizes[l],e.data("size",l),r=parseFloat(a.block.height*s[1]).toFixed(0),r-=2*p.gutter,c=parseFloat(a.block.width*s[0]).toFixed(0),c-=2*p.gutter),e.height(r+"px"),e.width(c+"px"),e.css({margin:p.gutter})}),f()):(e=o.children(""+p.itemSelector),e.height(a.block.height-2*p.gutter),e.width(a.block.width-2*p.gutter),e.css({margin:p.gutter}),"undefined"!=typeof c.complete?c.complete():void 0)},f=function(){var e,r,i,n,l;for(i=u(),n=o.height(),e=Math.round(n/a.block.height),a.matrix=[],l=0;e>l;){for(a.matrix[l]=[],r=0;i>r;)a.matrix[l][r]=!1,r++;l++}return o.children(""+p.itemSelector).each(function(){var e,r,o,i,n,s,c,u,d,h;for(e=t(this),s=Math.round(e.position().left/a.block.width),d=Math.round(e.position().top/a.block.height),u=parseFloat(e.data("size")),e.data("promoted")?(n=p.promoted[u][2],h=p.promoted[u][1],r=n*h):(n=p.sizes[u][1],h=p.sizes[u][0],r=n*h),l=0,c=[];r>l;){for(o=0;n>o;){for(i=0,a.matrix[d+o][s]=!0;h>i;)a.matrix[d+o][s+i]=!0,i++;o++}c.push(l++)}return c}),h()},h=function(){var e,r,i,n,l,s,u,d,h;for(s=0,n=t(""+p.filler.itemSelector).not("."+p.filler.filler_class).length,i=-1;s<a.matrix.length;){for(r=0;r<a.matrix[s].length;)a.matrix[s][r]||(l=a.block.height,u=a.block.width,d=s*l+p.gutter,h=r*u+p.gutter,l-=2*p.gutter,u-=2*p.gutter,p.randomFillers?i=Math.floor(Math.random()*n):(n>i&&i++,i===n&&(i=0)),e=t(""+p.filler.itemSelector).not("."+p.filler.filler_class).eq(i).clone(p.filler.keepDataAndEvents),e.addClass(p.filler.filler_class),e.css({position:"absolute",top:d+"px",left:h+"px",height:l+"px",width:u+"px",margin:"0px"}),e.appendTo(o)),r++;s++}return o.width()<a.startWidth?t(window,o).trigger("resize"):"undefined"!=typeof c.complete?c.complete():void 0},u=function(){var t,e,r,i;if(i=parseFloat(o.width()),t=0,e=p.columns.length-1,i>=p.columns[e[1]])t=p.columns[e[2]];else for(r=0;e>=r;)i>p.columns[r][0]&&p.columns[r][1]&&(t=p.columns[r][2]),r++;return Math.floor(t)},d=function(){var e,r,i,l,c,d,h;for(e=o.parent(),c=u(),d=o.height(),i=d/a.block.height,n.container.css({position:"absolute",top:"0",left:"0",height:o.height(),width:o.width()}),h=0;i>h;){for(l=0;c>l;)r=t(n.block),r.css({height:a.block.height-2*p.gutter,width:a.block.width-2*p.gutter,margin:p.gutter}),n.container.append(r),l++;h++}return n.container.append(s),e.prepend(n.container)},"fluid"===p.layout&&(g=null,t(window,o).on("resize",function(e){return function(e){return t("."+p.filler.filler_class).remove(),a.matrix=[],clearTimeout(g),g=null,g=setTimeout(function(){return m()},0)}}(this))),m()}),{destroy:function(){return t(window,o).off("resize")}}}}(jQuery)},{}]},{},[1]);

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
	className = 'scrolled';

	$document.scroll(function() {
		$element.toggleClass(className, $document.scrollTop() >= 10);
	});

	var pfolioText = $(".pfolio .entry-content");
	var pfolioTextOffset = $(".pfolio .entry-content").offset();

	if (pfolioText.length) {
		$(window).scroll(function() {	
			if ( $(window).scrollTop() > pfolioTextOffset.top ){
				$(pfolioText)
					.stop()
					.animate({"marginTop": ($(window).scrollTop() - pfolioTextOffset.top + 40) + "px"}, "slow" );
			} else {
				$(pfolioText)
					.stop()
					.animate({"marginTop": 0} );
			}
		})
	}

})(jQuery);


/*===================================
=            NAV SLOGAN             =
===================================*/

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
=            bio             =
============================*/

(function($) {

	// $('.member').on('click', function() {
		// $('.member.open').removeClass('open');
		// $(this).toggleClass('open');
	// });

})(jQuery);


/*===================================
=            ORIENTATION            =
===================================*/

jQuery(window).on("orientationchange",function($){
	if(window.orientation == 0) // Portrait
	{
		$('#turnme').removeClass('show');
		$('body').removeClass('disablescroll');
	}
	else // Landscape
	{
		$('#turnme').addClass('show');
		$('body').addClass('disablescroll');
	}
});

/*==============================
=            SLIDER            =
==============================*/

(function($) {

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
=            MASONRY            =
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