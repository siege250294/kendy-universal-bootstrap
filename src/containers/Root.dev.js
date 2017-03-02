import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import routes from '../routes'

// key={Math.random()} obviously it changes all components states to their default states

export default class Root extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	render() {
		const { store, history } = this.props
		return (
			<Provider store={store}>
				<Router key={Math.random()} history={history} routes={routes}>
				</Router>
			</Provider>
		)
	}
}