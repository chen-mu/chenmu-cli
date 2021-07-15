const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// JS 执行入口文件
	devtool: 'eval-cheap-module-source-map', // 开发环境 devtool: hidden-source-map
	entry: {
		main: ['webpack-hot-middleware/client?reload=true', './src/demo/index.js']
	},
	output: {
		// 把所有依赖的模块合并输出到一个 bundle.js 文件
		filename: '[name].js',
		// 输出文件都放到 dist 目录下
		path: path.resolve(__dirname, '../dist'),
		publicPath: 'http://localhost:3000/dist/',
		chunkFilename: '[name]_[chunkhash:8]_chunk.js'
	},

	plugins: [
		// new CleanWebpackPlugin(),
		// new webpack.HotModuleReplacementPlugin(), //热更新插件
		new HtmlWebpackPlugin({
			template: './src/demo/index.html',
			filename: 'demo.html',
			chunks: ['main'],
			inject: 'body'
		})
	],

	// 设置别名
	resolve: {
		alias: {
			'@/utils': path.resolve(__dirname, '../utils/index.js')
		}
	},

	module: {
		rules: [
			{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },

			// less的解释其实就是在css解析的基础上加上 less-loader 即可！

			{
				test: /\.(le|c)ss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	}
}
