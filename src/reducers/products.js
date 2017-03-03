import Immutable from 'immutable'

const initialState = Immutable.List([])

export default (products = initialState, action) => {
	switch (action.type) {
	default:
		return products
	}
}
