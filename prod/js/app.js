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
	
})