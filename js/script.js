$(document).ready(function() {
       "use strict";

//fade in color band pic
 setTimeout(function(){ $('#logoTitle').removeClass('openImg'); }, 1000);

//set elements to window height and width
var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
var deviceWidth = document.documentElement.clientWidth;

//console.log(wHeight);
//console.log(wWidth);
//console.log(wWidth - 80);

$('#logoTitle').css('backgroundColor', '#000'); //set background color to black

//on load add the class noScroll to stop scrolling when header not open
$('body').addClass('noScroll');

	//click nav links to open header
	$('#headerNav a').click(function(e) {
    //header is opening
    $('#logoTitle').addClass('open');

    //remove noScroll when header animation stops to enable scrolling
    setTimeout(function(){
      $('body').removeClass('noScroll');
    },7000);

		//load pages html
		var navUrl = $(this).attr('href');
		$("#view").load(navUrl);

	//when bandLogo loads
	var bandLogo = document.getElementById('bandLogo');
	var bandLogoHt = parseInt(window.getComputedStyle(bandLogo).getPropertyValue("height"));
	var bandLogoPad = parseInt(window.getComputedStyle(bandLogo).getPropertyValue("padding-top"));
	var bandLogoSum = bandLogoHt + bandLogoPad;
	//console.log(bandLogoHt);
	//console.log(bandLogoSum + 40);

	//get device width
	var deviceWidth = document.documentElement.clientWidth;

  //add active class to active nav link
			var $this = $(this);
			$('#headerNav a').removeClass('active');
			$this.addClass('active');

			$('#nowPlayBtn').addClass('bodyBtn');

	//set Header ScrollMagic
	var controller_header = new ScrollMagic({
				globalSceneOptions: {
					triggerHook: "onLeave"
					}
			  });

	//open slideup to show page view
	var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 7,
	{'height': bandLogoSum + 40, 'minHeight': bandLogoSum + 40, 'backgroundPosition': '0 -630px' });

	//Mobile for 565 ~~~~~~~~~~~~
	if (deviceWidth <= 480) {
		var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 7,
		{'height': bandLogoSum + 30, 'minHeight': bandLogoSum + 30, 'backgroundPosition': '0 -150px' });
	}//Mobile END

	//Mobile for 667 hoz iphone 6 ~~~~~~~~~~~~
	if (deviceWidth === 667) {
		var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 7,
		{'backgroundPosition': '0 -360px' });
	}//Mobile END

//mobile for 569 hoz iphone 5
	if (deviceWidth === 568 || deviceWidth === 600) {
	//console.log("this equal 568");
	var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 7,
		{'backgroundPosition': '0 -310px' });
	}

	//mobile for 768 hoz phone
	if (deviceWidth === 768) {
	//console.log("this equal 768");
	var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 7,
		{'backgroundPosition': '0 -412px' });
	}

	//mobile for 1024 hoz phone
	if (deviceWidth === 1024) {
	//console.log("this equal 1024");
	var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 7,
		{'backgroundPosition': '0 -550px' });
	}

e.preventDefault();
return false;


});//click on #headerNav a

// ~~~~~~~~~~~~~~~~ moblie media queries ~~~~~~~~~~~~~~~~~

if (deviceWidth == 667) {
	//console.log("this is equal 667");
	$('#logoTitle').css({'height': wHeight,'minHeight': wHeight});
}

//mobile 565 ipone 5 hoz
if (deviceWidth < 565) {
	//console.log("this is less 565");
	//varibles for header nav and menu button
	var headerNav = document.getElementById('headerNav');
	var navMobileBtn = document.getElementById('navMobileBtn');

	//click to show nav links
	$('#navMobileBtn').click(function() {
	    $('#headerNav').stop().slideToggle(800, "easeOutQuad");
	}); //navMobileBtn END

	//click to hide nav links
	$('#headerNav a').click(function(){
	    $('#headerNav').stop().slideUp(200, "easeInQuad");// slideUp END
	});
}

if (deviceWidth == 568 || deviceWidth >= 960) {
	//console.log('this is 568 and greater then 960')
	//console.log(wHeight);
	//console.log(wWidth);
	$('#logoTitle').css({'height': wHeight,'minHeight': wHeight});
}

//setPin Logo ScrollMagic
var controller_logo = new ScrollMagic({
		    globalSceneOptions: {
		    	triggerHook: "onLeave"
		    	}
		  });

// build logo scene
var scene_logo = new ScrollScene({triggerElement: '#logoTitle'})
			.setPin("#logoTitle")
			.addTo(controller_logo);

//click logo to close header
		$('#logoTitle img').click(function(){
			/*
			var tween_header = TweenMax.to("#logoTitle, .scrollmagic-pin-spacer", 5,
			{height: wHeight, minHeight: wHeight, 'backgroundPosition': '0 0px', ease: Linear.easeInOut }); //firefox dont like backgroudPosY
			*/
			$('#nowPlayBtn').removeClass('bodyBtn');
			$('#headerNav a').removeClass('active');
		});


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

// Now Playing section open and close ~~~~~~~~~~~~

$('.overlay').click(function() {
	$('.overlay').fadeOut();
	$('#nowPlayBtn').removeClass('open');
	setTimeout(function(){$('#nowPlayingBox').animate({width:0})}, 1000);
	$('#nowPlayWrap').addClass('fade');
});

//on swipeleft open nowPlayBox
$('#nowPlayBtn').on("swipeleft",function(){
 	nowPlayBoxOpen();
});

//on click open nowPlayBox
$('#nowPlayBtn').click(function() {
	nowPlayBoxOpen();

  //check to see if header and nowplay panel are open
  //if both are open disable scroll on body
  //else if only header open enable scroll again
  if ($('#nowPlayBtn').hasClass('open') && ($('#logoTitle').hasClass('open'))) {
    $('body').addClass('noScroll');
  } else if ($('#logoTitle').hasClass('open')){
    $('body').removeClass('noScroll');
  }
});

//Open nowPlayBox
function nowPlayBoxOpen() {

	var wWidth = window.innerWidth;
	var wHeight = window.innerHeight;

	//place iframe URL
	var nowPlayVideo = '<iframe width="640" height="360" src="//www.youtube.com/embed/e0Wo040P_dk" frameborder="0" allowfullscreen=""></iframe>';

	$('.overlay').fadeIn();
	$('#nowPlayBtn').toggleClass('open');

	if ($('#nowPlayBtn').hasClass('open')) {
		$('#nowPlayingBox').animate({width: wWidth - 80}, 2000, function(){$('#nowPlayWrap').removeClass('fade')});
		$('#nowPlayingBox').css('height', wHeight);
		//put video iframe
		$('.nowPlayIframe').html(nowPlayVideo);
	} else {
		setTimeout(function(){$('#nowPlayingBox').animate({width:0})}, 1000);
		$('#nowPlayWrap').addClass('fade');
		setTimeout(function(){$('.overlay').fadeOut()}, 1500);
		//take out video iframe
		$('.nowPlayIframe').html(' ');
	}

	if (document.documentElement.clientWidth < 565) {
		var wWidth = window.innerWidth;
		var wHeight = window.innerHeight;

		//now playing width
		if ($('#nowPlayBtn').hasClass('open')) {
				$('#nowPlayingBox').animate({width: wWidth - 30}, 2000);
				//console.log("this on" + wWidth);
				//console.log("this on" + (wWidth - 30));
			}
	}//mobile nowplaying END
}


// Now Playing section open and close END ~~~~~~~~~~~~



 }); // doc ready END
