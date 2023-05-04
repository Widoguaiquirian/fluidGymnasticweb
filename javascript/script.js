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
