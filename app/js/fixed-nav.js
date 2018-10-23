$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.nav-bar').addClass('fixed-nav');
        $('.nav-bar__logo').addClass('fixed-nav');
        $('.nav-bar__menu-bar').addClass('fixed-nav');
    }
    else {
        $('.nav-bar').removeClass('fixed-nav');
        $('.nav-bar__logo').removeClass('fixed-nav');
        $('.nav-bar__menu-bar').removeClass('fixed-nav');
    }
});