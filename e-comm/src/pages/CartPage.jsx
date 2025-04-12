import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../context/CartContext'
import '../styles/CartPage.css'

function CartPage() {
  const {cartItems, removeFromCart}= useContext(cartContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
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
                            <button className="remove-btn" onClick={()=> removeFromCart(items.id)}>Remove</button>

                        </div>
                    ))
                    

                    }
                        {cartItems.length > 0 && (
                        <div style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                          Total: ₹{totalAmount}
                        </div>
                         )}
                </ul>
            )
        }
    </div>
  );
}

export default CartPage;
