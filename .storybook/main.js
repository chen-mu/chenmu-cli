const fs = require('fs')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            sourceMap: true,
          }
        }]
    });
    return config;
  },
};