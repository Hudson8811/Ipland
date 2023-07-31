$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__menu').addClass('js-active')
	})
	$('.menu-header__close').click(function() {
		$('.header__menu').removeClass('js-active')
	})
})