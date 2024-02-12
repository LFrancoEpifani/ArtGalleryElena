import React from 'react'
import ElenaSign from '/assets/FirmaElena.jpg'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div>
        <div className='h-[20vh] flex  justify-between  items-end md:mt-8 pr-2 md:pb-2'>
            <img className='w-28 object-cover' src={ElenaSign} alt="" />
            <p className='hidden md:block'>All rights reserved © Luciano & Lautaro Epifani 2024.</p>
            <div className='flex items-center gap-2 text-xl'>
                <Icon icon="mdi:instagram"/>
                <Icon icon="ic:baseline-facebook"/>
                <Icon icon="mdi:twitter"/>
                <Icon icon="mdi:pinterest"/>
            </div>
        </div>
        <p className='text-[10px] mt-2 mb-1 block md:hidden pl-2'>All rights reserved © Luciano & Lautaro Epifani 2024.</p>
    </div>
  )
}

