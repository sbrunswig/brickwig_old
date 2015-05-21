var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('styles', function() {
    gulp.src('./app/css/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('./app/css'))
});

gulp.task('default', function() {
    gulp.start('styles');
});