import React from 'react'
import ProductFilterInput from './ProductFilterInput'
import ProductStockedInput from './ProductStockedInput'
import ProductTable from './ProductTable'

export default (props) => (
	<div>
		<ProductFilterInput productFilter={props.productFilter} onProductFilterChange={props.handleProductFilterChange} />
		<ProductStockedInput productStocked={props.productStocked} onStockedChange={props.handleStockedChange} />
		<ProductTable products={props.products} />
	</div>
)