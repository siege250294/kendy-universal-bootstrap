import { connect } from 'react-redux'
import ProductTable from '../components/ProductTable'
import {filterProduct} from '../actions/filters'

const mapStateToProps = (state) => {
    const filter = state.filters.get('product_filter')
    const products = state.products.filter(p => p.name.indexOf(filter) !== -1)
    return {
        products: products,
        filter: filter
    }
}

const mapDispatchToProps = (dispatch) => ({
    onProductFilterChange: (filter) => {
        dispatch(filterProduct(filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)
