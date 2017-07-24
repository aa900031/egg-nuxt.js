'use strict';
const assert = require('assert');

const MIDDLEWARE_RENDER_NUXT = 'renderNuxt';

module.exports = app => {
  assert.equal(
    app.config.coreMiddleware.indexOf(MIDDLEWARE_RENDER_NUXT),
    -1,
    `Duplication of middleware name found: ${MIDDLEWARE_RENDER_NUXT}. Rename your middleware other than "${MIDDLEWARE_RENDER_NUXT}" please.`
  );
  app.config.coreMiddleware.unshift(MIDDLEWARE_RENDER_NUXT);

  app.beforeStart(function* () {
    try {
      app.logger.info('Build start');
      yield app.nuxt.build();
      app.logger.info('Build end');
    } catch (error) {
      app.logger.error(error);
      process.exit(1);
    }
  });
};
