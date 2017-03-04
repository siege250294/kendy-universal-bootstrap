import { PRODUCT_FILTER_NAME, PRODUCT_FILTER_STOCKED } from '../actions/filters'
import Immutable from 'immutable'

const initialState = Immutable.Map({
	productFilter: '',
	categoryFilter: '',
	productStocked: false
})

export default (filters = initialState, action) => {
	switch (action.type) {
	case PRODUCT_FILTER_NAME:
		return filters.set('productFilter', action.productFilter)
	case PRODUCT_FILTER_STOCKED:
		return filters.set('productStocked', action.productStocked)
	default:
		return filters
	}
}
