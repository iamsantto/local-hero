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
  }
]

module.exports = {
  devtool: 'nosources-source-map',
  context: sourcePath,
  entry: {
    app: './index.js'
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

