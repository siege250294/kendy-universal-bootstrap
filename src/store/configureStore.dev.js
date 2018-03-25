import { createStore } from 'redux';
import rootReducer from './rootReducer';

// On development, initialize store by an initial state a
// nd enable Redux dev tools extension in Chrome, then
// try to watch the files for hot module replacement if needed
export default (initialState) => {
    /* eslint-disable no-underscore-danger */
    const store = createStore(rootReducer, initialState);
    /* eslint-enable no-underscore-danger */
    // window ? (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : null

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};
