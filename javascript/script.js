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

// Scroll button
const scroll = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
   scroll.classList.toggle("active", window.scrollY > 200);
});

// Form register section
// First page
const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");
// Second page
const firtsPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");
// Third page
const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");
// Forth page
const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

// progress Step
const progressStep = document.querySelectorAll(".register__progress--step");

// Progress number (the span elements)
const progressNumber = document.querySelectorAll(".register__progress--step span");

// Progress tick mark
const progressNumberTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

// Next button event listener function
function tick() {
   progressStep[current - 1].classList.add("active");
   progressNumber[current - 1].classList.add("active");
   progressNumberTick[current - 1].classList.add("active");
   current += 1;
}

// Previous button event listener function
function untick() {
   progressStep[current - 2].classList.remove("active");
   progressNumber[current - 2].classList.remove("active");
   progressNumberTick[current - 2].classList.remove("active");
   current -= 1;
}

// Buttons
// First next button Event Listen er
firstNextBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "-33%";
   tick();
});

// Second next button Event Listen er
secondNextBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "-100%";
   tick();
});

// Third next button Event Listen er
thirdNextBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "-200%";
   tick();
});

// Submit button
submitBtn.addEventListener("click", function () {
   tick();
   setTimeout(() => {
      alert("Your form has been successfully submitted, thank you my friend");
      location.reload();
   }, 1000);
});

// first prev button
firtsPrevBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "0";
   untick();
});

// Second prev button
secondPrevBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "-33%";
   untick();
});

// third prev button
thirdPrevBtn.addEventListener("click", function () {
   slidePage.style.marginLeft = "-100%";
   untick();
});
