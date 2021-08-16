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

/*$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height() - 50){
            $("#navbar a").css({"color":"#1A1A1D"});   
            $("#navbar h3").css({"color":"#1A1A1D"});   
        }
        else{
            $("#navbar a").css({"color":"white"});
            $("#navbar h3").css({"color":"white"});
        }

    })
})*/

/* 
- Tooltips
- Scroll to top
- Navbar color switch
- Navbar scroll to animation 
*/
