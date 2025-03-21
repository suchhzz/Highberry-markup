const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat'); 
const browserSync = require('browser-sync').create(); 

// gulp.task('styles', function() {
//   return gulp.src('scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('css'))
//     .pipe(browserSync.stream());
// });

gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('styles'));
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

gulp.task('server', function(done) {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    },
    notify: true
  });
  done();
});

gulp.task('default', gulp.series('styles', 'server', 'watch'));