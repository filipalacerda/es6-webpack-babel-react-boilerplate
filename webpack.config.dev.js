const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: [
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: './dist/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/,  exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      {test: /\.s?css$/,loader: 'style!css!sass'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {hot: true, colors: true}
};
