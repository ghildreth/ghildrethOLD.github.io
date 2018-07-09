;(function($){
    "use strict";
    
    var nav_offset_top = $('.navbar').height(); 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('header').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".navbar").addClass("navbar_fixed");
                } else {
                    $(".navbar").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    /*---------------navbar js ---------------*/
    $('nav li a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 85
        }, 1500);
        event.preventDefault();
    });
    
    
    /*--------------- counter js--------*/
    /* Counter Js */
    function counterUp(){
        if ( $('.counter').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };  
    counterUp();
    
    /*---------gallery isotope js-----------*/
    function galleryMasonry(){
        if ( $('.grid').length ){
            $('.grid').imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                $(".grid").isotope({
                    itemSelector: ".grid-item",
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                // Add isotope click function
                $(".portfolio_menu li").on('click',function(){
                    $(".portfolio_menu li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $(".grid").isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    galleryMasonry();
    
    
    /*----------- partnerslider js------------*/
    function testimonialSlider(){
        if( $(".testimonial_slider").length){
            $(".testimonial_slider").owlCarousel({
                loop:true,
                margin:30,
                items:1,
                autoplay:true,
                smartSpeed:500,
                nav: false,
            })
        }
    }
    testimonialSlider();
    
    
    /*============ clients_slider js ===========*/
    function ClientsSlider(){
        if( $(".clients_slider").length){
            $(".clients_slider").owlCarousel({
                loop:true,
                margin:30,
                items:6,
                autoplay:true,
                smartSpeed:500,
                nav: false,
                dots: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2
                    },
                    500:{
                        items:3
                    },
                    776:{
                        items:4
                    },
                    992:{
                        items:6,
                    }
                } 
            })
        }
    }
    ClientsSlider();
    
    
    var tpj=jQuery;
            
    var revapi1061;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_1061_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_1061_1");
        }else{
            revapi1061 = tpj("#rev_slider_1061_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 50,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    tabs: {
                        style:"metis",
                        enable:true,
                        width:250,
                        height:40,
                        min_width:249,
                        wrapper_padding:0,
                        wrapper_color:"",
                        wrapper_opacity:"0",
                        tmp:'<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>',
                        visibleAmount: 5,
                        hide_onmobile: true,
                        hide_under:800,
                        hide_onleave:false,
                        hide_delay:200,
                        direction:"vertical",
                        span:true,
                        position:"inner",
                        space:0,
                        h_align:"left",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0
                    }
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                parallax: {
                    type:"3D",
                    origo:"slidercenter",
                    speed:1000,
                    levels:[2,4,6,8,10,12,14,16,45,50,47,48,49,50,0,50],
                    type:"3D",
                    ddd_shadow:"off",
                    ddd_bgfreeze:"on",
                    ddd_overflow:"hidden",
                    ddd_layer_overflow:"visible",
                    ddd_z_correction:100,
                },
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "60px",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    }); /*ready*/
    
    
    //    progress-bar....//
    $(".progress_bar_info").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view',
        });
    });

    
    /*=========animation js =========*/
    function bodyScrollAnimation() {
        if($(window).width()>768){
            new WOW({
                animateClass: 'animated', // animation css class (default is animated)
                offset:       100,          // distance to the element when triggering the animation (default is 0)
                mobile:       false, 
                duration:     1000,
            }).init()
        }
    }
    bodyScrollAnimation();
    
})(jQuery)