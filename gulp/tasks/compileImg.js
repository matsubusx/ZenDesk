const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

module.exports = function minImgs(cb) {
    return gulp.src('src/img/*.png')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}