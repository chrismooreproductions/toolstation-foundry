const merge = require('webpack-merge');
const common = require('./webpack.app.common.js');
var path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    proxy: { "/api/**": { target: 'http://localhost:3001', secure: false }  }
  }
});