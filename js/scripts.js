/*!
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

const today = new Date();
var date_to_reply = new Date('2018-06-09');
var timeinmilisec = today.getTime() - date_to_reply.getTime() ;
const numOfDays = Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Update Duolingo day count
    const duolingoCounter = document.body.querySelector("#duolingo-counter")
    duolingoCounter.innerHTML = numOfDays

    document.body.querySelector("#carousel-craft").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');

        },
        allowPageScroll:"vertical"
      });
});
