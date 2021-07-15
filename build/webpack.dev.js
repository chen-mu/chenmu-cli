const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const webpack = require('webpack')

module.exports = merge(baseConfig, {
	// JS 执行入口文件
	mode: 'development',
	devtool: 'eval-cheap-module-source-map', // 开发环境 devtool: hidden-source-map

	plugins: [
		// new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin() //热更新插件
	]
})
