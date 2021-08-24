//Navbar scroll animation

$("a").click(function() {
    var href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
        scrollTop: $(href).offset().top
    }, 50);
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

// Hamburger

$('.menu').click(function() {
	if($(this).is('.active:not(.back)')) {
		 $(this).addClass('back');
	} else if ($(this).is('.back')) {
		$(this).removeClass('back');
	} else {
		$(this).addClass('active');
	}
});