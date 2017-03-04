import React from 'react'

export default ({product}) => (
	<tr>
		<td><span style={{ color: product.stocked ? 'black' : 'red' }}>{ product.name }</span></td>
		<td>{ product.price }</td>
	</tr>
)