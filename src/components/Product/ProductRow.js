import React from 'react';
import PropTypes from 'prop-types';

const ProductRow = ({ product }) => (
    <tr>
        <td>
            <span style={{ color: product.stocked ? 'black' : 'red' }}>
                {product.name}
            </span>
        </td>
        <td>{product.price}</td>
    </tr>
);

ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductRow;
