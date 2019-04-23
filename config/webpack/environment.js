const webpack = require('webpack'); // import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { environment } = require('@rails/webpacker');

environment.plugins.append(
  'CommonsChunkVendor',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => module.context
      && module.context.indexOf('node_modules') !== -1
      && !/moment|chart\.js/.test(module.context),
  }),
);

environment.plugins.append(
  'CommonsChunkManifest',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  }),
);

environment.plugins.append(
  'BundleAnalyzerPlugin',
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../../performance/reports/bundle_analyze.html',
    openAnalyzer: false,
  }),
);

environment.plugins.append(
  'IgnorePlugin',
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
);

module.exports = environment;
