console.log('hello from script.js');
$(function () {
	$('.dropdown-btn').on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
			content = $('.dropdown-menu'),
			duration = 400;

		if (!$this.hasClass('open')) {
			$this.stop(true, false).addClass('open');

			content.stop(true, false).slideDown(duration);
		} else {
			content.stop(true, false).slideUp(duration);
			$this.stop(true, false).removeClass('open');

		}
	});

	$('.dropdown-menu__item_inclusive').hover(function() {
		$(this).find('ul.inserted-menu').fadeIn(200);
	}, function() {
		$(this).find('ul.inserted-menu').fadeOut(200);
	});

	$('.banner__carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: ["",""],
		loop: false,
		dots: false
		// responsive: false
	});

});
$(document).ready(function(){

});
