$(document).ready(function() {


 $(".my-gallery").swipeshow({
  autostart: true,    /* Set to `false` to keep it steady */
  interval: 3000,     /* Time between switching slides (ms) */
  initial: 0,         /* First slide's index */
  speed: 700,         /* Animation speed (ms) */
  friction: 0.3,      /* Bounce-back behavior; use `0` to disable */
  mouse: true,        /* enable mouse dragging controls */
  keys: true,         /* enable left/right keyboard keys */

$dots: $("div.dots")

});

 $(".swipeshow .dots").css({'bottom': 0, 'position': 'absolute','z-index': 100, 'background': '#000', 'width': '100%','padding': 5});


}); // doc ready END