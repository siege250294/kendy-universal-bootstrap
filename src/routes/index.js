import React from 'react';
import { Route, IndexRoute } from 'react-router';
import loadable from 'react-loadable';

import App from '../components/App';
import IndexPage from '../components/Index/IndexPage';

const LoadableProductTable = loadable({
    loader: () => import('../modules/ProductApp/FilterableProductTable'),
    loading: () => false,
});

// Defines all routes here
export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="/think-in-react" component={LoadableProductTable} />
    </Route>
);
