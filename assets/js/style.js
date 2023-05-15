$(document).ready(function() {
    var swiper = new Swiper(".newsslider", {
        spaceBetween: 3,
        autoplay: {
            delay: 12000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        allowTouchMove: false,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });
    var swiper = new Swiper(".mySwiper2", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        allowTouchMove: false,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });
    var swiper = new Swiper(".mySwiper3", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        allowTouchMove: false,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });
});