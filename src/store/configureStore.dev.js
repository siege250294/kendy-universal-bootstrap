import { createStore } from 'redux'
import rootReducer from '../reducers'

// On development, initialize store by an initial state a
// nd enable Redux dev tools extension in Chrome, then
// try to watch the files for hot module replacement if needed
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