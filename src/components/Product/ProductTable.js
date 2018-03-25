import React from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';
import CategoryRow from './CategoryRow';

const ProductTable = ({ products }) => {
    const rows = [];
    let lastCategory = '';
    products.forEach((p) => {
        if (lastCategory !== p.category) {
            lastCategory = p.category;
            rows.push(
                <CategoryRow key={lastCategory} category={lastCategory} />
            );
        }
        rows.push(<ProductRow product={p} key={p.name} />);
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.size === 0 ? (
                    <tr>
                        <td>No product found.</td>
                    </tr>
                ) : (
                    rows
                )}
            </tbody>
        </table>
    );
};

ProductTable.propTypes = {
    products: PropTypes.array,
};

export default ProductTable;
