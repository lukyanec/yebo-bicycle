'use strict';

document.addEventListener("DOMContentLoaded", function () {

	const headerFn = () => {
	  const header = document.querySelector('.header');
	  pageYOffset > 0 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
	}
	window.addEventListener('scroll', headerFn);
	const mySwiper = new Swiper('.swiper-container', {
	  loop: true,
	  spaceBetween: 40,
	  grabCursor: true,
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	})
	$(document).on('click', 'a[href^="#"]', function (event) {
	  event.preventDefault();
	
	  $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top - 84
	  }, 500);
	});
	function animFn() {
	
	  if (window.matchMedia("(min-width: 992px)").matches) {
	    const tl = gsap.timeline();
	    tl
	      .from('.section_hero', {
	        autoAlpha: 0,
	        delay: 0.2,
	        duration: .8
	      })
	      .from('.header', {
	        y: '-100%',
	        autoAlpha: 0,
	        ease: 'power4'
	      })
	      .from('.section_grey .section__in', {
	        autoAlpha: 0,
	        duration: .1,
	        y: 100,
	        scrollTrigger: {
	          trigger: '.section_grey',
	          start: 'top bottom',
	          end: 'top center',
	          scrub: 1,
	        }
	      })
	      .from('.section_work ul li', {
	        stagger: .1,
	        duration: .8,
	        autoAlpha: 0,
	        y: 250,
	        scrollTrigger: {
	          trigger: '.section_work',
	          start: 'top bottom',
	          end: 'center center',
	          scrub: 1,
	        }
	      })
	      .from('.section_shop__grid div', {
	        stagger: .1,
	        duration: 1,
	        autoAlpha: 0,
	        x: 250,
	        scrollTrigger: {
	          trigger: '.section_shop',
	          start: 'top bottom',
	          end: 'top center',
	          scrub: 1,
	        }
	      })
	      .from('.section_shop__black', {
	        y: 100,
	        scrollTrigger: {
	          trigger: '.section_shop',
	          start: 'top center',
	          end: 'bottom center',
	          scrub: 1,
	        }
	      })
	      .from('.footer', {
	        y: 200,
	        scrollTrigger: {
	          trigger: '.main',
	          start: 'bottom bottom',
	          end: 'bottom bottom',
	
	        }
	      });
	  }
	}
	animFn()

});