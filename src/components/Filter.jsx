import React from 'react'
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useState } from 'react';

export default function Filter({ setFilters }) {


    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) =>{
        const newPrice = parseInt(event.target.value);
        setMinPrice(newPrice);
        setFilters(filters => ({ ...filters, minPrice: newPrice }));
    } 

  return (
    <div className='flex items-center justify-center gap-2 2xl:gap-6 2xl:p-2'>
         <input 
        type="range" 
        min="0" 
        max="10000" 
        onChange={handleChangeMinPrice} 
      />
      <div>{minPrice}€</div>
    </div>
  )
}

