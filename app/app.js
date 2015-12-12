'use strict';

import './lib/util/sourcemap-support';

import Hapi from 'hapi';

const PORT = 3000;

let app = new Hapi.Server();
app.connection({port: PORT});

app.start(function() {
  console.log('Server running at:', app.info.uri);
});

export default {
  app: app,
};
