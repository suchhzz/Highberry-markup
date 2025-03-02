const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Используем Gulp-Sass и Sass
const browserSync = require('browser-sync').create(); // Подключаем BrowserSync

// Задача для компиляции SCSS в CSS
gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream()); // Обновляем браузер после компиляции стилей
});

// Задача для наблюдения за изменениями в SCSS файлах
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('styles')); // Следим за всеми SCSS файлами в папке scss
  gulp.watch('*.html').on('change', browserSync.reload); // Перезагружаем страницу при изменении HTML
  gulp.watch('js/**/*.js').on('change', browserSync.reload); // Перезагружаем страницу при изменении JS
});

// Задача для запуска локального сервера с BrowserSync
gulp.task('server', function(done) {
  browserSync.init({
    server: {
      baseDir: './', // Корневая папка, откуда сервер будет обслуживать файлы
      index: 'index.html' // Индексный файл (при необходимости)
    },
    notify: true // Показывать уведомление, когда сервер запускается
  });
  done(); // Завершаем задачу server
});

// Задача по умолчанию
gulp.task('default', gulp.series('styles', 'server', 'watch')); // Компилируем стили, запускаем сервер и начинаем отслеживание изменений
