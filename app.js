'use strict';
const MIDDLEWARE_RENDER_NUXT = 'renderNuxt';

module.exports = app => {
  if (app.config.coreMiddleware.indexOf(MIDDLEWARE_RENDER_NUXT) !== -1) {
    app.logger.error(`[egg-nuxt] Duplication of middleware name found: ${MIDDLEWARE_RENDER_NUXT}. Rename your middleware other than "${MIDDLEWARE_RENDER_NUXT}" please.`)
  }
  app.config.coreMiddleware.unshift(MIDDLEWARE_RENDER_NUXT);

  app.beforeStart(function* () {
    try {
      app.logger.info('[egg-nuxt] Build start');
      yield app.nuxt.build();
      app.logger.info('[egg-nuxt] Build end');
    } catch (error) {
      app.logger.error(`[egg-nuxt] ${error}`);
      process.exit(1);
    }
  });
};
