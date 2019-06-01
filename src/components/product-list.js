import React from 'react'

const products = [
  { id: 1, name: 'Galaxy S10' },
  { id: 2, name: 'P30 Pro' },
  { id: 3, name: 'IPhone 10 Plus' }
]

const style = { color: 'green', fontSize: 30 }

const ProductionList = props => (
  <div className="container">
    <ul>
      {products.map(product => (
        <li key={product.id} style={style}>
          {product.name}
        </li>
      ))}
    </ul>
  </div>
)

export default ProductionList
