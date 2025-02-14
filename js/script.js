// const aLinks = document.querySelector("a:link");
// aLinks.forEach(function (link) {
// link.addEventListener("click", function (e) {
// e.preventDefault();
// const href = link.getAttribute("href");
// console.log(href);

// if (href !== "#" && href.startsWith("#")) {
//   const sectionEl = document.querySelector(href);
//   sectionEl.scrollIntoView({ behavior: "smooth" });
// }
// });
// });

// Sticky Navigation
// const sectionHeroEl = document.querySelector(".section-hero");

// const navMenuEl = document.querySelector("nav-mobile");
// const headerEl = document.querySelector("header");
// // for click event
// navMenuEl.addEventListerner("click", function () {
//   headerEl.classList.toggle(".nav-open");
//  });

const navToggle = document.querySelector(".header__nav-btn");
const navList = document.querySelector(".header__nav-list");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("nav-open");
  navToggle.classList.toggle("nav-open");
});

const hero = document.querySelector('.hero-section');

const obs = new IntersectionObserver(
  function () {
    
  }
)