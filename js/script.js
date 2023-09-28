"use strict";

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

[navCloseBtn, overlay, navOpenBtn].forEach((el) => {
  el.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

// toggle navbar & overlay when any nav link is clicked

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});
