import React from 'react'
import { useProductContext } from '../hooks/useProductContext'

function ProductList() {
    const  { products } = useProductContext();
  return (
    <div>
        <ul>
        {products.map((item)=><li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}

export default ProductList