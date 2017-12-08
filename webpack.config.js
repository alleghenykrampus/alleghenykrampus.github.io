const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/styles/main.scss'],
  output: {
    filename: 'build/bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
	  { test: /\.css$/, loaders: ['style-loader', 'css-loader']},
	  { test: /\.scss$/, loader: ExtractTextPlugin.extract({use:['css-loader', 'sass-loader']}) },
	  { test: /\.png$/, loader: "url-loader?limit=10000" },
	  { test: /\.jpg$/, loader: "file-loader" },
	  { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
	  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
	  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
	  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ],
  },

  plugins: [
  	new ExtractTextPlugin({filename: "build/bundle.css"}),
  ],
};
