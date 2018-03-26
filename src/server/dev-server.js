const app = require('./app');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackClientConfig = require('../../webpack/config.client');
const { resolve } = require('path');

const bundle = webpack(Object.create(webpackClientConfig));

// Using webpack-dev-middleware and webpack-hot-middlewere for serving bundled files
app.use(webpackHotMiddleware(bundle));
app.use(
    webpackDevMiddleware(bundle, {
        // noInfo: true,
        publicPath: webpackClientConfig.output.publicPath,
        stats: {
            colors: true,
        },
    })
);

// Then using the index.html for all routes - client-side render
app.get('*', function(req, res) {
    res.sendFile(resolve(__dirname, '../index.html'));
});

module.exports = app;
