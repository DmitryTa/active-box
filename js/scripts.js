
$(document).ready(function(){
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('.page-header').addClass('fixed');
        } else {
            $('.page-header').removeClass('fixed');
        }
    });

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    pauseOnHover: false,
	speed: 800,
	fade: true,
	cssEase: 'linear'
  });

  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 2000);

    });
});
   
   $('body').scrollspy({
    target: '.navbar-fixed-top'
})

   var sections = $('section')
        nav = $('nav[class="main-nav"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 76
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
            id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
      return false;
    });