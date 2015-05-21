var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('styles', function() {
    gulp.src('./css/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', function() {
    gulp.start('styles');
});