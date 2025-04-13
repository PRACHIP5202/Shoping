import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../context/CartContext'
import '../styles/CartPage.css'
import { useNavigate } from 'react-router-dom';


function CartPage() {
    const navigate = useNavigate(); 
  const {cartItems, removeFromCart, incrementQty, decrementQty}= useContext(cartContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price* item.quantity, 0);
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
                            <div className="item-details">
                                <h4>{items.title}</h4>
                                <p>Price:  ${items.price}</p>

                                <button onClick={()=> decrementQty(items.id)}>-</button>
                                <p>Quantity: {items.quantity}</p>
                                <button onClick={()=> incrementQty(items.id)}>+</button>
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
        {cartItems.length > 0 && (
            <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        )}
        
    </div>
  );
}
export default CartPage;
