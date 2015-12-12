'use strict';

export default {

  sourceDir: 'app',
  buildDir: 'dist',

  scripts: {
    src: 'app/**/*.js',
    dest: 'dist',
  },

  babel: {
    sourcemaps: true,
  },

  gulp: {
    src: 'gulp/**/*.js',
  },

};
