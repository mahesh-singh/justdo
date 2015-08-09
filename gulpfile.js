
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('browserify', function () {
    browserify('./static/scripts/js/main.js')
      .transform('reactify')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('./static/scripts/dist/js'));
});


gulp.task('default', ['browserify']);

gulp.task('watch', function () {
    gulp.watch('./static/scripts/js/**/*.*', ['default']);
});