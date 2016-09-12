'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
	var config = {};

	config.resolve = {
		alias: {
			'angular': path.resolve(path.join(__dirname, 'node_modules', 'angular'))
		}
	};

	config.entry = {
		app: './src/app/app.js'
	};

	config.output = {
		path: __dirname + '/dist',
		publicPath: 'http://localhost:4000/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	};

	// config.devtool = 'inline-source-map';

	config.module = {
		preLoaders: [],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				// exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	};

	config.plugins = [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			inject: 'body'
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	];

	config.devServer = {
		contentBase: './src/public',
		stats: 'minimal'
	};

	return config;
}();
