const app = require('./app');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackClientConfig = require('../../internals/webpack/config.client');
const { resolve } = require('path');

const bundle = webpack(webpackClientConfig);

app.set('view engine', 'ejs');

// Using webpack-dev-middleware and webpack-hot-middlewere for serving bundled files
app.use(
    webpackDevMiddleware(bundle, {
        // noInfo: true,
        publicPath: webpackClientConfig.output.publicPath,
        stats: {
            colors: true,
        },
    })
);
app.use(webpackHotMiddleware(bundle));

// Then using the index.html for all routes - client-side render
app.get('*', function(req, res) {
    res.render(resolve(__dirname, '../template.ejs'), {
        jsVendor: '/assets/vendors.bundle.js',
        jsApp: '/assets/app.bundle.js',
        cssApp: '',
        htmlApp: '',
    });
});

module.exports = app;
