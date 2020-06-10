document.addEventListener('DOMContentLoaded', function () {


	//$('select, .styler').styler();


	$('#owl-carousel-article').owlCarousel({
		navigation: true,
		pagination: false,
		rewindNav: true,
		addClassActive: true,
		itemsCustom: [
			[0, 1],
			[768, 2],
			[992, 3]
		],
		navigationText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
	});


	$(document).on('click touchstart', function (e) {
		if (document.body.clientWidth < 768) {
			if (!$.contains($('.mobileBtn').get(0), e.target)) {
				$('.mainMenu').stop().slideUp();
			}
			//!$.contains($('.mainMenu').get(0), e.target) && 
		}
	});





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



