$(document).ready(function () {
	
	$('.nav_button').on('click', function(e){
		e.preventDefault();
		$(this).next().addClass('open');
	});
	
	$('.nav_button_close').on('click', function(e){
		e.preventDefault();
		$(this).parent().removeClass('open');
	});
	
})