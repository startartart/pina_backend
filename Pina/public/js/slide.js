var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});