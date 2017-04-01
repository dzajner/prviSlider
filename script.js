$(document).ready(function() {
    // options
    var speed = 5000;

    $(".slide").first().addClass("active");


    $(".slide").hide();
    $(".active").show();

    //  -poziva f-ju next slide
    $("#next").on('click', nextSlide);
    //  -poziva f-ju prev slide
    $("#prev").on('click', prevSlide);

    // NEXT SLIDE
    function nextSlide() {
        $('.active').removeClass('active').addClass('old-active');
        if ($('.old-active').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.old-active').next().addClass('active');
        };
        $('.old-active').removeClass('old-active');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    // PREV SLIDE
    	function prevSlide(){
		$('.active').removeClass('active').addClass('old-active');
		if($('.old-active').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.old-active').prev().addClass('active');
		}
		$('.old-active').removeClass('old-active');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

});
