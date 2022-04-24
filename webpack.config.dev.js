const path = require('path');
const commonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'), // in which folder webpack will 'spit' the bundled files
    assetModuleFilename: 'assets/[name][ext]', // where to move images in output folder
  },
  plugins: [
    // inject bundled js files in script src attribute in the html file
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    open: true, // open browser after dev server init
    port: 3000,
  },
  module: {
    rules: [
      // 1. sass loader - convert scss to css
      // 2. css loader - convert css to commonjs
      // 3. style loader - inject js styles to html
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
