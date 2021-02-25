import gulp  from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';

export default function minImgs(cb) {
    return gulp.src('src/img/*.png')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}