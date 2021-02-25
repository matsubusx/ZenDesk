import gulp from 'gulp';
import pug2html from './gulp/tasks/pug2html.js'
import styles from './gulp/tasks/styles.js'
import minImgs from './gulp/tasks/complieImg.js'

gulp.task("default", gulp.parallel(pug2html, styles, minImgs));