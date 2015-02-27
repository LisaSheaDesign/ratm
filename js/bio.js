// Bio page scroll ~~~~~~~~~~~~

$('.bandBioLink').hide();

		$('.bandBioLink').click(function(){
	        var tween_Bio = TweenMax.to(".memCarousel", 4, {marginLeft: 0, ease: Cubic.easeInOut });
	        $('.bandBioLink').delay(200).fadeOut();
	        $('#bandMemPics div').removeClass('active');
	    });

	    $('.rhythmPic').click(function(){
	        var tween_rhythmBio = TweenMax.to(".memCarousel", 4, {marginLeft: - 974, ease: Cubic.easeInOut });
	        $('.bandBioLink').fadeIn();
	    });

	    $('.papaPic').click(function(){
	       var tween_papaBio = TweenMax.to(".memCarousel", 4, {marginLeft: - 1948, ease: Cubic.easeInOut });
	       $('.bandBioLink').animate().fadeIn();
	    });

	    $('.evanPic').click(function(){
	        var tween_evanBio = TweenMax.to(".memCarousel", 4, {marginLeft: - 2922, ease: Cubic.easeInOut });
	        $('.bandBioLink').fadeIn();
	    });

	    $('.lauraPic').click(function(){
	       var tween_lauraBio = TweenMax.to(".memCarousel", 4, {marginLeft: - 3896, ease: Cubic.easeInOut });
	       $('.bandBioLink').fadeIn();
	    });

 $('#bandMemPics div').click(function(){

//add active class to active nav link
		var $this = $(this);
		$('#bandMemPics div').removeClass('active');
		$this.addClass('active');
});
       
// Bio page scroll END ~~~~~~~~~~~~