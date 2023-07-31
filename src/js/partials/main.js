$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__menu').addClass('js-active')
	})
	$('.menu-header__close, .menu-header__link').click(function() {
		$('.header__menu').removeClass('js-active')
	})



	$('.click').on('click', function() {

		let href = $(this).attr('href');
		
		if ($(window).width() > 478 && $(window).width() < 767) {
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 145
			}, {
				duration: 300,
				easing: "linear"
			});
		}else if ($(window).width() < 479) {
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 78
			}, {
				duration: 300,
				easing: "linear"
			});
		}else {
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 170
			}, {
				duration: 300,
				easing: "linear"
			});
		}

		return false;
	});
})

