const devConfig = require('./webpack.dev')
const proConfig = require('./webpack.pro')
const { merge } = require('webpack-merge')

const currConfig = process.env.NODE_ENV === 'production' ? proConfig : devConfig

module.exports = merge(currConfig, {})
