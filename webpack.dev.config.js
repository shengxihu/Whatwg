const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'bundle.js': ['./src/main.js', 'webpack-hot-middleware/client']
	},
	output: {
		path: '/',
		publicPath: 'http://localhost:3000/static/',
		filename: '[name]'
	},
	devServer: {
         quiet: true, 
         noInfo: true
    },
	module: {
	    loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.scss$/,
				loader: 'scss-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{ 
				test: /\.(html|tpl)$/, 
				loader: 'html-loader' 
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
				name: '[name].[ext]?[hash]'
				}
			},
			{ 
				test: /\.json$/, 
				loader: 'json-loader' 
			},
	    ]
	},
	devtool: '#eval-source-map',
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
  	]
};