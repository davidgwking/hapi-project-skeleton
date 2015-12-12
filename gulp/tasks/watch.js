'use strict';

import config from '../config';
import gulp   from 'gulp';

gulp.task('watch', () => {
  // server restarts are handled by the serve task
  gulp.watch(config.scripts.src, ['lint']);
});
