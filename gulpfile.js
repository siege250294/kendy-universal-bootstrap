const gulp = require('gulp')
const gutil = require('gulp-util')
const del = require('del')
const { resolve } = require('path')
const webpack = require('webpack')

gulp.task('clean:public', (cb) => {
	del(resolve(__dirname, 'public')).then(() => {
		cb()
	})
})


const clientConfig = Object.create(require('./webpack/config.client'))
gulp.task('build:client', (cb) => {
	process.env.NODE_ENV = 'production'
	webpack(clientConfig, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('[webpack-client]', err)
		}
		gutil.log(stats.toString({ colors: true }))
	})
})

const serverConfig = Object.create(require('./webpack/config.server'))
gulp.task('build:server', (cb) => {
	process.env.NODE_ENV = 'production'
	webpack(serverConfig, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('[webpack-server]', err)
		}
		gutil.log(stats.toString({ colors: true }))
	})
})