// Jquery methods

// initialize owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {          // Breakpoints
        0: {
            items: 1       // 1 item on mobile
        },
        600: {
            items: 2       // 3 items on tablets
        },
        1000: {
            items: 5       // 5 items on desktop
        }
    }
});