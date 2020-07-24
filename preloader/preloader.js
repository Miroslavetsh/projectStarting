let images = document.images,
	imagesQuantity = images.length,
	imagesLoaded = 0
const preloader = $(".preloader"),

for (let i = 0; i < imagesQuantity; i++) {
	imageClone = new Image()
	imageClone.onload = imageLoaded
	imageClone.onerror = imageLoaded
	imageClone.src = images[i].src
}

function loading() {
	if (!preloader.hasClass("done")){
		preloader.addClass("done")
	}
}

function imageLoaded() {
	let scale = (((4 / imagesQuantity) * imagesLoaded) << 0)

	imagesLoaded++

	loader.css({
		"transform" : `scale(${scale})`
	})

	if (imagesLoaded >= imagesQuantity) {
		loading()
	}
}