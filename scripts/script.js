/* Author:
	Erwin de ruiter
*/


function floatMenu()
{
	var scrollAmount=$(document).scrollTop();
	var newPosition=menuPosition+scrollAmount;
	if(newPosition>=maxMenuPosition) newPosition = maxMenuPosition;
	if($(window).height()<fl_menu.height()){
		fl_menu.css("top",menuPosition);
	}
	else {
		fl_menu.stop().animate({top: newPosition}, float_speed, float_easing);
	}
}

function initializeCufon()
{

    Cufon.replace('#navigation li a', { hover: true, fontFamily: 'zw_font1_demicnd' });
	Cufon.replace('h1', { fontFamily: 'zw_font1_demixcnd' });
	Cufon.replace('h2', { fontFamily: 'zw_font2' });
	Cufon.replace('.info', { fontFamily: 'zw_font2' });
	Cufon.replace('#preloadertext', { fontFamily: 'zw_font2' });
	Cufon.replace('.home.content h1', { fontFamily: 'zw_font2' });
	Cufon.replace('.item_services', { hover: {color: '#0298ED'},hoverables: { a: true, div: true }, fontFamily: 'zw_font1_demicomp' });
	Cufon.replace('.nav a', { hover: {color: '#0298ED'},hoverables: { a: true }, fontFamily: 'zw_font1_demicomp'});
	Cufon.replace('.language', { hover: {color: '#0298ED'},hoverables: { a: true }, fontFamily: 'zw_font1_demicomp'});
	Cufon.replace('#ipad h3', { fontFamily: 'zw_font1_demicomp' });
	Cufon.replace('.ipadOverlay h3', { fontFamily: 'zw_font1_demicomp' });
	Cufon.replace('#site h3', { fontFamily: 'zw_font1_demicomp' });
	Cufon.replace('h4', { fontFamily: 'zw_font1_demicomp' });
	Cufon.replace('#preloadertext', { fontFamily: 'zw_font1_demicomp' });
}


function customScrolling()
{
	var i=0;
	var delay = 0;
	var servicevalue = 300;
	var arrowPosValue = 1500;
	var scroll_position = $(window).scrollTop();


	floatMenu();
	animateBg();
	setActiveMenu();



 	if (scroll_position >= 0 && scroll_position <= 2400) {

 		if (scroll_position <= 1066) {
			$("#iPhoneHome").css({ top:(1600 * 0.5) - (scroll_position * 0.5), "margin-left":-300 - (scroll_position * 0.3)});
			$(".home.content").css({ top:250 + (scroll_position * 0.5), "margin-left":-200 + (scroll_position * 0.3)});
			$("#logoHome").css({ top:(100 * 0.5) - (scroll_position * 0.2), "margin-left":-376 - (scroll_position * 0.3)});
 		}

		$(".about.iphone").css({ top:(3000 * 0.6) - ((scroll_position) * 0.6), "margin-left":-480 + ((scroll_position) * 0.6)});

  		if (scroll_position <= 2166) {
			$("#infoAbout").css({ "margin-left":-50 - ((scroll_position) * 0.3)});
			$(".people.sam").css({ top:(4500 * 0.4) - ((scroll_position) * 0.4)});
			$(".people.erwin").css({ top:(4775 * 0.4) - ((scroll_position) * 0.4)});
		 	$(".about.line").css({ top:(4225 * 0.4) - ((scroll_position) * 0.4)});
		 }
 	}

 	if (scroll_position >= 800 && scroll_position <= 3200) {
 		$("#infoServices").css({ "margin-left":-524 + ((scroll_position-1000) * 0.3)});
 		$("#mediaspecialist").css({ top:2446 + ((scroll_position-800) * 0.24)});
 		$("#webspecialist").css({ top:2166 + ((scroll_position-800) * 0.24)});
 		$(".services_arrows").css({ top:2290 + ((scroll_position-800) * 0.24)});

 		if (scroll_position >= 1200) {
 			$(".webdesign").css({ top:(2492 + servicevalue) - ((scroll_position-1200) * 0.3),"margin-left":-198 + ((scroll_position-1200) * 0.1)});
 			$(".webdevelopment").css({ top:(2657 + servicevalue) - ((scroll_position-1200) * 0.3),"margin-left":164 - ((scroll_position-1200) * 0.1)});
 			$(".rtv").css({ top:(2683 + servicevalue) - ((scroll_position-1200) * 0.3),"margin-left":-252 + ((scroll_position-1200) * 0.1)});
 			//$(".conceptdevelopment").css({ top:(2542 + servicevalue) - ((scroll_position-1200) * 0.3)});
 			//$(".interaction").css({ top:(2417 + servicevalue) - ((scroll_position-1200) * 0.3)});
 			$(".writing").css({ top:(2842 + servicevalue) - ((scroll_position-1200) * 0.3)});
 		}
 	}

 	for (i=0;i<=16;i++)
 	{
 		var item = ".arrow"+i+"";
 		if (scroll_position > arrowPosValue) { $(item).fadeIn(); }
 		if (scroll_position < arrowPosValue) { $(item).fadeOut(); }
 		arrowPosValue = arrowPosValue + 50
 	}

 	if (scroll_position >= 2800 && scroll_position <= 4000) { $("#ipad").css({ top:3600 - ((scroll_position-2800) * 0.2)}); }
 	if (scroll_position >= 2000 && scroll_position <= 4000) { $("#infoPortfolio").css({ "margin-left":120 - ((scroll_position-2000) * 0.3)}); }
}


function animateBg()
{
	if($(window).scrollTop() > 0 && $(window).scrollTop() <= 1066)
	{
		$("section.home").css({top: '0px'});
		$("section.home").css({position: 'fixed'});
	}
	if($(window).scrollTop() > 1066 && $(window).scrollTop() <= 2132 )
	{
		$("section.aboutus").css({top: '0px'});
		$("section.aboutus").css({position: 'fixed'});
		$("section.services").css({top: '2132px'});
		$("section.services").css({position: 'absolute'});
	}
	else if($(window).scrollTop() > 2132 && $(window).scrollTop() <= 3198 )
	{
		$("section.services").css({top: '0px'});
		$("section.services").css({position: 'fixed'});
		$("section.aboutus").css({top: '1066px'});
		$("section.aboutus").css({position: 'absolute'});
	}
	else
	{
		$("section.home").css({top: '0px'});
		$("section.home").css({position: 'absolute'});
		$("section.aboutus").css({top: '1066px'});
		$("section.aboutus").css({position: 'absolute'});
		$("section.services").css({top: '2132px'});
		$("section.services").css({position: 'absolute'});
	}
}


function setActiveMenu()
{
	var scrollTop = $(window).scrollTop();

	if(scrollTop >= 0 && scrollTop < 906 ){ if( !$('#navhome').hasClass('active') ) { removeSetActive( '#navhome' ); } }
	if(scrollTop >= 906 && scrollTop < 1972 ) { if( !$('#navabout').hasClass('active') ) { removeSetActive( '#navabout' ); } }
	if(scrollTop >= 1972 && scrollTop < 3056 ) { if( !$('#navservices').hasClass('active') ) { removeSetActive( '#navservices' ); } }
	if(scrollTop >= 3056 && scrollTop < 3450 ) { if( !$('#navportfolio').hasClass('active') ) { removeSetActive( '#navportfolio' ); } }
	if(scrollTop >= 3490 ) { if( !$('#navcontact').hasClass('active') ) { removeSetActive( '#navcontact' ); } }

	function removeSetActive(value)
	{
		$("#navigation a").removeClass("active");
		$(value).addClass("active");
		Cufon.refresh('#navigation li a');
	}
}


function animateWings()
{
	$(".wings").animate({top:"-=4px"},500, 'swing').animate({top:"+=4px"}, 500, 'swing');
	setTimeout("animateWings()",1000);
}

function animateScrollDown()
{
	$("#scrolldownarrow").animate({top:"-=4px"},500, 'swing').animate({top:"+=4px"}, 500, 'swing');
	setTimeout("animateScrollDown()",1000);
}


function initButtons()
{
	var arrayServices = new Array(".webdesign", ".writing", ".webdevelopment", ".rtv");
	//var arrayServices = new Array(".webdesign", ".interaction", ".writing", ".webdevelopment", ".conceptdevelopment", ".rtv");
	var active = false;

	// BTN SERVICES
	$('.btn_services').hover(
	  function () {
	    $($("span", this).html()).css('color', '#0298ED');
		Cufon.refresh('.item_services');
	  },
	  function () {
	    $($("span", this).html()).css('color', '#ffffff');
		Cufon.refresh('.item_services');
	  }
	);

	$(".item_services,.btn_services").live('click',function(e){
		e.preventDefault();
		if(!active)
		{
			active = true;
			$(".services_arrows").fadeOut( );
			$(".btn_services").hide( );

			var delayValue = 0;
			arrayServices.sort(function() {return 0.5 - Math.random()})
			for (i=0;i<arrayServices.length;i++)
			{
				$(arrayServices[i]).delay(delayValue).fadeOut();
				delayValue = delayValue + 100;
			}

			$($(this).attr("href")).delay(800).fadeIn();
		}
	});

	$('a.closeservice').live('click',function(e){
		e.preventDefault();
		$($(this).attr("href")).delay(800).fadeOut();

		function successClose( ) { $('.serviceitem').hide(); }

		var delayValue = 800;
		$(".btn_services").delay(800).fadeTo(0);
		$(".services_arrows").delay(800).fadeIn( );
		arrayServices.sort(function() {return 0.5 - Math.random()})
		for (i=0;i<arrayServices.length;i++)
		{
			$(arrayServices[i]).delay(delayValue).fadeIn();
			delayValue = delayValue + 100;
		}
		$(".btn_services").show( );
		active = false;
	});


	// BTN TOP
	$('.btntop').live('click',function(e){
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: 0}, 5000, 'easeInOutQuart');
		$("#navigation a").removeClass("active");
		$("#navhome").addClass("active");
		Cufon.refresh('#navigation li a');
	});


	// MENU
	$(function() {
	    $('#navigation > li').hover(
	        function () {
				$('a',$(this)).stop().animate({'left':$('span.menua',this).html()},200);
	        },
	        function () {
	            $('a',$(this)).stop().animate({'left':'0px'},200);
	        }
	    );
	});

	$(function() {
	    $('#navigation a').bind('click',function(event){
			if (!$(this).hasClass('active'))
			{
				$("#navigation a").removeClass("active");
				$(this).addClass("active");
				Cufon.refresh('#navigation li a');

				var scrollDif;
				var scrollDuration;
				var scrollEasing = 'easeInOutQuart';
				var scrollTop = $(window).scrollTop();
				var scrollPage = $('span.menus',$(this).parent()).html() * 1066;

				if( scrollPage > scrollTop ) scrollDif = scrollPage - scrollTop;
				if( scrollTop > scrollPage ) scrollDif = scrollTop - scrollPage;

				scrollDuration = scrollDif * 2;

				$('html, body').stop().animate({ scrollTop: scrollPage}, scrollDuration, scrollEasing);
			}
			event.preventDefault();
	    });
	});


	$("#btncontactinfo").mouseover( function() { $("#contactinfo").fadeTo("slow", 1); });
	$("#contactinfo").mouseleave( function() { $(this).fadeOut(); });

	initRoundButtons( );
}


function initRoundButtons( )
{
	$(".hovera,.hoverimg").hover(
		function() { $(".hover", $("span", this).html()).stop().animate({"opacity": "1"},"fast"); },
		function() { $(".hover", $("span", this).html()).stop().animate({"opacity": "0"},"fast"); }
	);
	$(".hoveri").hover(
		function() { $(".hover", this).stop().animate({"opacity": "1"},"fast"); },
		function() { $(".hover", this).stop().animate({"opacity": "0"},"fast"); }
	);
}


function initGoogleMaps( )
{
	var styles = [
	{
		featureType: 'all',
		elementType: 'geometry',
		stylers: [
		{invert_lightness: 'true'},
		{saturation: -100}]
	},
	{
		featureType: 'road',
		stylers: [{visibility: 'off'}]
	},
	{
		featureType: "all",
		elementType: "labels",
	stylers: [
		{ visibility: "simplified" },
		{ hue: "#ff0000" },
		{ lightness: -41 },
		{ saturation: -91 },
		{ gamma: 0.76 }]
	}];


	var startpos = new google.maps.LatLng(52.0674037, 4.2550955);
	var mapOptions = {
		mapTypeControlOptions: { mapTypeIds: [ ] },
		zoom: 5,
		center: startpos,
		mapTypeControl: false,
		streetViewControl: false,
		disableDefaultUI: true,
		mapTypeId: "zwartwit"
	}

	var map = new google.maps.Map($("#map")[0], mapOptions);
	var styledMapOptions = { name: "zwartwit" }
	var zwMapType = new google.maps.StyledMapType(styles, styledMapOptions);
	map.mapTypes.set("zwartwit", zwMapType);
	map.setMapTypeId("zwartwit");

	  var places = [{"title": "Zwart/Wit Media","position": [52.0674037, 4.2550955]}];
	  var icon = 'http://zwartwitmedia.com/zwtest/wp-content/themes/zwartwit/img/img_locationpin.png'

	    $(places).each(function() {
	      var place = this;
	      var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(place.position[0], place.position[1]),
	        map:      map,
	        icon:     icon
	      });
		marker.setAnimation(google.maps.Animation.BOUNCE);
	  });
}


function initScrollBarSlides( )
{
	var settings = {
		showArrows: true,
		autoReinitialise: true
	};


	$(function()
	{
		$('#ipadContainer .content').jScrollPane(settings);

		$('#klantslider').slides({
			pause: 2000,
			generatePagination: false,
			play: 3500,
			hoverPause: true,
			next: 'btnrechts',
			prev: 'btnlinks'
		});


		$('#twitterslider').slides({
			pause: 2000,
			generatePagination: false,
			hoverPause: true,
			next: 'btnrechts',
			prev: 'btnlinks',
			container: 'tweets'
		});
	});

	$(".ipadOverlay").fadeOut(1000);
}


function initPortfolio( )
{
	var items = $('#stage li'),
		itemsByTags = {};

	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');
			elem.attr('data-id',i);

		$.each(tags,function(key,value) {
			value = $.trim(value);
			if(!(value in itemsByTags)){ itemsByTags[value] = [];}
			itemsByTags[value].push(elem);
		});
	});

	createList('ALLES',items);
	$.each(itemsByTags,function(k,v){
		createList(k,v);
	});


	$('#stage a').live('click',function(e){

		e.preventDefault();
		$('.ipadOverlay').html('');

		var url = $(this).attr('href');
		$('.ipadLoader').fadeIn('slow',loadItem);

		function loadItem(){ $('.ipadOverlay').load(url,'',showNewItem()); }
		function showNewItem() { $('.ipadOverlay').show('normal',hideLoader()); }
		function hideLoader() { $('.ipadLoader').delay(400).fadeOut('slow'); }

		return false;
	});


	$('#filter a').live('click',function(e){
		var link = $(this);

		link.addClass('active').siblings().removeClass('active');
		Cufon.refresh('.nav a');
		$('#stage').quicksand(link.data('list').find('li'),{
			duration: 800,
			easing: 'easeInOutQuad',
			enhancement: function() {
				var stageli = $('#stage');
			    stageli.find('cufon').each(function() {
					var getstageli = $(this);
			        var cText = getstageli.text();
			        getstageli.replaceWith(cText);
			    });
				$('.portfolioitem').hover(function() {
			        $('span', this).stop(true, true).css({ opacity: 1 }).fadeToggle(300);
			    });
				Cufon.refresh('h4');
			}
		});
		e.preventDefault();
	});

	$('#filter a:first').click();

	function createList(text,items){

		var ul = $('<ul>',{'class':'hidden'});

		$.each(items,function(){
			$(this).clone().appendTo(ul);
		});

		ul.appendTo('#ipadContainer');

		var a = $('<a>',{
			html: text,
			href:'#',
			data: {list:ul}
		}).appendTo('#filter');
	}
}


function init( )
{
	$(".hover").animate({ opacity: 0 }, 0);

	animateWings( );
	animateScrollDown( );
	initButtons( );
	initGoogleMaps( );
	initScrollBarSlides( );
	initPortfolio( );

	var cufonh2 = $('.people h2, .label h2, .block div h2');
	cufonh2.find('cufon').each(function() {
		var getcufonh2 = $(this);
		getcufonh2.css({ "top":-10 });
	});
}


function initIpadJs( )
{
	var settings = {
		showArrows: true,
		autoReinitialise: true,
		mouseWheel: true
	};

	initializeCufon( );
	initRoundButtons( );

	$('.aitem').hover(
	  function () {
	    $(this).css('color', '#0298ED');
		Cufon.refresh('.nav a');
	  },
	  function () {
	    $(this).css('color', '#ffffff');
		Cufon.refresh('.nav a');
	  }
	);

	$('a.close').live('click',function(e){
		e.preventDefault();
		$('.ipadOverlay').fadeOut("slow");

		return false;
	});

	$('#slides').slides({
		preload: false,
		pause: 2500,
		hoverPause: true
	});

	$('.ipadOverlay .content').jScrollPane(settings);


	$("#slider").hover(
		function() { $('.slidenav').fadeIn(200); },
		function () { jQuery('.slidenav').fadeOut(200); }
	);

	$(".hover").animate({ opacity: 0 }, 0);
}
