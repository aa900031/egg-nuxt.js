'use strict';
const Nuxt = require('nuxt');
const NUXT = Symbol('Application#nuxt');

module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      this[NUXT] = new Nuxt(this.config);
    }
    return this[NUXT];
  },
};
