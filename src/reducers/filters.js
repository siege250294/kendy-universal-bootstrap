import { PRODUCT_FILTER } from '../actions/filters'
import Immutable from 'immutable'

const initialState = Immutable.Map({
    product_filter: ''
})

export default (filters = initialState, action) => {
    switch (action.type) {
    case PRODUCT_FILTER:
        return filters.set('product_filter', action.product_filter)
    default:
        return filters
    }
}
