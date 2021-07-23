const express = require('express')
// const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compression = require('compression')

const app = express()

app.use(compression())
// Step 1: 引入 webpack 的配置文件和 生成 webpack 的编译器
const webpack = require('webpack')
// Step 2: 将编译器挂载给 webpack dev middleware
if (process.env.NODE_ENV !== 'production') {
	const webpackConfig = require('./build/webpack.dev.js')
	const compiler = webpack(webpackConfig)
	app.use(
		webpackDevMiddleware(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath
		})
	)
	// Step 3: 将编译器挂载给 webpack hot middleware
	app.use(
		webpackHotMiddleware(compiler, {
			log: console.log,
			path: '/__webpack_hmr',
			heartbeat: 10 * 1000
		})
	)
}

app.use(express.static('dist'))

app.get(/\/demo/, function (req, res, next) {
	console.log(1213)
	res.sendFile('dist/demo.html', { root: __dirname })
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n')
})
