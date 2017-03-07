import React from 'react'
import { Link, IndexLink } from 'react-router'
import FilterableProductTable from '../containers/FilterableProductTable'

export default (props) => (
	<div>
		<ul>
			<li><IndexLink to="/">Index</IndexLink></li>
			<li><Link to="/think-in-react">Thinking in React</Link></li>
		</ul>
		{ props.children }
	</div>
)
