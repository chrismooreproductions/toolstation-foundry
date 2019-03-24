const merge = require('webpack-merge');
const common = require('./webpack.app.common.js');

module.exports = merge(common, {
  mode: 'production',
});