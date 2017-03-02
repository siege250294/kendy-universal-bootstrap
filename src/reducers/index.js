import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux' 
import products from './products'

export default combineReducers({
	products,
	routing
})