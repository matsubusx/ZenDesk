import gulp from 'gulp';
import pug2html from './gulp/tasks/pug2html.js'
import styles from './gulp/tasks/styles.js'

gulp.task("default", gulp.parallel(pug2html, styles));