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

const navLinks = document.querySelector(".header__nav-list");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
  });
});

// function navLink() {
//   // console.log("hey")
//   const aLinks = document.getElementByClass("header__nav-list");
//   if (aLinks.style.display === "block") {
//     aLinks.style.display = "none";
//   } else {
//     aLinks.style.display = "block";
//   }
// }
