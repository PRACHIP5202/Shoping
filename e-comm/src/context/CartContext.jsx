import {createContext, useState} from 'react';

export const cartContext = createContext(); 

export function CartProvider({children}){
  const [cartItems, setCartItems]= useState([]);
  const addToCart=(product)=>{
    setCartItems((prevItems)=>[...prevItems, product]);
  }
  const value={
    cartItems,
    addToCart
  };
  return(
    <cartContext.Provider value={value}> 
      {children}
    </cartContext.Provider>
  );
}