'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Mock: true   //为了只在开发环境使用mock.js，而打包到生产环境时自动不使用mock.js，做以下配置：
}) 
