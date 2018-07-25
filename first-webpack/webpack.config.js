const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    // path: path.resolve(__dirname, 'public'),
    // filename: 'bundle.js'
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }],
              'react'
            ],
            plugins: ['react-hot-loader/babel']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Plugin generate page',
      template: 'src/root.html'
    })
  ]
};
