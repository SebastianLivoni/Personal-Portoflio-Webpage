//Navbar scroll animation

$("a").click(function() {
    var href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
        scrollTop: $(href).offset().top
    }, 250);
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
