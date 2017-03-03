const gulp = require('gulp')
const gutil = require('gulp-util')
const htmlmin = require('gulp-htmlmin')
const genv = require('gulp-env')
const nodemon = require('gulp-nodemon')

const runSequence = require('run-sequence')

const exec = require('child_process').exec
const chalk = require('chalk')
const del = require('del')
const { resolve } = require('path')
const webpack = require('webpack')

gulp.task('clean:build', (cb) => {
	del(resolve(__dirname, 'build')).then(() => {
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

gulp.task('build:client', ['set-environment-production'], (cb) => {
	const clientConfig = Object.create(require('./webpack/config.client'))
	gutil.log('[is-development]', chalk.red(clientConfig.cache))
	webpack(clientConfig, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('[webpack-client]', err)
		}
		gutil.log('[webpack-client]', stats.toString({ colors: true }))
		cb()
	})
})

gulp.task('build:html', (cb) => {
	return gulp.src('./src/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./build/public'))
})

gulp.task('build:server', ['set-environment-production'], (cb) => {
	const serverConfig = Object.create(require('./webpack/config.server'))
	webpack(serverConfig, (err, stats) => {
		if (err) {
			throw new gutil.PluginError('[webpack-server]', err)
		}
		gutil.log('[webpack-server]', stats.toString({ colors: true }))
		cb()
	})
})

gulp.task('start:dev', (cb) => {
	nodemon({
		watch: [
			'./src/server'
		],
		exec: 'babel-node ./src/server',
		env: {
			NODE_ENV: 'development'
		}
	})
})

gulp.task('start:prod', ['build:client', 'build:server', 'build:html'], (cb) => {
	nodemon({
		watch: [
			'./build'
		],
		script: './build/server',
		env: {
			NODE_ENV: 'production'
		}
	})
})
