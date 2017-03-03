import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackClientConfig from '../../webpack/config.client'
import { resolve } from 'path'

const app = express()
const bundle = webpack(Object.create(webpackClientConfig))

app.use(webpackHotMiddleware(bundle))
app.use(webpackDevMiddleware(bundle, {
	noInfo: true,
	publicPath: webpackClientConfig.output.publicPath,
	stats: {
		colors: true
	}
}))

app.get('/', function(req, res, next) {
	res.status(200).sendFile(resolve(__dirname, '../index.html'))
})

export default app
