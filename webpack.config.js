const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const app = {
  entry: path.resolve(srcPath, 'App.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
        },
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new ESLintPlugin({ extensions: ['ts'] }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  stats: {
    preset: 'minimal',
    assets: false,
    modules: false,
  },
  optimization: {
    minimizer: [new ESBuildMinifyPlugin()],
  },
  output: {
    filename: 'app.js',
    path: distPath,
    clean: true,
  },
};

module.exports = [app];
