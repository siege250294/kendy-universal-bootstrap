import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import productState from '../modules/ProductApp/reducer';

// Combines all the defined reducers here
export default combineReducers({
    productState,
    routing,
});
