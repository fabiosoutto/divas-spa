$('section.slider .slider-container').slick({
    dots: false,
    arrows:false,
    infinite: false,
    speed:1000,
    slidesToShow: 16,
    autoplay: true,
    centerMode:false,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: 
    [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
});


