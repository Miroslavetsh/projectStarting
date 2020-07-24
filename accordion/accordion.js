// jQuery(1)

// $(document).ready(function () {
// 	$('.accordion__trigger').click(function () {
// 		$(this).next('.accordion__content').slideToggle(300);
// 	})
// })

// jQuery(2)

// $(document).ready(function () {
// 	$('.accordion__trigger').click(function () {
// 		const parent = $(this).parent()
// 		if (parent.hasClass('accordion__item--active')) {
// 			parent.removeClass('accordion__item--active')
// 		}else {
// 			$('.accordion__item').removeClass('accordion__item--active')
// 			parent.addClass('accordion__item--active');
// 		}
// 	})
// })

// JavaScript(1)

// document.querySelectorAll('.accordion__trigger').forEach((item) => 
// 	item.addEventListener('click', () => {
// 		item.parentNode.classList.toggle('accordion__item--active')
// 	})
// )

// JavaScript(2)

document.querySelectorAll('.accordion__trigger').forEach((item) => 
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if(parent.classList.contains('accordion__item--active')) {
			parent.classList.remove('accordion__item--active')
		}else {
			document.querySelectorAll('.accordion__item').forEach((child) => child.classList.remove('accordion__item--active'))
			parent.classList.add('accordion__item--active')
		}
	})
)