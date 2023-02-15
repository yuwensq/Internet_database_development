jQuery(function($) {
	
	"use strict";
		
	/* Main Menu for Single page 
	================================= */
	function singlePageMenu(){
		if ( $('.single-page').length){
			$('.main-nav').each(function(){
					var $active, $content, $links = $(this).find('a.on'),
						$li = $(this).find('a').closest('li');
				
					$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
					$content = $($active.attr('href'));
				
					$(this).on('click', 'a', function(e){
			
						$li.removeClass('active');
				
						$active = $(this);
						$content = $($(this).attr('href'));
		
						$(this).closest('li').addClass('active');
						$("body,html").animate({scrollTop:$content.position().top + 1}, 1000);
						
						e.preventDefault();
					});
			});
		}
	}

	/* single page Main Menu add Class to current Menu's Target Section
	===================================================================== */
	function activeMainMenuItem(){
		
		var headerSection = $('.header').height(),
			scrollPos = $(document).scrollTop();
		
		$('.single-page .main-nav a.on').each(function () {

			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			var	$li = currLink.closest('li');
			
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.single-page .main-nav > li').removeClass("active");
				$li.addClass("active");
			}
			else{
				$li.removeClass("active");
			}
		});
	}		
	
	singlePageMenu();
	
	
	/* Mix-It-Up Script
	==================== */
	if ( $('.filter-list').length) {
		$('.filter-list').mixitup( {
			effects: ['fade', 'blur']
		});
	}
	
	/* Tool-Tip Script
	=================== */
	if ( $('.tooltip-test').length) {
  		$('.tooltip-test').tooltip();
	}
	
	/* Owl Carousel Script
	======================= */
	if ( $('.our-client-list').length) {
		var owl = $(".our-client-list");
		owl.owlCarousel({
			items : 4,
			itemsDesktop : [1000,3],
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,1],
			transitionStyle : "fade",
			itemsMobile : false,
			//transitionStyle : "backSlide"
		});
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})
	}
	
	if ( $('.client-testimonial').length) {
		var owl = $(".client-testimonial");     
		owl.owlCarousel({
			singleItem : true,
		});
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})
	}

	
	/* Menu Navigation Script
	========================== */
	if ( $('#right-menu').length) {
		$('#right-menu').wps({
			name: 'right-menu-container',
			source: '#right-menu-container',
			side: 'right',
			displace: false
		});
		$('.closeme').click(function() {
			$.wps('close', 'right-menu-container');
		}); 
	}
	
	/* Tab Script
	============== */
	if ( $('.myTab a').length) {
		$('#myTab a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')	
		})
		
	}
	
	/* Accordian Script
	===================== */
	if ( $('.accordion').length) {
		$('.accordion').collapse();

		$('.panel-collapse').on('show.bs.collapse',function(){
			$(this).prev('.panel-heading').find('.panel-title').addClass("active-heading");
		});
		$('.panel-collapse').on('hide.bs.collapse',function(){
			$(this).prev('.panel-heading').find('.panel-title').removeClass("active-heading");
		});
	}
	
	/* Knob Script
	================ */
	if($(".knob").length !== 0){
	  $(".knob").knob({
	   draw : function () {
		 if(this.$.data('skin') == 'tron') {

			this.cursorExt = 0.3;
	
			var a = this.arc(this.cv) 
				, pa               
				, r = 1;
	
			this.g.lineWidth = this.lineWidth;
	
			if (this.o.displayPrevious) {
				pa = this.arc(this.v);
				this.g.beginPath();
				this.g.strokeStyle = this.pColor;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
				this.g.stroke();
			}
	
			this.g.beginPath();
			this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
			this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
			this.g.stroke();
	
			this.g.lineWidth = 2;
			this.g.beginPath();
			this.g.strokeStyle = this.o.fgColor;
			this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
			this.g.stroke();
	
			return false;
		}
	   }
	  });
	 }
	 
	 if ( $('.animated').length){
		var $ = jQuery;
	
		$('.animated').appear(function(){
			var element = $(this);
			var animation = element.data('animation');
			var animationDelay = element.data('delay');
		if (animationDelay) {
			setTimeout(function(){
			element.addClass( animation + " in" );
			element.removeClass('out');
		  }, animationDelay);
		}
		else {
			element.addClass( animation + " in" );
			element.removeClass('out');
		}    
		
		},{accY: -150});
		
	}	
	
	
	/* Create Fixed on page scroll 
	=============================== */
	
	function scrolledHeader(){
		var $ = jQuery;
		var headerHT = $('.header-style-2').height();
		
		if ( $('.fullscreen-container').length){
			
			var sliderHT = $('.fullscreen-container').height() - headerHT;
			
			if ( $(document).scrollTop() > sliderHT){
	
				$('.header-style-2').addClass('header-scrolled');
			}
			else {
				$('.header-style-2').removeClass('header-scrolled');
			}
		}
	
		else { 
			if ( $(document).scrollTop() > headerHT){
				$('.header-style-2').addClass('header-scrolled');
			}
			else {
				$('.header-style-2').removeClass('header-scrolled');
			}
		}
		
	}
	
	scrolledHeader();
	
	$(window).scroll( function(){
		scrolledHeader();
	});
	
	$('a[data-rel]').each(function(index, element) {
		$(this).attr('rel', $(this).data('rel') );
	});
	jQuery("a[data-rel^='prettyPhoto']").click(function(e) {
		e.preventDefault();
		return false;
	});
	
	if( jQuery("a[data-rel^='prettyPhoto']").length ) {
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'dark_square',social_tools:false,deeplinking:false});
	}
});



jQuery(document).ready(function( $ ){
    
	"use strict";
	// Fun Facts
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */
	
		$this.html(++current);
		if(current > $this.data('count')){
			$this.html($this.data('count'));
		} else {    
			setTimeout(function(){count($this)}, 50);
		}
	}        
		
	$(".stat-count").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	});
	
	
	/* Revolution Slider
	======================= */
	if ( $('.fullscreenbanner').length){
		
		
		$('.fullscreenbanner').revolution(
		{
				delay:10000000,
				startwidth:1170,
				startheight:600,
		
				onHoverStop:"on",
		
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
		
				hideThumbs:0,
				navigationType:"bullet",
				navigationArrows:"solo",
		
				navigationStyle:"round",
		
				navigationHAlign:"left",
				navigationVAlign:"bottom",
				navigationHOffset:30,
				navigationVOffset:30,
		
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
		
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
		
				touchenabled:"on",						
		
				stopAtSlide:-1,						
				stopAfterLoops:-1,						
		
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				hideSliderAtLimit:0,
		
				fullWidth:"on",
				fullScreen:"off",
		
				shadow:0
		
			});
		
	}
	
});


jQuery(document).ready(function($){

	$('#contactform_form').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit_btn')
			.after('<img src="images/AjaxLoader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			contact_name: $('#contact_name').val(),
			contact_email: $('#contact_email').val(),
			contact_subject: $('#contact_subject').val(),
			contact_message: $('#contact_message').val(),

		},
			function(data){
				
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform_form img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit_btn').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform_form').slideUp('slow');

			}
		);

		});

		return false;

	});

});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50738745-1', 'auto');
  ga('send', 'pageview');



