# egg-nuxt.js

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nuxt.js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nuxt.js
[travis-image]: https://img.shields.io/travis/eggjs/egg-nuxt.js.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-nuxt.js
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-nuxt.js.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-nuxt.js?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-nuxt.js.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nuxt.js
[snyk-image]: https://snyk.io/test/npm/egg-nuxt.js/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nuxt.js
[download-image]: https://img.shields.io/npm/dm/egg-nuxt.js.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nuxt.js

> [Egg.js](https://eggjs.org) + [Nuxt.js](https://nuxtjs.org) = :zap:

<!--
Description here.
-->

## Install

```bash
$ npm i egg-nuxt.js --save
or
$ yarn add egg-nuxt.js
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nuxt = {
  enable: true,
  package: 'egg-nuxt.js',
};
```
## Nuxt.js Changes
- The Nuxt config file is now in  `config.[dev].js`, `dev` allow set `default`, `unittest`, `local`, `prod`
- The Nuxt project directory is `resources` (default)

## Configuration

```js
// {app_root}/config/config.default.js
exports.nuxt = {
};
```
see [nuxt.js config](https://nuxtjs.org/guide/configuration/) to learn more.

## Documentation
- [Egg.js](https://eggjs.org/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses
- [Egg.js license](https://github.com/eggjs/egg/blob/master/LICENSE)
- [Nuxt.js license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [Vue.js license](https://github.com/vuejs/vue/blob/master/LICENSE)
- This Projct [MIT](LICENSE)
