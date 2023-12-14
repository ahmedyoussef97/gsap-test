"use strict";



var blogSwiper = new Swiper("#blogSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    991: {
      slidesPerView: 2
    },
    550: {
      slidesPerView: 1
    }
  },
  pagination: {
    el: "#blogSwiper .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.our-blog__next-btn',
    prevEl: '.our-blog__prev-btn',
  }
});

var modulesSwiper = new Swiper("#modulesSwiper", {
  // effect: 'fade',
  // mousewheel: true,
  allowTouchMove: false,
  pagination: {
    el: "#modulesSwiper .swiper-pagination",
    clickable: true
  }
});

var modulesPaginations = document.querySelectorAll(".slider-navigator__item");
var modulesFigures = document.querySelectorAll(".our-modules__figure");
modulesPaginations.forEach(function (pagination) {
  pagination.addEventListener("click", gotoSlide);
});
function gotoSlide() {
  var slideIndex = this.getAttribute("data-slide");
  modulesSwiper.slideTo(slideIndex, 1);
}
modulesSwiper.on("slideChange", function () {
  var currentSlide = modulesSwiper.activeIndex;
  // add current class to slider navigation
  modulesPaginations.forEach(function (item) {
    item.classList.remove("slider-navigator--current");
  });
  modulesPaginations[currentSlide].classList.add("slider-navigator--current");

  // show current figure
  modulesFigures.forEach(function (item) {
    item.classList.remove("is-shown");
  });
  modulesFigures[currentSlide].classList.add("is-shown");
});

function customerCounter() {
  var customerVal = parseInt(document.querySelector("#customersVal").innerText);
  var counter = 0;
  var interval2 = setInterval(function () {
    counter++;
    document.querySelector("#customersVal").innerText = counter;
    if (counter === customerVal) clearInterval(interval2);
  }, 10);
}

// var lazyElem = document.querySelectorAll(".l-home-section");
// lazyElem.forEach(function (element) {
//   new Waypoint({
//     element: element,
//     handler: function (direction) {
//       lazyImage(element);
//     },
//     offset: "50%"
//   });
// });

///////////////
// try to use Intersection Observer API
// <img src="celebration.jpg" loading="lazy" alt="..." />
///////////////



function showDialog(cName) {
  document.querySelector('body').classList.add("u-no-overflow");
  document.querySelector('.bottom-sheet').classList.add('bottom-sheet--show');
  document.querySelectorAll('.bottom-sheet__customer').forEach(function (item) {
    if (item.getAttribute('data-cname') == cName) {
      item.classList.add('is-shown');
    }
  });
}

function closeDialog() {
  document.querySelector('body').classList.remove("u-no-overflow");
  document.querySelector('.bottom-sheet').classList.remove('bottom-sheet--show');
  document.querySelectorAll('.bottom-sheet__customer').forEach(function (item) {
    item.classList.remove('is-shown');
  });
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    closeDialog()
  }
};

document.querySelector(".bottom-sheet__backdrop").addEventListener("click", closeDialog);

// document.querySelectorAll('.highlight-feature').forEach(function (el) {
//   el.addEventListener('mouseover', function () {
//     // document.querySelector('.modules__images-wrapper').
//     var positionVal = this.getAttribute('data-position');
//     alert(positionVal);

//   });
//   el.addEventListener('mouseout', function () {
//     // alert('out')
//   });
// });


const points = document.querySelectorAll(".highlight-feature")
for (const point of points) {
  point.addEventListener('mouseover', function (event) {
    var positionVal = this.getAttribute('data-position');
    document.querySelector('.modules__images-wrapper').setAttribute('data-position', positionVal);
  });
  point.addEventListener('mouseout', function () {
    document.querySelector('.modules__images-wrapper').setAttribute('data-position', '');
  });
}