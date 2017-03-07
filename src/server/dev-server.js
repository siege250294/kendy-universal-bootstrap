import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackClientConfig from '../../webpack/config.client'
import { resolve } from 'path'

const app = express()
const bundle = webpack(Object.create(webpackClientConfig))

// Using webpack-dev-middleware and webpack-hot-middlewere for serving bundled files
app.use(webpackHotMiddleware(bundle))
app.use(webpackDevMiddleware(bundle, {
	noInfo: true,
	publicPath: webpackClientConfig.output.publicPath,
	stats: {
		colors: true
	}
}))

// Then using the index.html for all routes - client-side render
app.get('*', function(req, res) {
	res.sendFile(resolve(__dirname, '../index.html'))
})

export default app
