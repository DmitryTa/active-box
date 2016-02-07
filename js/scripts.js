
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


    $('.gallery__item').waypoint(function() {
        $('.gallery__item').addClass('gallery__item-animation');
    }, {
        offset: '70%'
    });
    $('.call-to-action').waypoint(function() {
        $('.call-to-action .btn').addClass('btn-animation');
    }, {
        offset: '75%'
    });


var mobileButton = document.getElementById('mobileButton');
var mobileNav = document.getElementById('mobile-menu');
mobileButton.onclick = function(e) {
  e.preventDefault();
  mobileButton.classList.toggle('active-icon');
  mobileNav.classList.toggle('mobile-nav');
}
nav.find('a').on('click', function() {
        $('#mobile-menu').toggleClass('mobile-nav');
        mobileButton.classList.toggle('active-icon');
    });
});