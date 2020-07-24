// jQuery

// $(document).ready(function() {
// 	let position = 0;
// 	const slidesToShow = 3;
// 	const slidesToScroll = 2;
// 	const container = $('.slider__container');
// 	const track = $('.slider__track');
// 	const item = $('.slider__item');
// 	const itemsCount = item.length;
// 	const btnPrev = $('.button__prev');
// 	const btnNext = $('.button__next');
// 	const itemWidth = container.width() / slidesToShow;
// 	const movePosition = slidesToScroll * itemWidth

// 	item.each(function (index, item) {
// 		$(item).css({
// 			minWidth: itemWidth,
// 		});
// 	});

// 	btnPrev.click(function() {
// 		const itemsLeft = Math.abs(position) / itemWidth;
// 		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

// 		setPosition();
// 		checkBtn();
// 	});

// 	btnNext.click(function() {
// 		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
// 		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

// 		setPosition();
// 		checkBtn();
// 	})

// 	const setPosition = () => {
// 		track.css({
// 			transform: `translateX(${position}px)`
// 		})
// 	}

// 	const checkBtn = () => {
// 		btnPrev.prop('disabled', position === 0);
// 		btnNext.prop('disabled', 
// 			position <= -(itemsCount - slidesToShow) * itemWidth
// 		);
// 	}

// 	checkBtn();
// });



// Javascript

let position = 0
const slidesToShow = 3
const slidesToScroll = 2
const container = document.querySelector('.slider__container')
const track = document.querySelector('.slider__track')
const btnPrev = document.querySelector('.button__prev')
const btnNext = document.querySelector('.button__next')
const items = document.querySelectorAll('.slider__item')
const itemsCount = items.length
const itemWidth = container.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`
})

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

	setPosition()
	checkBtn()
})

btnNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

	setPosition()
	checkBtn()
})

const setPosition = () => track.style.transform =`translateX(${position}px)`
const checkBtn = () => {
	btnPrev.disabled =  position === 0
	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}

checkBtn()