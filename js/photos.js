$(document).ready(function() {

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/users/self/feed?access_token=1516063633.51365bb.8b55a4936548478abbbd9cf9a6d1d236",
    success: function(data) {
      for (var i = 0; i < 30; i++) {
      $(".latestInstRATM").append("<li class='instPhotos' ><a target='_blank' href='" + data.data[i].link +"'><img   src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
      }
    }
  }); //ajax END

}); // doc ready END
