const path = require('path');
const commonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    // use hash in production to clear cache when a file change was made (cache busting)
    filename: 'js/index.[contenthash].js',
    path: path.resolve(__dirname, 'dist'), // in which folder webpack will 'spit' the bundled files
    assetModuleFilename: 'assets/[hash][ext][query]', // where to move images in output folder
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css', // extract css into seperate files (from js files)
    }),
    new CleanWebpackPlugin(), // clear dist folder when webpack bundles the modules again
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      // 1. sass loader - convert scss to css
      // 2. css loader - convert css to commonjs
      // 3. mini css extract loader - extract css into files (from js files)
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
