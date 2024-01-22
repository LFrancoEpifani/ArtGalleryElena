import React from 'react'
import HomeGallery from '../components/HomeGallery'
import Buda from '../assets/Buda.jpg'
import David from '../assets/David.jpg'
import Elena from '../assets/Elena.jpg'
import AdanEvan from '../assets/AdanEva.jpg'
import Sevillana from '../assets/Sevillana.jpg'
import Hand from '../assets/Hand.jpg'
import {Icon} from '@iconify/react'

export default function Home() {
    const photos = [
        David, Sevillana, Elena, Buda, AdanEvan
    ]
  return (
    <div className=''>
    <HomeGallery photos={photos}/>
    <main className='ntr welcome text-[70px] text-white uppercase text-center tracking-wider'>
        <h1>Welcome</h1>
        <p>to</p>
        <p>Art Gallery</p>
    </main>
    <div className='art-button'>
      <button>See my art</button>
    </div>
    <div className='absolute bottom-0 right-0 text-white flex items-center justify-center m-2 gap-2'>
    <p className='montserrat font-bold text-xs'>Art Gallery Elena</p>
    <Icon className='text-xl' icon="mdi:instagram" />
    </div>
    </div>
  )
}
