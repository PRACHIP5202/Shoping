import React from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
  return (
    <div>
        <Link to='/products/1'>click here to see product 1</Link>
        <Link to='/products/2'>click here to see product 2</Link>

      
    </div>
  )
}

export default ProductList
