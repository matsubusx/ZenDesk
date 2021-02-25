const gulp = require('gulp');
const pug2html = require('./pug2html.js');
const styles = require('./styles.js');

// import gulp from 'gulp';
// import pug2html from "./pug2html.js";
// import styles from "./styles.js";

module.exports = function watch(cb) {
    gulp.watch("./src/pages/*.pug", gulp.parallel(pug2html),
    gulp.watch("./src/styles/**/*.scss", gulp.parallel(styles)))
}