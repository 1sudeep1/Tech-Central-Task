const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define the 'styles' task
gulp.task('styles', function() {
  return gulp.src('src/sass/*.scss') // Source folder containing Sass files
    .pipe(sass().on('error', sass.logError)) // Compile Sass to CSS
    .pipe(gulp.dest('dist')); // Destination folder for compiled CSS
});

// Define the 'watch' task
gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', gulp.series('styles'));
});

// Define the default task
gulp.task('default', gulp.series('styles', 'watch'));
