import React from 'react';
import PropTypes from 'prop-types';
import ProductFilterInput from './ProductFilterInput';
import ProductStockedInput from './ProductStockedInput';
import ProductTable from './ProductTable';

const ProductTableAndFilter = (props) => (
    <div>
        <ProductFilterInput
            productFilter={props.productFilter}
            onProductFilterChange={props.handleProductFilterChange}
        />
        <ProductStockedInput
            productStocked={props.productStocked}
            onStockedChange={props.handleStockedChange}
        />
        <ProductTable products={props.products} />
    </div>
);

ProductTableAndFilter.propTypes = {
    productFilter: PropTypes.string,
    handleProductFilterChange: PropTypes.func,
    productStocked: PropTypes.bool,
    handleStockedChange: PropTypes.func,
    products: PropTypes.array,
};

export default ProductTableAndFilter;
