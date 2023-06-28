"use strict";
document.addEventListener("DOMContentLoaded", () =>{

	const menu = document.querySelector(".nav__menu"),
          menuIcon = document.querySelector(".menu-icon"),
          menuCrossIcon = document.querySelector(".nav__menu-cross"),
          overlay = document.querySelector('.nav__overlay'),
		  header = document.querySelector('header'),
		  agent = document.querySelector('#agent'),
		  manager = document.querySelector('#manager');


	// Слайдер
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		parallax: true,
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 20,
		autoplay: {
			delay: 15000,
			},
		navigation : {
				enabled: false,
			},
		pagination: {
			el: '.swiper-pagination',
		  },
		breakpoints: {
			993: {
				slidesPerView: 3,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					enabled: true
				}
			}
		}
	});

	// меню
	menuIcon.addEventListener('click', e => {
		menu.classList.toggle('nav__menu_activ');
		overlay.classList.toggle('nav__overlay_show');
	})

	menuCrossIcon.addEventListener('click', e =>{
		menu.classList.toggle('nav__menu_activ');
		overlay.classList.toggle('nav__overlay_show');
	})

	document.addEventListener('click', e =>{
		if(e.target && e.target.classList.contains('nav__overlay')){
			menu.classList.toggle('nav__menu_activ');
			overlay.classList.toggle('nav__overlay_show');
		}
	})

	menu.querySelectorAll("a").forEach(a =>{
		a.addEventListener("click", ()=>{
			menu.classList.toggle('nav__menu_activ');
			overlay.classList.toggle('nav__overlay_show');
		})
	})
});
