import React from 'react'

export default ({isStocked, onStockedChange}) => (
	<p><input type="checkbox" checked={isStocked} onChange={onStockedChange}/> Only show products in stock</p>
)