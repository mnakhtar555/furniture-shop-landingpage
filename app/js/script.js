// $('.box-1')
// .not('.slick-intialized')
// .slick({
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: false,
//     button: false
// });
(function($){
    $('.menu_icon').on('click', function(){
        if( $('.overlay').hasClass('open')){
            $('.overlay').removeClass('open');
            $('.mobile-menu').removeClass('open');
        }else{
            $('.overlay').addClass('open');
            $('.mobile-menu').addClass('open');
        }
    })
})(jQuery);