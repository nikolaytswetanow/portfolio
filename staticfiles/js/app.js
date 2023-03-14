(function ($) {

    "use strict";

    /* *********************************************************
        Easy selector function
    ********************************************************* */

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /* *********************************************************
        Preloader
    ********************************************************* */

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    /* *********************************************************
        Close navbar on click
    ********************************************************* */

    $(document).on('click', function () {
        $('.collapse').collapse('hide');
    })

    ScrollReveal({
        distance: '150px',
        duration: 1500,
        delay: 400
    })

    ScrollReveal().reveal('.home-title', { delay: 500, origin: 'right' });
    ScrollReveal().reveal('.home-p', { delay: 500, origin: 'left' });
    ScrollReveal({ duration: 1200, distance: '50px' }).reveal('.aboutme-title', { delay: 200, origin: 'top' });
    ScrollReveal({ duration: 1200, distance: '150px' }).reveal('.aboutme', { delay: 200, origin: 'bottom' });

    ScrollReveal({ duration: 1200, distance: '350px' }).reveal('.left', { delay: 200, origin: 'left' });
    ScrollReveal({ duration: 1200, distance: '350px' }).reveal('.right', { delay: 200, origin: 'right' });
    ScrollReveal({ duration: 1200, distance: '350px' }).reveal('.bot', { delay: 200, origin: 'bottom' });
    ScrollReveal({ duration: 1200, distance: '50px' }).reveal('.top', { delay: 200, origin: 'top' });

    //Reset scroll top

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

}(jQuery))
