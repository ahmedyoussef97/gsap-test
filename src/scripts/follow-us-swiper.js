var menu = ['Morocco', 'Sudan', 'Philippines', 'Pakistan', 'Syria', 'Iraq', 'Egypt', 'Turkey', 'Somalia', 'Tunisia', 'Tunisia', 'Iran', 'India', 'Palestine']
$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 16,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: false,
    loopAdditionalSlides: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        console.log(index, className);
        return '<span class="' + className + '">' + (menu[index]) + "</span>";
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
  });
});
