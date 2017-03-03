import React from 'react'

export default ({products}) => {
    return (
        <div>{ products.map(p => (
            <p key={p.name}>{p.name}</p>
        ))}</div>
    )
}
