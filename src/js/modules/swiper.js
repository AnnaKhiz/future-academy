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
            1100: {
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

export function dragPosition() {
    document.addEventListener('DOMContentLoaded', () => {
        const dragElem = document.querySelector('#scrollbar-drag>.swiper-scrollbar-drag');
        dragElem.style.transform = 'translate3d(0px, 0px, 0px)';
    })
}

export function setBgSize() {
    const sectionFeedback = document.getElementById('feedback-section');
    const before = document.querySelector('.main__index-feedback:before');
    console.log(before)
}