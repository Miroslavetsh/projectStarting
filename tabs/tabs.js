// JavaScript


document.querySelectorAll('.tabs__trigger').forEach((item) => 
	item.addEventListener('click', function (event) {
		event.preventDefault();
		const id = event.target.getAttribute('href').replace('#', '')

		document.querySelectorAll('.tabs__trigger').forEach(
			(child) => child.classList.remove('tabs__trigger--active')
		)
		document.querySelectorAll('.tabs__item').forEach(
			(child) => child.classList.remove('tabs__item--active')
		)
		item.classList.add('tabs__trigger--active')
		document.getElementById(id).classList.add('tabs__item--active')
	})
)
document.querySelector('.tabs__trigger').click()



// jQuery


// $(document).ready(function () {
// 	$('.tabs__trigger').click(function (event) {
// 		event.preventDefault();

// 		$('.tabs__trigger').removeClass('tabs__trigger--active');
// 		$('.tabs__item').removeClass('tabs__item--active');

// 		$(this).addClass('tabs__trigger--active');
// 		$($(this).attr('href')).addClass('tabs__item--active');
// 	});

// 	$('.tabs__trigger:first').click();
// });
