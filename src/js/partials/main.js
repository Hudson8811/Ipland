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
				scrollTop: $(href).offset().top - 110
			}, {
				duration: 300,
				easing: "linear"
			});
		}else if ($(window).width() < 479) {
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 50
			}, {
				duration: 300,
				easing: "linear"
			});
		}else {
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - 120
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
		var $sections = $('.scroll-to-sec');
		$sections.each(function(i,el){
			var top  = $(el).offset().top-$(window).height() / 1.8;
			var bottom = top + $(el).height();
			var scroll = $(window).scrollTop();
			var id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$('a.menu-header__link').removeClass('js-active');
				$('a[href="#'+id+'"]').addClass('js-active');
			}
		})
	});
})


