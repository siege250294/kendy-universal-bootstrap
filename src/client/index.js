import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import Root from '../containers/Root'
import configureStore from '../store/configureStore'
import Immutable from 'immutable'

const store = configureStore({
	products: Immutable.List([
		{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
		{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
		{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
		{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
		{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
		{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
	])
})

const renderDOM = (RootComponent) => {
	render((
		<AppContainer>
			<RootComponent store={store} history={browserHistory} />
		</AppContainer>
	),
	document.getElementById('app'))
}
console.log('rendering')
renderDOM(Root)

// If HMR is enabled, try to re-render the Root component after  hot-reload
if (module.hot) {
	module.hot.accept('../containers/Root', () => {
		const NewRoot = require('../containers/Root').default
		renderDOM(NewRoot)
	})
}
