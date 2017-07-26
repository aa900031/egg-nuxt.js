'use strict';
const Nuxt = require('nuxt');

module.exports = agent => {
  if (agent.env === 'prod') {
    agent.logger.info('[egg-nuxt] Build start');
    const nuxt = new Nuxt(agent.config.nuxt);
    nuxt.build().then(() => {
      agent.logger.info('[egg-nuxt] Build end');
    }).catch(error => {
      agent.logger.error(`[egg-nuxt] Error ${error}`);
    });
  }
};
