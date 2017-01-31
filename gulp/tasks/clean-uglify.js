var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

//clean out min dir
gulp.task('clean-css', function() {
  return gulp.src('css/min/style.min.css')
  .pipe(clean());
});

gulp.task('clean-js', function() {
  return gulp.src(['js/min/script.min.js', 'js/min/photos.min.js', 'js/min/nowplay-slides.min.js', 'js/min/bio.min.js'])
  .pipe(clean());
});

// uglify js
gulp.task('jsmin', ['clean-js'], function() {
  return gulp.src(['js/script.js', 'js/photos.js', 'js/nowplay-slides.js', 'js/bio.js'])
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js/min'));
});

// compress css
gulp.task('cssmin', ['clean-css'], function(){
  return gulp.src('css/style.css')
  .pipe(cssmin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('css/min'));
});
