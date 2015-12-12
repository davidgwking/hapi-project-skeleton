'use strict';

import gulp        from 'gulp';

import runSequence from 'run-sequence';

gulp.task('dev', cb => {
  runSequence(['serve'], 'watch', cb);
});
