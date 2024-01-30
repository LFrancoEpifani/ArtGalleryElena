import React from 'react'
import ElenaSign from '/assets/FirmaElena.jpg'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div>
        <div className='flex justify-between items-end mt-8 mb-1 2xl:text-[20px]'>
            <img className='w-28 2xl:w-38 2xl:m-2 object-cover' src={ElenaSign} alt="" />
            <p className='2xl:font-bold 2xl:m-2'>All rights reserved © Luciano & Lautaro Epifani 2024</p>
            <div className='flex items-center gap-2 text-xl 2xl:text-3xl 2xl:m-1'>
                <Icon icon="mdi:instagram"/>
                <Icon icon="ic:baseline-facebook"/>
                <Icon icon="mdi:twitter"/>
                <Icon icon="mdi:pinterest"/>
            </div>
        </div>
    </div>
  )
}

