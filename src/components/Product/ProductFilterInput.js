import React from 'react';
import PropTypes from 'prop-types';

const ProductFilterInput = ({ productFilter, onProductFilterChange }) => (
    <input type="text" value={productFilter} onChange={onProductFilterChange} />
);

ProductFilterInput.propTypes = {
    productFilter: PropTypes.string,
    onProductFilterChange: PropTypes.func,
};

export default ProductFilterInput;
