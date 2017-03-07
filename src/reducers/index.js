import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import products from './products'
import filters from './filters'

// Combines all the defined reducers here
export default combineReducers({
	products,
	filters,
	routing
})
