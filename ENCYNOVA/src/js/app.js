import * as Func from "./modules/functions.js";


Func.isWebp();

// import Swiper, { Navigation, Pagination } from "swiper";
// const swiper = new Swiper();

$(document).ready(function(){
   $('.Meet-talented-attorneys__slaider').slick({
      infinite: true,
      // slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      arrows: true,
      dots: true,
      dotsClass: 'Meet-talented-attorneys__dot',
      centerMode: true,
      appendArrows: $('.Meet-talented-attorneys__arrows'),
      appendDots: $('.Meet-talented-attorneys__dots'),
      prevArrow: $('.Meet-talented-attorneys__arr-n'),
      nextArrow: $('.Meet-talented-attorneys__arr-v'),
      // centerPadding: '50px',
      variableWidth: true,
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 1110,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 1070,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }]
   });
});


$(document).ready(function(){
   $('.block-header__burger').click(function(event){
      console.log('ff');
      $('.block-header__burger,.block-header__nav-menu').toggleClass('active');
   });
});