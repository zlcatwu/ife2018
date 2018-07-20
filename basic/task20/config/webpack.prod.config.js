const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '..', 'src', 'main.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  mode: 'production', // 注意该值因环境不同而改变
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  plugins: [
    // 清除 build 目录
    new CleanWebpackPlugin([
      path.resolve(__dirname, '..', 'dist')
    ], {
      root: path.resolve(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html')
    }),
  ],
};
