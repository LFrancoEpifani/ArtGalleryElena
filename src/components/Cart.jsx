
import { useCart } from '../CartContext';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';


export default function Cart({ toggleCart }) {

const { items, clearCart } = useCart();

return (

       
    <div className="fixed right-5 top-5 w-72 bg-white p-5 rounded-lg shadow-md">
        <button onClick={toggleCart} className='absolute top-0 right-0 p-1 text-2xl'>
            <Icon icon="ei:close-o" /> 
        </button> 
    <ul>
      {items.map((item) => (
        <li key={item.id} className="flex mb-4 items-center">
          <img src={item.image} alt={item.name} className="w-12 h-12 mr-4 rounded" />
          <div>
            <strong>{item.name}</strong> - {item.price}€<br />
            <small className="text-gray-500">
              Cantidad: {item.quantity}
            </small>
          </div>
        </li>
      ))}
     </ul>
      <div className='border-b border-gray-400'>
        Total: {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}€
      </div>
    <button onClick={clearCart} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded focus:outline-none focus:shadow-outline">
      Delete All
    </button>
  </div>
   
);

  
}

