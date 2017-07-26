'use strict';
const CONSTS = require('./lib/constant');

module.exports = app => {
  if (app.config.coreMiddleware.indexOf(CONSTS.MIDDLEWARE_RENDER_NUXT) !== -1) {
    app.logger.error(`[egg-nuxt] Duplication of middleware name found: ${CONSTS.MIDDLEWARE_RENDER_NUXT}. Rename your middleware other than "${CONSTS.MIDDLEWARE_RENDER_NUXT}" please.`)
  }
  app.config.coreMiddleware.unshift(CONSTS.MIDDLEWARE_RENDER_NUXT);
};
