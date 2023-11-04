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
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1130: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            1601: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });
}