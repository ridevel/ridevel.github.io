$(document).ready( function() {
	$('.menu_trigger').click(function() {
		$('.menu nav ul').attr('style', 'display: block !important');
	});
	
	$(window).resize(function() {
		if ($(window).width() > 500) {
			$('nav ul').removeAttr('style');
		}
	});
});