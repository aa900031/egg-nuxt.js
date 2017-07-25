'use strict';
const Nuxt = require('nuxt');
const NUXT = Symbol('Application#nuxt');

module.exports = {
  get nuxt() {
    if (this.config.nuxt) {
      if (!this[NUXT]) {
        this[NUXT] = new Nuxt(this.config.nuxt);
      }
    } else {
      this.logger.error('[egg-nuxt] config.nuxt undefined')
    }
    return this[NUXT];
  },
};
