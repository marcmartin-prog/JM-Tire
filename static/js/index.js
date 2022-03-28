//jshint esversion: 6

//mobile menu code

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.menu-close');
const menuItems = document.querySelector('.menu-item');

function menuOpen (){
  mobileMenu.style.height = "100vh";
  mobileMenu.style.width = "100vw";
  mobileMenu.style.opacity = "1";
  mobileMenu.style.zIndex = "21";
}

function menuClose (){
  mobileMenu.style.height ="0";
  mobileMenu.style.width ="0";
  mobileMenu.style.opacity = "0";
  mobileMenu.style.zIndex = "0";
}

hamburger.addEventListener('click', menuOpen);

menuCloseButton.addEventListener('click', menuClose);

menuItems.addEventListener('click', menuClose);

const dropdown = document.querySelector('#dropdown');
const dropdownEl = document.querySelector('#dropdown-element');

dropdown.addEventListener('click', function(){
  if(dropdownEl.style.display == 'block'){
    dropdownEl.style.display = 'none';
  }else{
    dropdownEl.style.display = 'block';
  }
});

const dropdownDT = document.querySelector('#dropdown-dt');
const dropdownElDT = document.querySelector('#dropdown-element-dt');

dropdownDT.addEventListener('click', function(){
  if(dropdownElDT.style.display == 'flex'){
    dropdownElDT.style.display = 'none';
  }else{
    dropdownElDT.style.display = 'flex';
  }
});

//reviews slider code
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const slider = document.querySelector('.reviews-slider');
const review = document.querySelector('.review');
const scrollByWidth = review.clientWidth;

leftArrow.addEventListener('click', function(){
  slider.scrollBy({left: -scrollByWidth, top: 0, behavior: 'smooth'});
});

rightArrow.addEventListener('click', function(){
  slider.scrollBy({left: scrollByWidth, top: 0, behavior: 'smooth'});
});




//star rating code
/*const review = document.querySelectorAll('.review');
const rating = review
review.forEach(addStars);
*/

// Load this script after everything else (document is ready)
document.addEventListener("DOMContentLoaded", function(event) {

	// This is the actual script
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		$$('img').forEach(ele => {
			src = ele.src;
			if(src.includes('webp')) {
				src = src.replace('.webp', '.jpg');
				ele.src = src;
			}
		});
	}

});
