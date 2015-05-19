var gulp = require('gulp');


gulp.task('copy', function () {

  gulp.src('./bower_components/jquery/dist/*')
    .pipe(gulp.dest('./www/js/'));

  gulp.src('./bower_components/bootstrap/dist/**/*')
    .pipe(gulp.dest('./www/'));

  gulp.src('./bower_components/semver/semver.min.js')
    .pipe(gulp.dest('./www/js/'));

  gulp.src('./bower_components/bluebird/js/browser/bluebird.min.js')
    .pipe(gulp.dest('./www/js/'));

});
