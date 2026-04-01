import Swiper from 'swiper';
import {
	Navigation,
	Pagination
} from 'swiper/modules';


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