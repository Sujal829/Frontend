import React, { useEffect, useState } from 'react'
import Store from './store'
import { addToCart } from './Actions';

function FluxExample() {
    const [cart, setcart] = useState(Store.getCart());

    useEffect(() => {
      Store.addChangeListener(()=>{
        setcart([...Store.getCart()])
      });
      console.log(Store.getListener());
    }, []);


    const handleAdd =()=> addToCart('Apple')
  return (
    <div>
      <button onClick={handleAdd}>
        Add Apple
      </button>
      <h3>Cart Items:</h3>
      {cart.map((item, i)=> <p key={i}>{item}</p>)}
    </div>
  )
}

export default FluxExample
