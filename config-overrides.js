const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    util: require.resolve('util/'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert/'),
    querystring: require.resolve('querystring-es3'),
    os: require.resolve('os-browserify/browser'),
    process: require.resolve('process/browser.js'),
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};