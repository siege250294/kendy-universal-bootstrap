import express from 'express';
import { resolve } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';
import Root from './';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Immutable from 'immutable';

const app = express();

// Configurate store by using an initial state
const store = configureStore({
    products: Immutable.List([
        {
            category: 'Sporting Goods',
            price: '$49.99',
            stocked: true,
            name: 'Football',
        },
        {
            category: 'Sporting Goods',
            price: '$9.99',
            stocked: true,
            name: 'Baseball',
        },
        {
            category: 'Sporting Goods',
            price: '$29.99',
            stocked: false,
            name: 'Basketball',
        },
        {
            category: 'Electronics',
            price: '$99.99',
            stocked: true,
            name: 'iPod Touch',
        },
        {
            category: 'Electronics',
            price: '$399.99',
            stocked: false,
            name: 'iPhone 5',
        },
        {
            category: 'Electronics',
            price: '$199.99',
            stocked: true,
            name: 'Nexus 7',
        },
    ]),
});

app.use('/', express.static(resolve(process.cwd(), 'build/public')));

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
		<script src="/bundle.js"></script>
	`;
}

export default app;
