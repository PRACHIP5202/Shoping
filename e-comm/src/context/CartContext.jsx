import React, {useState, createContext} from 'react'

export const CartContext = createContext()

function CartProvider({children}) {
    const [cart, setCart] = useState([])    ;
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

  return (
    <div>
      <CartContext.Provider value={{cart,addToCart}}>
        {children}  
      </CartContext.Provider>
    </div>
  )
}

export default CartContext
