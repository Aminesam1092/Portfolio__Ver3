const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    effect: "fade",
    loop: true,


    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false,
        loop: true,
    },
});