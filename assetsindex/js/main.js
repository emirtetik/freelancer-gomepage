AOS.init();

$(document).ready(function() {

    $(document).ready(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                $(".navigation").addClass("fixed");
            } else {
                $(".navigation").removeClass("fixed");
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
            on: {
                slideChange: function() {
                    if (swiper.activeIndex == 0) {
                        $('.navigation').removeClass("blackheader");
                        $('.mainsslider').removeClass("sliderwhite");
                        $('.mainsslider').removeClass("sliderblack");
                        $('.slidertextstitle').removeClass("animated");
                        $('.slidertextstitle').addClass("animated");
                        $('.mainsslider').addClass("sliderblack");
                    }
                    if (swiper.activeIndex == 1) {
                        $('.navigation').removeClass("blackheader");
                        $('.mainsslider').removeClass("sliderblack");
                        $('.slidertextstitle').removeClass("animated");
                        $('.slidertextstitle').addClass("animated");
                        $('.mainsslider').removeClass("sliderwhite");
                        $('.mainsslider').addClass("sliderwhite");
                    }
                    if (swiper.activeIndex == 2) {
                        $('.navigation').removeClass("blackheader");
                        $('.mainsslider').removeClass("sliderblack");
                        $('.slidertextstitle').removeClass("animated");
                        $('.slidertextstitle').addClass("animated");
                        $('.mainsslider').removeClass("sliderwhite");

                        $('.mainsslider').addClass("sliderwhite");
                    }
                    if (swiper.activeIndex == 3) {
                        $('.navigation').removeClass("blackheader");
                        $('.navigation').addClass("blackheader");
                        $('.mainsslider').removeClass("sliderblack");
                        $('.slidertextstitle').removeClass("animated");
                        $('.slidertextstitle').addClass("animated");
                        $('.mainsslider').removeClass("sliderwhite");

                        $('.mainsslider').addClass("sliderblack");
                    }
                    if (swiper.activeIndex == 4) {
                        $('.navigation').removeClass("blackheader");
                        $('.mainsslider').removeClass("sliderblack");
                        $('.slidertextstitle').removeClass("animated");
                        $('.slidertextstitle').addClass("animated");
                        $('.mainsslider').removeClass("sliderwhite");

                        $('.mainsslider').addClass("sliderwhite");
                    }
                }
            },

        });
    });

    var menu = ['Probing', 'CAD Tasarımı', 'Freze', 'Torna', 'Mill Turn', 'Lazer, Plazma ve Su Jeti', 'Tel Erezyon', 'BobART']
    var mySwiper = new Swiper('.productswiper', {
        loop: true,
        delay: 1200,
        speed: 2000,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })



    var menu = ['V5','V6', 'V7', 'V8', 'V9', ]
    var mySwiper = new Swiper('.productswiper2', {
        loop: true,
        delay: 1200,
        speed: 2000,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    var menu = ['V30', '31', '32', '33', 'v34']
    var mySwiper = new Swiper('.productswiper3', {
        loop: true,
        delay: 1200,
        speed: 2000,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    var swiper = new Swiper(".socialswiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        allowTouchMove: false,
        spaceBetween: 30,
        slidesPerView: "3",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        delay: 2000,
        speed: 2800,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".sn-con",
            prevEl: ".sp-con",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
    var swiper = new Swiper(".indexnewsswiper", {
        centeredSlides: true,
        allowTouchMove: false,
        spaceBetween: 30,
        slidesPerView: "1",
        delay: 2000,
        speed: 2800,
        pagination: {
            el: ".swiper-paginationn",
        },
        navigation: {
            nextEl: ".swiper-button-nextt",
            prevEl: ".swiper-button-prevv",
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40
            }
        }
    });




    var activeProductIndex = 0;

    $('.product-right').click(function(e) {

        e.preventDefault();

        if (activeProductIndex == $('.top-to-bottom-slider-items li').length - 1) {

            activeProductIndex = 0

        } else {

            activeProductIndex++;

        }

        console.log(activeProductIndex);

        if (activeProductIndex == 0) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 3).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 4).addClass('secondactive');

        } else if (activeProductIndex == 1) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 3).addClass('secondactive');

        } else if (activeProductIndex == $('.top-to-bottom-slider-items li').length - 1) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 4).addClass('secondactive');

        } else if (activeProductIndex == $('.top-to-bottom-slider-items li').length - 2) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 4).addClass('secondactive');

        } else {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 2).addClass('secondactive');

        }





    })

    var activeProductIndex2 = 0;

    var activeProductIndex3 = 0;



    $('.product-right2').click(function(e) {

        e.preventDefault();

        if (activeProductIndex2 == $('.top-to-bottom-slider-items2 li').length - 1) {

            activeProductIndex2 = 0

        } else {

            activeProductIndex2++;

        }

        console.log(activeProductIndex2);

        if (activeProductIndex2 == 0) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 3).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 4).addClass('secondactive');

        } else if (activeProductIndex2 == 1) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 3).addClass('secondactive');

        } else if (activeProductIndex2 == $('.top-to-bottom-slider-items2 li').length - 1) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 4).addClass('secondactive');

        } else if (activeProductIndex2 == $('.top-to-bottom-slider-items2 li').length - 2) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 4).addClass('secondactive');

        } else {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 2).addClass('secondactive');

        }





    })

    $('.product-right3').click(function(e) {

        e.preventDefault();

        if (activeProductIndex3 == $('.top-to-bottom-slider-items3 li').length - 1) {

            activeProductIndex3 = 0

        } else {

            activeProductIndex3++;

        }

        console.log(activeProductIndex3);

        if (activeProductIndex3 == 0) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 3).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 4).addClass('secondactive');

        } else if (activeProductIndex3 == 1) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 3).addClass('secondactive');

        } else if (activeProductIndex3 == $('.top-to-bottom-slider-items3 li').length - 1) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 4).addClass('secondactive');

        } else if (activeProductIndex3 == $('.top-to-bottom-slider-items3 li').length - 2) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 4).addClass('secondactive');

        } else {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 2).addClass('secondactive');

        }





    })



    $('.product-left').click(function(e) {

        e.preventDefault();

        if (activeProductIndex == 0) {

            activeProductIndex = $('.top-to-bottom-slider-items li').length - 1;

        } else {

            activeProductIndex--;

        }

        if (activeProductIndex == 0) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 3).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 4).addClass('secondactive');

        } else if (activeProductIndex == 1) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 3).addClass('secondactive');

        } else if (activeProductIndex == $('.top-to-bottom-slider-items li').length - 1) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 4).addClass('secondactive');

        } else if (activeProductIndex == $('.top-to-bottom-slider-items li').length - 2) {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 4).addClass('secondactive');

        } else {

            $('.top-to-bottom-slider-items li').removeClass('active');

            $('.top-to-bottom-slider-items li').removeClass('firstactive');

            $('.top-to-bottom-slider-items li').removeClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex).addClass('active');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items li').eq(activeProductIndex + 2).addClass('secondactive');

        }





    })



    $('.product-left2').click(function(e) {

        e.preventDefault();

        if (activeProductIndex2 == 0) {

            activeProductIndex2 = $('.top-to-bottom-slider-items2 li').length - 1;

        } else {

            activeProductIndex2--;

        }

        if (activeProductIndex2 == 0) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 3).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 4).addClass('secondactive');

        } else if (activeProductIndex2 == 1) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 3).addClass('secondactive');

        } else if (activeProductIndex2 == $('.top-to-bottom-slider-items2 li').length - 1) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 4).addClass('secondactive');

        } else if (activeProductIndex2 == $('.top-to-bottom-slider-items2 li').length - 2) {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 4).addClass('secondactive');

        } else {

            $('.top-to-bottom-slider-items2 li').removeClass('active');

            $('.top-to-bottom-slider-items2 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items2 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2).addClass('active');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items2 li').eq(activeProductIndex2 + 2).addClass('secondactive');

        }





    })

    $('.product-left3').click(function(e) {

        e.preventDefault();

        if (activeProductIndex3 == 0) {

            activeProductIndex3 = $('.top-to-bottom-slider-items3 li').length - 1;

        } else {

            activeProductIndex3--;

        }

        if (activeProductIndex3 == 0) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 3).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 4).addClass('secondactive');

        } else if (activeProductIndex3 == 1) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 3).addClass('secondactive');

        } else if (activeProductIndex3 == $('.top-to-bottom-slider-items3 li').length - 1) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 4).addClass('secondactive');

        } else if (activeProductIndex3 == $('.top-to-bottom-slider-items3 li').length - 2) {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 3).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 4).addClass('secondactive');

        } else {

            $('.top-to-bottom-slider-items3 li').removeClass('active');

            $('.top-to-bottom-slider-items3 li').removeClass('firstactive');

            $('.top-to-bottom-slider-items3 li').removeClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 2).addClass('secondactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 - 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3).addClass('active');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 1).addClass('firstactive');

            $('.top-to-bottom-slider-items3 li').eq(activeProductIndex3 + 2).addClass('secondactive');

        }





    })

})


