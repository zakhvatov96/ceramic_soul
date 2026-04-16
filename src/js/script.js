import Swiper from 'swiper';
import {
	Navigation,
	Pagination
} from 'swiper/modules';
import JustValidate from 'just-validate';


import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "/src/sass/style.scss";

const burger = document.querySelector('.burger'),
	menu = document.querySelector('.header__menu'),
	close = document.querySelector('.header__menu-close');

burger.addEventListener('click', () => {
	menu.classList.add('header__menu_active');
	document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
	menu.classList.remove('header__menu_active');
	document.body.style.overflow = '';
})


try {
	const swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.icon-right-open',
			prevEl: '.icon-left-open',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 5
			},
			1920: {
				slidesPerView: 3,
				spaceBetween: 35
			},
		},
		modules: [Navigation, Pagination],
	});
} catch (e) {}

try {
	const tabs = document.querySelectorAll('.catalog__tab'),
		contents = document.querySelectorAll('.catalog__item');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach((t) => t.classList.remove('catalog__tab_active'));
			contents.forEach((c) => c.style.display = 'none');

			tab.classList.add('catalog__tab_active');
			contents[index].style.display = 'flex';
		})

	})

	contents.forEach((c, i) => c.style.display = i === 0 ? 'flex' : 'none');
} catch (e) {}

try {
	const validator = new JustValidate('.git__form');

	validator
		.addField('#name', [{
				rule: 'required',
				errorMessage: 'Name is required'
			},
			{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Name must contain a minimum of 2 characters'

			},

		])
		.addField('#email', [{
				rule: 'required',
				errorMessage: 'Email is required'
			},
			{
				rule: 'email',
			},
		])
		.addField('#question', [{
				rule: 'required',
				errorMessage: 'Question is required'
			},
			{
				rule: 'minLength',
				value: 5,
				errorMessage: 'Question must contain a minimum of 5 characters'
			},
		], {
			errorsContainer: document.querySelector('#question').parentElement.querySelector('.error-message')
		})
		.addField('#checkbox', [{
			rule: 'required',
			errorMessage: 'Agree with the terms'
		}, ], {
			errorsContainer: document.querySelector('#checkbox').parentElement.parentElement.querySelector('.checkbox-error-message')
		})
} catch (e) {}

try {
	const footerValidator = new JustValidate('.footer__form');

	footerValidator
		.addField('#footer-email', [{
				rule: 'required',
				errorMessage: 'Email is required'
			},
			{
				rule: 'email',
			},
		], {
			errorsContainer: document.querySelector('#footer-email').parentElement.querySelector('.footer-error-message')
		})
		.addField('#footer-checkbox', [{
			rule: 'required',
			errorMessage: 'Agree with the terms'
		}, ], {
			errorsContainer: document.querySelector('#footer-checkbox').parentElement.parentElement.querySelector('.footer-checkbox-error-message')
		})
} catch (e) {}