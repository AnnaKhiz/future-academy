export function swipeIndexSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        // autoplay: true
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });
}