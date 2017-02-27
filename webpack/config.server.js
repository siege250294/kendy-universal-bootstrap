const { resolve } = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'
const isDev = env !== 'production'

const config = {}

module.exports = config