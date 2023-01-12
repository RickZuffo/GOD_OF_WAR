var swiper = new Swiper(".slide-characters", {
    slidesPerView: 4,
    spaceBetween: 19,
    freeMode: true,  
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 19,
      },
      768: {
        slidesPerView:1.5,
        spaceBetween:19,
      },
      991:{
        slidesPerView:2.5,
        spaceBetween:19,
      },
      1200: {
        slidesPerView:3,
        spaceBetween:19,
      },
      1400: {
        slidesPerView:4,
        spaceBetween:19,
      },
    } 
  });

  AOS.init({
    duration: 2000,
    once: true,
  });

  