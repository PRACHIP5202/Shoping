import {createContext, useState} from 'react';

export const cartContext = createContext(); 

export function CartProvider({children}){
  const [cartItems, setCartItems]= useState([]);

  const addToCart=(product)=>{
    const existingProd = cartItems.find((item) => item.id === product.id);
    if(existingProd){
      setCartItems((prevItems) => 
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
    else{
      setCartItems((prevItems) => [...prevItems, {...product, quantity: 1}]);
    }

    
  }

  const removeFromCart=(productId)=>{
    setCartItems((prevItems)=> prevItems.filter(item => item.id !== productId));
  }
  const value={
    cartItems,
    addToCart,
    removeFromCart 
  };
  return(
    <cartContext.Provider value={value}> 
      {children}
    </cartContext.Provider>
  );
}