const gulp = require('gulp');
const pug2html = require('./gulp/tasks/pug2html.js');
const styles = require('./gulp/tasks/styles.js');
const watch = require('./gulp/tasks/watch.js');

exports.build = gulp.parallel(pug2html, styles)
exports.watch = watch
