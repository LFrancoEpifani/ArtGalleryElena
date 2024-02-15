/* eslint-disable react/prop-types */
// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);
      if (itemExists) {
        return prevItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
      
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    items: cartItems,
    addToCart,
    clearCart,
    isOpen,
    toggleCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
