$(function () {

  $('.hamburger').on('click', function () {
    $('#navi').fadeToggle();
    $(this).toggleClass('active');
  });

  $('.navi-fade').on('click', function () {
    $('#navi').fadeOut();

    if ($('.hamburger').hasClass('active')) {
      $('.hamburger').removeClass('active');
    };
  });


  $(window).scroll(function () {
    const windowHeight = $(this).height();
    const scroll = $(window).scrollTop();

    $('#fade-online').each(function () {
      const targetPosition = $(this).offset().top;

      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('fade-left')
      };
    });

    $('#fade-teacher').each(function () {
      const targetPosition = $(this).offset().top;

      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('fade-right');
      };
    });

    $('.student-data').each(function () {
      const targetPosition = $(this).offset().top;

      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('card');
      };
    });

    $('.student-data-2').each(function () {
      const targetPosition = $(this).offset().top;

      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('card');
      };
    });
  });
});