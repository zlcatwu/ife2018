const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: { // 如果需要多个入口可在此处继续添加
    app: path.resolve(__dirname, '..', 'src', 'main.js'),
  },
  output: {
    filename: '[name].js', // 使用 entry 中相应的名称作为文件名，除了[name]以外还可以使用[hash], [chunkhash]等
  },
  mode: 'development', // 传入 devlopment 作为 NODE_ENV 的值，该值会自动启用内置的优化
  module: { // 对文件的处理规则
    rules: [
      {
        test: /.css$/, // 定义该规则适用于哪些文件
        use: [ // 多个 loader 时传入数组
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    // 将文件自动注入 html 模板中并生成到 output.path 中
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html')
    }),
    // 开启 HMR
    new webpack.HotModuleReplacementPlugin(),
  ],
  // webpack-dev-server 相关配置
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    hot: true // 开启 HMR, 注意 plugins 中也需要开启 HMR
  }
};
