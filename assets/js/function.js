$(document).ready(function () { 
    
    $('.owl-Programs').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1,  
                                        
            },
            580:{
                items:1,  
                   
            },
            768:{
                items:1,
                
            },
            1000:{
                items:1, 
                
            },
            1200:{
                items:1,             
                
            }
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            $(".navigation").addClass("hFixed");
        } else {
            $(".navigation").removeClass("hFixed");
        }
    });
    
    
});

