const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const buildPath = path.join(__dirname, './build')
const sourcePath = path.join(__dirname, './src')

const plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor-[hash].js',
		minChunks(module) {
			const context = module.context

			return context && context.indexOf('node_modules') >= 0
		},
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, 'popup.html'),
		path: buildPath,
		filename: 'popup.html',
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			screw_ie8: true,
			conditionals: true,
			unused: true,
			comparisons: true,
			sequences: true,
			dead_code: true,
			evaluate: true,
			if_return: true,
			join_vars: true,
		},
		output: {
			comments: false,
		}
	})
]

const rules = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: ['babel-loader'],
	},
	{
		test: /\.(png|jpe?g|gif|svg)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'assets/[name].[ext]'
				}
			},
			{
				loader: 'image-webpack-loader',
				options: {
					mozjpeg: {
						quality: 65
					},
					pngquant: {
						quality: '10-20',
						speed: 4
					},
					svgo: {
						plugins: [
							{
								removeViewBox: false
							},
							{
								removeEmptyAttrs: false
							}
						]
					},
					gifsicle: {
						optimizationLevel: 7,
						interlaced: false
					},
					optipng: {
						optimizationLevel: 7,
						interlaced: false
					}
				}
			}
		]
	}
]

module.exports = {
	devtool: 'nosources-source-map',
	context: sourcePath,
	entry: {
		app: [
			'./index.js',
			'./assets/icon128.png',
			'./assets/icon48.png',
			'./assets/icon16.png'
		]
	},
	output: {
		path: buildPath,
		publicPath: '/',
		filename: 'app-[hash].js',
	},
	module: {
		rules,
	},
	resolve: {
		extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			sourcePath,
		],
	},
	plugins
}

