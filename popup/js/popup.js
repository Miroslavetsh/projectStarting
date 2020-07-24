const popupLinks = document.querySelectorAll('.popup__link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock__padding')

let unlock = true

const timeout = 800

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i]
		popupLink.addEventListener('click', function(event) {
			event.preventDefault()

			const popupName = popupLink.getAttribute('href').replace('#', '')
			const currentPopup = document.querySelector('#popup')
			popupOpen(currentPopup)
		})
	}
}

const popupCloseIcons = document.querySelectorAll('.close-popup')
if (popupCloseIcons.length > 0) {
	for (let i = 0; i < popupCloseIcons.length; i++) {
		const popupCloseIcon = popupCloseIcons[i]
		popupCloseIcon.addEventListener('click', function(event) {
			event.preventDefault()

			popupClose(popupCloseIcon.closest('.popup'))
		})
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.active')
		if (popupActive) {
			popupClose(popupActive, false)
		}else {
			bodyLock()
		}
		currentPopup.classList.add('active')
		currentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('popup__content')) {
				popupClose(e.target.closest('.popup'))
			}
		})
	}
	
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('active')
		if (doUnlock) {
			bodyUnlock()
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i]
			el.style.paddingRight = 16 + 'px'
		}
	}
	body.style.paddingRight = 16 + 'px'
	body.classList.add('lock')

	unlock = false
	setTimeout(function() {
		unlock = true
	}, timeout)
}

function bodyUnlock() {
	setTimeout(function() {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++) {
				const el = lockPadding[i]
				el.style.paddingRight = '0px'
			}
		}
		body.style.paddingRight = '0px'
		body.classList.remove('lock')
	}, timeout)

	unlock = false 
	setTimeout(function() {
		unlock = true
	}, timeout)
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.active')
		popupClose(popupActive)
	}
})