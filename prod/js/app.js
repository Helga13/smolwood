$(document).ready(function () {
	
	

	
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
		$('.tabSet').slick({
				arrows: false,
				centerMode: false,
				variableWidth: true

			});
	} else {
		$('.pills').removeClass('tabSet');
	}
	
	
})