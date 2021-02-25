import gulp  from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import pugLinter from 'gulp-pug-linter';
import { htmlValidator } from 'gulp-w3c-html-validator';
import bemValidator from 'gulp-html-bem-validator';

export default function pug2html(cb) {
    return gulp.src('src/pages/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({ reporter: "default" }))
        .pipe(pug({pretty: true}))
        .pipe(htmlValidator.analyzer({ skipWarnings: true }))
        .pipe(htmlValidator.reporter())
        .pipe(bemValidator())
        .pipe(gulp.dest('build'))
}