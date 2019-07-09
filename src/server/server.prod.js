import htmlTemplate from '../template.ejs';

const React = require('react');
const express = require('express');
const app = require('./app');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const routes = require('../routes').default;
const { Provider } = require('react-redux');
const configureStore = require('../store/configureStore').default;

// Compile template for faster render
const compiledTemplate = require('ejs').compile(htmlTemplate, { async: true });

// Read assets list
const assets = JSON.parse(
    fs.readFileSync(path.join(__dirname, './webpack-assets.json'))
);

// Configurate store by using an initial state
const store = configureStore();

app.use('/assets', express.static(resolve(process.cwd(), 'build/assets')));

app.get('*', function(req, res) {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            return res.status(500).send(err.message);
        }

        if (redirect) {
            return res.redirect(302, redirect.pathname + redirect.search);
        }

        if (props) {
            const htmlApp = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );

            compiledTemplate({
                jsVendor: assets.vendors.js,
                jsApp: assets.app.js,
                cssApp: assets.app.css,
                htmlApp,
            })
                .then((data) => {
                    res.send(data);
                })
                .catch(() => {
                    res.status(500).send('Render error');
                });
        } else {
            res.status(404).send('Not Found');
        }
    });
});

module.exports = app;
