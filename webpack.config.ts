import path from 'path';
import DotenvPlugin from 'dotenv-webpack';
import { ProvidePlugin, Configuration } from 'webpack';

const commonConfig: Configuration = {
  entry: path.join(__dirname, 'src', 'index.tsx'), // where webpack starts bundling files
  plugins: [
    // load react without having to import it manually in every component/file
    new ProvidePlugin({ React: 'react' }),
    // expose env variables
    new DotenvPlugin({
      // load '.env.example' to verify the '.env' variables are all set
      safe: true,
    }),
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
        // transpile react js(x) files with babel to browser understandable javascript
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
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
