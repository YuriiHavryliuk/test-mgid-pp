'use strict';

//slider implementation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("js-slide");
    var dots = document.getElementsByClassName("js-slider-dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        (dots[i].classList.remove('active'));
    }
    for (i = 0; i < dots; i++) {
        dots[i].className = dots[i].className.replace("active", "a");
    }
    slides[slideIndex - 1].style.display = "block";
    (dots[slideIndex - 1].classList.add('active'));
}

//implementation of scrolls for forms
(function ($, window, document) {
    $(".js-scroll").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('html').removeClass('menu-open');
        $('.js-menu-trigger').removeClass('menu-m__close');
        $('body,html').animate({scrollTop: top}, 1000);
    });


    //implementation of the scroll in the select
    $(".js-sel").selectWidget({
        change: function (changes) {
            return changes;
        },
        effect: "slide",
        keyControl: true,
        speed: 200,
        scrollHeight: 140
    });

    //implementation of bar
    var scrolled = false;
    $(window).scroll(function(){
        if (!scrolled) {
            if ($(window).scrollTop() > 200) {
                scrolled = true;
                jQuery('.js-skillbar').each(function () {
                    jQuery(this).find('.js-skillbar__bar').animate({
                        width: jQuery(this).attr('data-percent')
                    }, 4000);
                });
            }


        }
    });


//Implementation of adaptive menu
    $(function () {
        menu.init();
    });

    var menu = {
        $el: $('.js-menu'),
        triggerClass: '.js-menu-trigger',
        init: function () {
            if (!this.$el.length) return;
            $(this.triggerClass).on('click', this.toggle);
            this.clone();
        },
        toggle: function () {
            $('html').toggleClass('menu-open');
            $('.js-menu-trigger').toggleClass('menu-m__close');
        },
        clone: function () {

            var arr = $(".js-menu-item").sort(function (a, b) {
                return ($(a).data('menu-order') - $(b).data('menu-order'));
            });

            $(arr).clone(true).removeClass('mobile-hide').addClass('menu-m__item').appendTo('.menu-m .container')

        }
    };

}(window.jQuery, window, document));


//Copyrighting year of footer
var year = new Date().getFullYear();
document.getElementById('footer__year').innerHTML = year;


