import gulp from "gulp";
import sass from "gulp-sass";
import plumber from "gulp-plumber";
import autoPrefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";

export default function styles(cb) {
    return gulp.src("src/styles/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(shorthand())
        .pipe(gulp.dest('build/css'))
}
