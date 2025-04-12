import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../context/CartContext'
import '../styles/CartPage.css'

function CartPage() {
  const {cartItems}= useContext(cartContext);

  return(
    <div className="cart-page">
        <h2>Ur Cart</h2>
        {cartItems.length===0? 
            (<p>Ur cart is empty</p>):
            (
                <ul>
                    { cartItems.map( (items, index)=> (
                        <div className="cart-item" key={index}>
                            <img src={items.image} alt={items.title} style={{ width: '100px', height: '100px' }} />
                            <div classNme="item-details">
                                <h4>{items.title}</h4>
                                <p>Price:  ${items.price}</p>
                            </div>
                            <button className="remove-btn">Remove</button>

                        </div>
                    ))

                    }
                </ul>
            )
        }
    </div>
  );
}

export default CartPage;
