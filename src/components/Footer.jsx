import React from 'react'
import ElenaSign from '/assets/FirmaElena.jpg'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div>
        <div className='flex justify-between items-end mt-8 mb-1'>
            <img className='w-28 object-cover' src={ElenaSign} alt="" />
            <p>All rights reserved © Luciano & Lautaro Epifani 2024</p>
            <div className='flex items-center gap-2 text-xl'>
                <Icon icon="mdi:instagram"/>
                <Icon icon="ic:baseline-facebook"/>
                <Icon icon="mdi:twitter"/>
                <Icon icon="mdi:pinterest"/>
            </div>
        </div>
    </div>
  )
}

