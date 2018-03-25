import React from 'react';
import PropTypes from 'prop-types';

const ProductStockedInput = ({ isStocked, onStockedChange }) => (
    <p>
        <input type="checkbox" checked={isStocked} onChange={onStockedChange} />{' '}
        Only show products in stock
    </p>
);

ProductStockedInput.propTypes = {
    isStocked: PropTypes.bool,
    onStockedChange: PropTypes.func,
};

export default ProductStockedInput;
