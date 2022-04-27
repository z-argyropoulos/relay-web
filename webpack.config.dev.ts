import path from 'path';
import commonConfig from './webpack.config';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import 'webpack-dev-server';

const devConfig: Configuration = {
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
      // 3. ts css modules loader - auto create TS declarations for css modules
      // 4. style loader - inject js styles to html
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader', //2
            options: {
              importLoaders: 1,
              modules: {
                // enable css modules only on .module scss files
                auto: /\.module(s)?\.\w+$/i,
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};

export default merge(commonConfig, devConfig);
