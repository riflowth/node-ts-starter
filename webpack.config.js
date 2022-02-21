import path from 'path';

const __dirname = path.resolve();
const distPath = path.resolve(__dirname, 'dist');

const app = {
  entry: './src/app.ts',
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: '/node_modules/' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: distPath
  }
};

export default [app];

