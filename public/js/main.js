
jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        resolution:500,
        dropRadius:15,
        perturbance: 0.15,
    });

    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=80){
            $("nav").addClass('secondary');
        }
        else
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
            }
    });
});

