const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
	  { test: /\.css$/, loaders: ['style-loader', 'css-loader']},
	  { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
	  { test: /\.png$/, loader: "url-loader?limit=10000" },
	  { test: /\.jpg$/, loader: "file-loader" },
	  {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
	  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
	  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
	  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
