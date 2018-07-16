'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const RouteHome = require('./router/home');
module.exports = app => {
  const { router, controller } = app;
  RouteHome(app);
};
