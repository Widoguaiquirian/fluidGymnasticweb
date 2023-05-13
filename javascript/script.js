"use strict";

// Modals
const header = document.querySelector(".header");
const hamburguerMenu = document.querySelector(".header__menu");

hamburguerMenu.addEventListener("click", function () {
   header.classList.toggle("open");
});

// Dark theme
const checkbox = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;

checkbox.addEventListener("change", function () {
   if (checkbox.checked) {
      htmlElement.setAttribute("data-theme", "dark");
   } else {
      htmlElement.setAttribute("data-theme", "light");
   }
});

// Testimonials functionality
const slides = document.querySelector(".testimonials__content--slider").children;
const indicatorImgs = document.querySelector(".testimonials__content--indicator").children;

for (let i = 0; i < indicatorImgs.length; i++) {
   indicatorImgs[i].addEventListener("click", function () {
      console.log(indicatorImgs);
      // console.log(this.getAttribute("data-id"));
      // Gettnig the slide images
      for (let j = 0; j < indicatorImgs.length; j++) {
         indicatorImgs[j].classList.remove("active");
      }

      this.classList.add("active");

      // Getting the next slide
      const id = this.getAttribute("data-id");
      for (let k = 0; k < slides.length; k++) {
         slides[k].classList.remove("active");
      }

      slides[id].classList.add("active");
   });
}
