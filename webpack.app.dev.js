const merge = require('webpack-merge');
const common = require('./webpack.app.common.js');
const path = require('path');
const config = require('./config.dev.json')


module.exports = merge(common, {
  externals: { 'Config': config },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    proxy: { "/api/**": { target: 'http://localhost:3001', secure: false }  }
  }
});