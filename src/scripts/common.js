document.querySelector(".hamburger-menu").addEventListener("click", function () {
  this.classList.toggle("hamburger-menu--open");
  document
    .querySelector(".responsive-menu")
    .classList.toggle("responsive-menu--open");
  document.querySelector("body").classList.toggle("u-no-overflow");
});


function smoothScroll(element) {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: document.querySelector(element).offsetHeight
  });
}

var lastScrollTop = 0;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > 100) {
    document.querySelector('.header').classList.add('header--scrolling');

    if (st > lastScrollTop) {
      document.querySelector('body').classList.remove('body--scrolling-up');
      document.querySelector('body').classList.add('body--scrolling-down');
    } else {
      document.querySelector('body').classList.remove('body--scrolling-down');
      document.querySelector('body').classList.add('body--scrolling-up');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  } else {
    document.querySelector('.header').classList.remove('header--scrolling');
  }
}


// window.addEventListener("scroll", function () {
//   var st = window.pageYOffset || document.documentElement.scrollTop;
//   if (st > lastScrollTop) {
//     // downscroll code
//     console.log('down');
//   } else {
//     // upscroll code
//     console.log('up');
//   }
//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);



document.addEventListener("DOMContentLoaded", function () {
  lazyImage(document);
});

// loop for lazy images

function lazyImage(element) {
  var images = element.querySelectorAll("[data-lazy]");
  var pictures = element.querySelectorAll("[data-srcset]");
  images.forEach(function (elem) {
    var imgSrc = elem.getAttribute("data-lazy");
    elem.classList.add("is-shown");
    elem.setAttribute("src", imgSrc);
  });
  pictures.forEach(function (elem) {
    var imgSrc = elem.getAttribute("data-srcset");
    elem.classList.add("is-shown");
    elem.setAttribute("srcset", imgSrc);
  });
}