'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import babel        from 'gulp-babel';
import sourcemaps   from 'gulp-sourcemaps';

gulp.task('babel', ['clean'], () => {
  return gulp.src([config.scripts.src])
        .pipe(gulpif(config.babel.sourcemaps, sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(config.babel.sourcemaps, sourcemaps.write('./')))
        .pipe(gulp.dest(config.scripts.dest));
});
