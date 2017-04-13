$(document).ready(function () {
    
   setTimeout(function () {
    $('.body_index').addClass('loaded');
   }, 0);
	
		$(window).load(function(){ 
			var hh = $('header').height(); 
			var fh = $('.footer_nav').height(); 
			var wh = $(window).height();
			var сh = wh - hh - fh - 120; 
			$('.inner_content').css('min-height', сh); 
		});

	
	$('.nav_button').on('click', function(e){
		e.preventDefault();
		$(this).next().addClass('open');
	});
	
	$('.nav_button_close').on('click', function(e){
		e.preventDefault();
		$(this).parent().removeClass('open');
	});
	
	if($(window).width() < 767) {
		$('.sidebar_nav ').addClass('slider');
	} else {
		$('.sidebar_nav').removeClass('slider');
	}
	
	$('.slider').slick({
		arrows: false,
		centerMode: false,
		variableWidth: true
		
	});
	
	if($(window).width() < 480) {
		$('.pills').addClass('tabSet');
		$('.image_block_card').addClass('image_block_card_slider');
		$('.tabSet').slick({
				arrows: false,
				centerMode: false,
				variableWidth: true,
 	});
		
		$('.image_block_card_slider').slick({
				arrows: false,
				centerMode: true,
				variableWidth: true,
				slidesToShow: 3
		});
	} else {
		$('.pills').removeClass('tabSet');
		$('.image_block_card').removeClass('image_block_card_slider');
		$("[data-fancybox]").fancybox({
			buttons : false
		});
	}
	
	
	
	
})