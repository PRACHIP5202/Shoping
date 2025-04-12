import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../context/CartContext'

function CartPage() {
  const {cartItems}= useContext(cartContext);

  return(
    <div>
        <h2>My Cart</h2>
        {cartItems.length===0? 
            (<p>Ur cart is empty</p>):
            (
                <ul>
                    { cartItems.map( (items, index)=> (
                        <li key={index}>
                            <img src={items.image} alt={items.title} style={{ width: '100px', height: '100px' }} />
                            <h1>{items.title}</h1>
                            <p>Price:  ${items.price}</p>

                        </li>
                    ))

                    }
                </ul>
            )
        }
    </div>
  );
}

export default CartPage;
