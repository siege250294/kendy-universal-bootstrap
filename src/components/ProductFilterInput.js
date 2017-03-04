import React from 'react'

export default ({productFilter, onProductFilterChange}) => (
	<input type="text" value={productFilter} onChange={onProductFilterChange} />
)