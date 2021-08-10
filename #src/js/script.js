@@include('webp.js');

window.onload = function () {
	console.log('Hi everybody')
	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)

	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('search-form__icon') || targetElement.classList.contains('svg')) {
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active')
		}
		if (targetElement.classList.contains('icon-menu')) {
			document.querySelector('.menu__body').classList.toggle('_active');
			document.body.classList.toggle('_lock');
			document.querySelector('.icon-menu').classList.toggle('_active');
		}

		if (targetElement.classList.contains('burger-line')) {
			document.querySelector('.icon-menu').classList.toggle('_active');
			document.querySelector('.menu__body').classList.toggle('_active');
			document.body.classList.toggle('_lock');
		}

		if (targetElement.classList.contains('menu__body') || targetElement.classList.contains('menu__list') || targetElement.classList.contains('menu__item')) {
			document.querySelector('.icon-menu').classList.remove('_active');
			document.querySelector('.menu__body').classList.remove('_active');
			document.body.classList.remove('_lock');

		}
	}

	/* @media landscpae*/
	var mql = window.matchMedia('(orientation: landscape)');

	function screenTest(e) {
		if (e.matches) {
			document.querySelector('.icon-menu').classList.remove('_active');
			document.querySelector('.menu__body').classList.remove('_active');
			document.body.classList.remove('_lock');


		} else {

		}
	}
	mql.addEventListener('change', screenTest);


	$(function () {
		let header = $('.header__wrapper');
		let height = $('.header__body');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				header.addClass('header__color');
				height.css({
					'min-height': '70px',
				});
			} else {
				header.removeClass('header__color');
				height.css({
					'min-height': '',
				});
			}
		});
	});


	$(function () {
		$('.contact__form').on('submit', function (e) {
			var self = this; //Keep a reference to the form that was submitted
			e.preventDefault();
			$.ajax({
				url: $(this).attr('action'),
				method: $(this).attr('method'),
				data: $(this).serialize(),
				success: function () {
					$(self).hide(); //Hide the form if the request was successful 
				},
				error: function () { alert('Failed to send email'); }
			});
			$('.contact__thanks').css({
				'display': 'block',
				'margin-top': '45px'
			})

		});
	});

	$('a[href^="#"').on('click', function () {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		});
		return false;
	});
	function locationHashChanged() {
		if (location.hash) {
			var hash = location.hash.replace(/#/, '');
			history.replaceState({}, '', hash)
		}
	}

	window.onhashchange = locationHashChanged;

}


