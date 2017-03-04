import { connect } from 'react-redux'
import ProductTableAndFilter from '../components/ProductTableAndFilter'
import {filterProductName, filterProductStocked} from '../actions/filters'

const mapStateToProps = (state) => {
	const filter = state.filters.get('productFilter')
	const stocked = state.filters.get('productStocked')
	const products = state.products.filter(p => p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (!stocked || (stocked && p.stocked)))
	return {
		products: products,
		productFilter: filter,
		productStocked: stocked,
		categoryFilter: state.filters.get('categoryFilter')
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleProductFilterChange: (e) => {
		dispatch(filterProductName(e.target.value))
	},
	handleStockedChange: (e) => {
		dispatch(filterProductStocked(e.target.checked))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableAndFilter)
