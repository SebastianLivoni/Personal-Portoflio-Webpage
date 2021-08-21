//Navbar scroll animation

$("a").click(function() {
    var href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
        scrollTop: $(href).offset().top
    }, 250);
});

// Return to top

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".return-to-top").css({"opacity":"1"});   
    }
    else {
        $(".return-to-top").css({"opacity":"0"});   
    }
});
/*$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;

    console.clear();
    console.log(scrollPercent);
})*/

// navbar color changing
/*
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).width() > 1200) {
            if($(window).scrollTop() > $(window).height() - 50){
                $("#navbar a").css({"color":"#1A1A1D"});   
                $("#navbar h3").css({"color":"#1A1A1D"});   
            }
            else{
                $("#navbar a").css({"color":"white"});
                $("#navbar h3").css({"color":"white"});
            }
        } else {
            $("#navbar a").css({"color":"white"});
            $("#navbar h3").css({"color":"white"});
        }
    })
})

/* 
- Navbar color switch
*/
