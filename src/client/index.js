import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from '../containers/Root'

const renderDOM = (RootComponent) => {
	render((
		<AppContainer>
			<RootComponent />
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