$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
    }
  ]
});
