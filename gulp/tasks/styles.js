const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');

module.exports = function styles(cb) {
    return gulp.src("src/styles/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gulp.dest('build/css'))
}
