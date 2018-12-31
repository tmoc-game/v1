/* eslint-disable global-require */
const express = require('express');
const router = require('../routers');
const path = require('path');

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  // add static delivery
  app.use('/image', express.static(path.join(__dirname, '../../', 'assets', 'image')));

  // Add Routers
  app.use(router);

  // Frontcode builder
  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    // Build for dev
    const webpackConfig = require('../../../config/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
