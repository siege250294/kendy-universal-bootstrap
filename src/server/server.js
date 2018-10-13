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

// Read assets list
const assets = JSON.parse(
    fs.readFileSync(path.join(__dirname, './webpack-assets.json'))
);

// Configurate store by using an initial state
const store = configureStore();

app.use('/assets', express.static(resolve(process.cwd(), 'build/assets')));

app.get('*', function(req, res) {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        const appHtml = renderToString(
            <Provider store={store}>
                <RouterContext {...props} />
            </Provider>
        );
        res.send(renderPage(appHtml));
    });
});

function renderPage(appHtml) {
    return `
        <!doctype html public="storage">
        <html>
        <meta charset="utf-8"/>
        <title>Kendy React Universal Starter Kit</title>
        <div id="app">${appHtml}</div>
        <script src="${assets.vendors.js}"></script>
        <script src="${assets.app.js}"></script>
    `;
}

module.exports = app;
