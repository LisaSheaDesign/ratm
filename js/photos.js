$(document).ready(function() {

$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/users/1188097792/media/recent/?access_token=1188097792.ab103e5.43987b30988e414a9122f798cf7fb266",
  success: function(data) {
    for (var i = 0; i < 30; i++) {
    $(".latestInstRATM").append("<li class='instPhotos' ><a target='_blank' href='" + data.data[i].link +"'><img   src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
  }
}); //ajax END


		 }); // doc ready END











