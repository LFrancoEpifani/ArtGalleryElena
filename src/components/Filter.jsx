/* eslint-disable react/prop-types */
import React from 'react'
import { useState, useId } from 'react';

export default function Filter({ setFilters }) {


    const [minPrice, setMinPrice] = useState(0)

    const minPriceFilterId = useId()
 

    const handleChangeMinPrice = (event) =>{
        const newPrice = parseInt(event.target.value);
        setMinPrice(newPrice);
        setFilters(filters => ({ ...filters, minPrice: newPrice }));
    }

  return (
   <div className='flex flex-col'>
     <div>{minPrice}€</div>
    <div className='flex items-center justify-center gap-2 2xl:gap-6 2xl:p-2'>
         <input 
        type="range" 
        id={minPriceFilterId}
        min="0" 
        max="5000" 
        onChange={handleChangeMinPrice} 
      />
      
    </div>
   </div>
  )
}

