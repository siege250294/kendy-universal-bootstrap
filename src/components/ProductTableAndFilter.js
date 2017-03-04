import React from 'react'
import ProductFilterInput from './ProductFilterInput'
import ProductStockedInput from './ProductStockedInput'
import ProductTable from './ProductTable'
import style from '../stylus/main.styl'

export default (props) => (
	<div className={style.products}>
		<ProductFilterInput productFilter={props.productFilter} onProductFilterChange={props.handleProductFilterChange} />
		<ProductStockedInput productStocked={props.productStocked} onStockedChange={props.handleStockedChange} />
		<ProductTable products={props.products} />
	</div>
)