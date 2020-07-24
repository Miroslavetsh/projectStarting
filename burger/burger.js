$('.header__burger').on( 'click', () => {
	$('.header__burger, .header__nav').toggleClass('active')
	$('body').toggleClass('lock')
})