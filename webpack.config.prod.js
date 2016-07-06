const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =  {
  entry: {
      app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {test: /\.js$/,  exclude: /node_modules/, loader: 'babel'},
      {test: /\.s?css$/, loader: ExtractTextPlugin.extract('style', 'css!sass')}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.[hash].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
