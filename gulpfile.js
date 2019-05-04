const 
    {task, src, dest, watch, series} = require('gulp'),
    sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
task('sass', () => {
  return src('./styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./styles'));
});
 
task('sass:watch', () => {
  watch('./styles/**/main.scss', series('sass'));
});