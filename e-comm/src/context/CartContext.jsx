import {createContext, useState} from 'react';

export const cartContext = createContext(); 

export function CartProvider({children}){
  const [cartItems, setCartItems]= useState([]);
  const addToCart=(product)=>{
    setCartItems((prevItems)=>[...prevItems, product]);
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