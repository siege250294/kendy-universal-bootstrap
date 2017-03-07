import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import FilterableProductTable from '../containers/FilterableProductTable'
import IndexPage from '../components/IndexPage'

// Defines all routes here
export default (
	<Route path="/" component={App}>
		<IndexRoute component={IndexPage} />
		<Route path="/think-in-react" component={FilterableProductTable} />
	</Route>
)
