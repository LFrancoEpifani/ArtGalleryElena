import React from 'react';
import Header from '../components/Header';
import { Icon } from '@iconify/react'

export default function Collections({name, price, size, image}) {
  return (
    <div className='montserrat'>
      <Header/>
      <div className='flex items-center justify-between my-10 ml-4'>
          <div className=''>
          <h2 className='font-bold text-[30px]'>Discover Timless Art</h2>
          <p className='text-[12px] text-[#747474]'>By Art Gallery Elena</p>
          </div>
        <div className='flex items-center'>
          <button className='flex items-center border gap-1 border-black w-56 h-8 m-2 p-2 rounded-sm'>
            Filter
            <Icon icon="fluent:filter-12-regular"/>
          </button>
          <button className='flex items-center border gap-1 border-black w-56 h-8 m-2 p-2 rounded-sm'>
            Sort
            <Icon icon="lucide:arrow-up-down"/>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <img src={image} alt={name} className="object-contain h-48 w-full" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-md">{size}</p>
      <p className="text-md font-semibold">{price}</p>
    </div>
    </div>
  )
}

