'use strict';

import config   from '../config';
import gulp     from 'gulp';
import nodemon  from 'gulp-nodemon';

gulp.task('serve', ['babel'], cb => {
  let demon = nodemon({
    script: config.buildDir + '/app.js',
    ext:    'js',
    tasks:  ['babel'],
    ignore: [config.buildDir],
  });

  demon.once('start', cb);
});
