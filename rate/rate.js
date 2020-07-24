const ratingItemsList = document.querySelectorAll('.rating__item')
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList)

ratingItemsArray.forEach(item => {
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset // value for backend
		item.parentNode.dataset.totalValue = itemValue
	});
})