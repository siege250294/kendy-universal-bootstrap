import React from 'react';
import PropTypes from 'prop-types';

const CategoryRow = ({ category }) => (
    <tr>
        <td colSpan="2">
            <strong>{category}</strong>
        </td>
    </tr>
);

CategoryRow.propTypes = {
    category: PropTypes.string,
};

export default CategoryRow;
