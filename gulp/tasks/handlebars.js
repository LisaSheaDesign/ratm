var gulp = require('gulp'),
    rename = require('gulp-rename'),
    handlebars = require('gulp-compile-handlebars');

//handlebars
gulp.task('temps', function() {
//object for promo panel on index page
var data = {/* got to have this not sure why*/},
    options = {
    batch:['./src/partials']
  }
//create index and put partials on page
  var index = function() {
    gulp.src('./src/temps/index.hbs')
    .pipe(handlebars(data, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
  }
//create template pages put in dest directory
var init = function() {
  index();
}
  return init();
});
