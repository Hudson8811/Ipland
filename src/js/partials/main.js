$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__menu').addClass('js-active')
		$('body').addClass('menu-open')
		$(this).attr('aria-expanded', 'true')
	})
	$('.menu-header__close, .menu-header__link, .menu-header__utility-link--hub').click(function() {
		$('.header__menu').removeClass('js-active')
		$('body').removeClass('menu-open')
		$('.header__burger').attr('aria-expanded', 'false')
	})
	$(document).on('keydown', function(event) {
		if (event.key === 'Escape') {
			$('.header__menu').removeClass('js-active')
			$('body').removeClass('menu-open')
			$('.header__burger').attr('aria-expanded', 'false')
		}
	})



	$('.click').on('click', function() {

		let href = $(this).attr('href');
		
		if ($(window).width() <= 767) {
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 88
			}, {
				duration: 300,
				easing: "linear"
			});
		}else {
			
			$('html, body').animate({
				scrollTop: href == '#scroll-to-sec5' ? $(href).offset().top - 120 : $(href).offset().top - 155
			}, {
				duration: 300,
				easing: "linear"
			});
		}

		return false;
	});

	$(".scroll-to-sec").each(function (i) {
		$(this).prop("id", "scroll-to-sec" + i);
	});
	$(".menu-header__link").each(function (i) {
		$(this).prop("id", "menu-header__link" + i);
	});
	$(".menu-header__link").each(function (i) {
		$(this).prop("href", "#scroll-to-sec" + i);
	});

	$(document).on('scroll', function() {
		var sections = $('.scroll-to-sec');

		for(let i = 0; i < sections.length; i++) {
			var scroll = $(window).scrollTop();
			var top  = $(sections[i]).offset().top-$(window).height() / 1.8;
			var bottom = top + $(sections[i]).height();
			var id = $(sections[i]).attr('id');
			var topToWindow = $(sections[i]).offset().top - scroll;

			if($(sections[i]).height() > $(window).height() ) {
				if(scroll > top && scroll < bottom){
					$('a.menu-header__link').removeClass('js-active');
					$('a[href="#'+id+'"]').addClass('js-active');
					break
				}
			} else {
				if(topToWindow + $(sections[i]).height() / 3 > 0){
					$('a.menu-header__link').removeClass('js-active');
					$('a[href="#'+id+'"]').addClass('js-active');
					break
				}
			}
			
		}

	});
})


