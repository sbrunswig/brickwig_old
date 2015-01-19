var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('styles', function() {
  return gulp.src('css/brickwig.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', function() {
    gulp.start('styles');
});

gulp.task('watch', function() {
  	// Watch .scss files
  	gulp.watch('css/*.scss', ['styles']);
});


