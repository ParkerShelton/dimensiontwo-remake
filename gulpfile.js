var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('scss', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
    // return gulp.watch('scss/**/*.scss');  
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss', gulp.series('scss'));
});