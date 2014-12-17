var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
    gulp.src('./assets/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'));
});