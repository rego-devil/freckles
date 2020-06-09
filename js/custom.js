document.addEventListener('DOMContentLoaded', function(){
	
	
	//$('select, .styler').styler();
	
	
	$('#owl-carousel').owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		transitionStyle : "fadeUp",
		navigation : true,
		pagination: true,
		lazyLoad : true,
		navigationText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>']
	});
	
	$('#owl-carousel-article').owlCarousel({
		navigation: true,
		pagination: false,
		rewindNav: true,
		addClassActive: true,
		itemsCustom : [
        	[0, 1],
        	[768, 2],
        	[992, 3]
      	],
		navigationText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>']
	});
	
	$('.ellipsis').dotdotdot({
		watch: 'window'
	});
	
	$('.article table').stacktable();
	
	$('.subMenu  li > span > a').click(function(){
		
			if( !$(this).closest('li').hasClass('active') && $(this).parent().next().is('ul') ) {
				
				$('.subMenu > ul > li').removeClass('active').children('ul').stop().slideUp();
				$(this).closest('li').addClass('active').children('ul').stop().slideDown();
				
			} else {
				$(this).closest('li').removeClass('active').children('ul').stop().slideUp();
			}
		
	});
	
	$('.mobileBtn').on('click', function(e) {
		$('.mainMenu').stop().slideToggle();
	});
	
	$(document).on('click touchstart', function(e) {
		if ( document.body.clientWidth < 768 ) {
			if (!$.contains($('.mobileBtn').get(0), e.target)   ) {
				$('.mainMenu').stop().slideUp();
			}
			 //!$.contains($('.mainMenu').get(0), e.target) && 
		}
	});
	/*
	$('.mainMenu > li > a').on('click', function(e) {
		if ( document.body.clientWidth < 768 ) {
			$('.mainMenu').stop().slideUp();
		}
	});
	*/
	
	$('.exhibit .thumb').on('click', function(e) {
		$('.mainImg').attr('src',$(this).attr('src'));
	});
	
	$('.topMenu').sticky({topSpacing:0});
	
	/*
	
	$(window).scroll(function() {
		
		if ( $(this).scrollTop() > 100 ) {
			$('.link-totop').fadeIn();
		}
		else {
			$('.link-totop').fadeOut();
		}
	});
	
	$('.link-totop').click ( function(){
		$('html, body').stop().animate({ scrollTop: 0 }, 300, 'linear');
	});

	
	
	
	*/
	

	

	/*$('.header').sticky({ topSpacing: 0, responsiveWidth: true });*/
	
	// jQuery to collapse the navbar on scroll
	/*
	
	$(window).scroll(function() {
		
		if ( $(this).scrollTop() > 20 ) {
			$('.header').addClass('topNavCollapse');
		} else {
			$('.header').removeClass('topNavCollapse');
		}
		
		if ( $(this).scrollTop() > 100 ) {
			$('.link-totop').fadeIn();
		}
		else {
			$('.link-totop').fadeOut();
		}
	});

	
	*/
	
});



