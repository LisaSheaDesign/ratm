<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		
		<meta name="description" content="Rhythm and the Method is a San Diego-based band specializing in original music that is in a genre all its own. Rhythm and the Method skillfully blend sounds of rock, blues, indie, and folk to create a unique, revolutionary sound.">
		<meta name="keywords" content="Blues, Blues Rock, Rock, Indie, Soul, Heart, Joan Jett, The Cars, Aerosmith">
		<meta name="author" content="Rhythm and the Method">
	
	<!--jQuery-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

			<title>Home - Rhythm and the Method</title>
			<link rel='stylesheet' href='js/swipeshow/css/jquery.swipeshow.css'>
			<link href="css/style.css" rel="stylesheet" type="text/css">
			<!--[if lt IE 7]>
			<style type="text/css"> 
				#wrapper { height:100%; }
			</style>
		<![endif]-->
	</head>
	<body>
		<div id="socialTabPanel"><?php require("includes/socialTab.php"); ?></div>
		
		<div id="pageWrap">
			<div class="overlay"></div>
			<div id="nowPlaying"><?php require("includes/nowplay.php"); ?></div>
			<div id="header"><?php require("includes/header.php"); ?></div>
			
			<div id="contentWrap">
			<div id="view">
			<p id='homeBio'>RHYTHM AND THE METHOD is a San Diego-based band specializing in original music that is in a genre all its own. The band had its beginnings in the dreams and imagination of RHYTHM TURNER who shares the same passion as the rest of her family: to make music that moves people. Fronted by Rhythm's soulful voice, "THE METHOD" is comprised of several talented, accomplished musicians- including her own father and younger brother! Together, Rhythm and the Method skillfully blend sounds of rock, blues, indie, and folk to create a unique, revolutionary sound. With raw, poetic lyrics, and undeniable grooves, the group creates the kinds of songs people from all walks of life can appreciate and enjoy.</p>
			</div>
			</div><!-- #content -->

			<div><?php require("includes/footer.php"); ?></div>
		</div><!-- #wrapper -->
	
	<!-- <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script> -->
	<!--CDN link for the latest TweenMax-->
	<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<!-- scrollmagic -->
	<script type="text/javascript" src="js/jquery.scrollmagic.min.js"></script>
	<!-- jquery slides JavaScript -->
	<!-- swipeshow -->
	<script src='js/swipeshow/js/jquery.swipeshow.min.js'></script>

	<script src="js/jquery.easing.1.3-min.js"></script>
	<!--script-->
	<script src="js/script.js"></script>
	<script src="js/photos.js"></script>
	<!-- Google Analytics -->
		<script type="text/javascript">
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
		</script>
		<script type="text/javascript">
		var pageTracker = _gat._getTracker("UA-599770-11");
		pageTracker._trackPageview();
		</script>
	<!-- END -->
</body>
</html>