const path = require('path');
const DotenvPlugin = require('dotenv-webpack');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'), // where webpack starts bundling files
  plugins: [
    // load react without having to import it manually in every component/file
    new ProvidePlugin({ React: 'react' }),
    // expose env variables
    new DotenvPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // transpile react jsx and js files with babel to browser understandable javascript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // preset env preset for ES2015+ syntax
            // preset react for react code/syntax
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // to require img assets in the html file
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
