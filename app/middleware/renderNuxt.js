'use strict';

module.exports = () => {
  return function* (next) {
    if (this.path !== '/__webpack_hmr') {
      yield next;

      if (this.status !== 404 || this.method !== 'GET') return;

      this.status = 200;
      if (/\.js$/.test(this.path)) this.set('Content-Type', 'application/javascript');
      if (/\.css/.test(this.path)) this.set('Content-Type', 'text/css');
    }

    yield this.app.nuxt.render(this.req, this.res);
  };
};
