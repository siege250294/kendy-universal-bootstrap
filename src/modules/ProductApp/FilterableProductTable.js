import { connect } from 'react-redux';
import ProductTableAndFilter from '../../components/Product/ProductTableAndFilter';
import { filterProductName, filterProductStocked } from './actions';

const mapStateToProps = ({ productState }) => {
    const filter = productState.get('filter').name;
    const stocked = productState.get('filter').stocked;
    const products = productState
        .get('products')
        .filter(
            (p) =>
                p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 &&
                (!stocked || (stocked && p.stocked))
        )
        .toJS();
    return {
        products: products,
        productFilter: filter,
        productStocked: stocked,
        categoryFilter: productState.get('filter').category,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleProductFilterChange: (e) => {
        dispatch(filterProductName(e.target.value));
    },
    handleStockedChange: (e) => {
        dispatch(filterProductStocked(e.target.checked));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(
    ProductTableAndFilter
);
