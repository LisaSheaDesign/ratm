// include gulp
var gulp = require('gulp');
var requireDir = require('require-dir')('./gulp/tasks');

//watch js and css files
gulp.task('watch', function() {
  gulp.watch('css/style.css', ['cssmin']);
  gulp.watch('js/script.js', ['jsmin']);
  gulp.watch('js/photos.js', ['jsmin']);
  gulp.watch('js/nowplay-slides.js', ['jsmin']);
  gulp.watch('js/bio.js', ['jsmin']);
  gulp.watch('../**/*.hbs', ['temps', 'reload']);
});

gulp.task('build',['jsmin', 'cssmin', 'watch', 'connect', 'temps']);
