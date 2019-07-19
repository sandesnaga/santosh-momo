/*preloader*/
$(window).on('load', function () {
    $('#status').fadeOut(); //make sure that whole iste is loaded
    $('#preloader').delay(350).fadeOut('slow');

});
/*===============================
Team section
======================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 and up

            0: {
                items: 1
            },
            //breakpoint from 480 and up
            480: {
                items: 2
            }
        }
    });

});
/*=============================================
progress bars
===============================================*/
$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/*=============================================
responsive tabs
===============================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'


    });

});
/*=============================================
portfilio
===============================================*/
$(window).on('load', function () {
    //Initalize isotope
    $("#isotope-container").isotope({

    });
    //Filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active buttom
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*=============================================
Magnifier
===============================================*/

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*=============================================
Testimonials
===============================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

});

/*=============================================
stats
===============================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*=============================================
Clients

===============================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autopla: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i classs="fa fa-angel-left"></i>', '<i class="fa fa-angel-right"></i>'],
        responsive: {
            //breakpoint from 0 and up

            0: {
                items: 2
            },
            //breakpoint from 480 and up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 6
            }
        }

    });
});
/*=============================================
google map
===============================================*/

$(window).on('load', function () {
    //These are variable for google map
    var addressString = "Santosh MoMo, Bhaktapur Rd, Bhaktapur 44800, Nepal";
    var myLatlnng = {
        lat: 27.666166,
        lng: 85.425752
    };

    //1. Render google map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatlnng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlnng,
        map: map,
        title: "Santosh Naga"
    });
    //3. Add info window

    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    // 4. show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    //5. Resize Function for google map
    google.maps.event.addDomListner(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');

    });
});

/*=============================================
show and hide white navigation
===============================================*/
$(function () {

    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        //show/hide nav on page load
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            //show white nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //show back to top button 
            $("#back-to-top").fadeIn();



        } else {

            //hide white nav
            $("nav").removeClass("white-nav-top");

            //show w
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //hide back to top button 
            $("#back-to-top").fadeOut();

        }

    }
});

/*=============================================
smooth crolling
===============================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();


        // get section id like #about, # servie #work, #teamd and etc

        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });


});

/*=============================================
Mobile Menu
===============================================*/
$(function () {
    // show mobile navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});
/*=============================================
Animation
===============================================*/

/* animate on scroll*/
$(function () {    
    new WOW().init();
});
//home animation on page load

$(window).on('load', function () {
   $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft"); 
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("arrow-down i").addClass("animated fadeInDown infinite")
    
});













































