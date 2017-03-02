import { createStore } from 'redux'
import rootReducer from '../reducers'

export default (initialState) => {
	/* eslint-disable no-underscore-danger */
	const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	/* eslint-enable no-underscore-danger */

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers/index').default
			store.replaceReducer(nextReducer)
		})
	}

	return store
}