/* eslint-disable global-require */

const router = require('../routers');

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

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
