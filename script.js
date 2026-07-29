$('.skills_logos').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});


var typed2 = new Typed('#Web_developer', {
    strings: ['Web Designer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    loop: true
});


