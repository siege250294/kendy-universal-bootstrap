const gulp = require('gulp')
const gutil = require('gulp-util')
const genv = require('gulp-env')
const chalk = require('chalk')
const del = require('del')
const { resolve } = require('path')
const webpack = require('webpack')

gulp.task('clean:public', (cb) => {
	del(resolve(__dirname, 'public')).then(() => {
		cb()
	})
})

gulp.task('set-environment-production', () => {
	genv({
		vars: {
			NODE_ENV: 'production'
		}
	})
})
gulp.task('set-environment-development', () => {
	genv({
		vars: {
			NODE_ENV: 'development'
		}
	})
})

gulp.task('build:client', (cb) => {
	const clientConfig = Object.create(require('./webpack/config.client'))
	gutil.log('[is-development]', chalk.red(clientConfig.cache))
	webpack(clientConfig, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('[webpack-client]', err)
		}
		gutil.log('[webpack-client]', stats.toString({ colors: true }))
	})
})


gulp.task('build:server', (cb) => {
	const serverConfig = Object.create(require('./webpack/config.server'))
	gutil.log('[is-development]', serverConfig.cache)
	webpack(serverConfig, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('[webpack-server]', err)
		}
		gutil.log('[webpack-server]', stats.toString({ colors: true }))
	})
})
