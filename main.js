function addClass() {

    const scrollValue = $(window).scrollTop();

    const height1 = Math.floor($('#s1').offset().top - 1);
    const height2 = Math.floor($('#s2').offset().top - 1);
    const height3 = Math.floor($('#s3').offset().top - 1);
    const height4 = Math.floor($('#s4').offset().top - 1);
    const height5 = Math.floor($('#s5').offset().top - 1);

    if (scrollValue <= height2) {
        $(".menu__link").not('#nav1').removeClass("active")
        $('#nav1').addClass('active');
    } else if (scrollValue <= height3) {
        $(".menu__link").not('#nav2').removeClass("active")
        $('#nav2').addClass('active');
    } else if (scrollValue <= height4) {
        $(".menu__link").not('#nav3').removeClass("active")
        $('#nav3').addClass('active');
    } else if (scrollValue <= height5) {
        $(".menu__link").not('#nav4').removeClass("active")
        $('#nav4').addClass('active');
    } else {
        $(".menu__link").not('#nav5').removeClass("active")
        $('#nav5').addClass('active');
    }
}

$(window).on('scroll', addClass)