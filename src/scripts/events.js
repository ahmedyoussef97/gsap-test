var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  autoplay: {
    autoplay: true,
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
    },

  },
});
