// jQuery
$(document).ready(function () {

    // Open Sidemenu
    $('.menu-bar').click(function(){
        $('header nav').addClass('active');
        $('body').addClass('overflow-hidden')
    });
    
    // Close Sidemenu
    $('header nav .container > div > img').click(function(){
        $('header nav').removeClass('active');
        $('body').removeClass('overflow-hidden')
    });
    $('header nav .container > ul > li > a').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
     
    // Responsive Menu
    $('header.page-header i.fas.fa-bars').click(function(){
        $(this).next().slideToggle();
    });

    $('.project-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: 0,
        nav: true,
        navText: ['<img src="assets/images/icons/angle-left.svg" />','<img src="assets/images/icons/angle-left.svg" />']
    })
    $('.testimonial-partner-footer .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: 0,
        // nav: true,
        navText: ['<img src="assets/images/icons/angle-left.svg" />','<img src="assets/images/icons/angle-left.svg" />']
    })
});


// Custom JS
document.addEventListener('DOMContentLoaded', function () {

})