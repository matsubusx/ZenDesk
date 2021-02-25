const gulp = require('gulp');
const pug = require('pug');
const plumber = require('gulp-plumber');
const pugLinter = require('gulp-pug-linter');
const bemValidator = require('gulp-html-bem-validator');

// import gulp  from 'gulp';
// import pug from 'gulp-pug';
// import plumber from 'gulp-plumber';
// import pugLinter from 'gulp-pug-linter';
// import { htmlValidator } from 'gulp-w3c-html-validator';
// import bemValidator from 'gulp-html-bem-validator';

module.exports = function pug2html(cb) {
    return gulp.src('src/pages/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({ reporter: "default" }))
        .pipe(pug({pretty: true}))
        .pipe(bemValidator())
        .pipe(gulp.dest('build'))
}