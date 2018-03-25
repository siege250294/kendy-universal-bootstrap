import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Create a store with initial state only
export default (initialState) => {
    return createStore(rootReducer, initialState);
};
