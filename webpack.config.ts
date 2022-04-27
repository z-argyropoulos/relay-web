import path from 'path';
import DotenvPlugin from 'dotenv-webpack';
import { ProvidePlugin, Configuration } from 'webpack';

const commonConfig: Configuration = {
  entry: path.join(__dirname, 'src', 'index.tsx'), // where webpack starts bundling files
  plugins: [
    // load react without having to import it manually in every component/file
    new ProvidePlugin({ React: 'react' }),
    // expose env variables
    new DotenvPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/, // transpile react jsx and js files with babel to browser understandable javascript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // preset env for ES2015+ syntax
            // preset for react code/syntax
            // preset for typescript code to js
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
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

export default commonConfig;
