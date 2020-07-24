$(document).ready(function () {
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active')
			$('.block__content').not($(this).next()).slideUp(300)
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
})