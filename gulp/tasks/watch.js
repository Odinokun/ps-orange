'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    // $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));

    // $.gulp.watch('./source/js/app.js', $.gulp.series('js:process'));
    // $.gulp.watch('./source/js/modules/**/*.js', $.gulp.series('browserify'));

    $.gulp.watch('./source/js/**/*.js', $.gulp.series('browserify'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('image:min'));
  });
};
