import React from 'react'
import HomeGallery from '../components/HomeGallery'
import Buda from '../assets/Buda.jpg'
import David from '../assets/David.jpg'
import Elena from '../assets/Elena.jpg'
import AdanEvan from '../assets/AdanEva.jpg'
import Sevillana from '../assets/Sevillana.jpg'
import Hand from '../assets/Hand.jpg'
import { Link } from 'react-router-dom'
import {Icon} from '@iconify/react'
import Header from '../components/Header'

export default function Home() {
    const photos = [
      David, Sevillana, Elena, Buda, AdanEvan
    ]
  return (
    <div className=''>
    <Header/>
    <HomeGallery photos={photos}/>
    <main className='play font-normal welcome text-[70px] text-white uppercase text-center tracking-wider border-h1'>
        <h1>Art Gallery</h1>
        <p>Elena</p>
    </main>
    <div className='art-button flex justify-center items-center'>
      <Link to={"/collections"}>
      <button className='font-medium ntr w-32 h-9 uppercase text-[14px] flex items-center justify-center border border-black bg-white text-black'>
        See my art
      </button>
      </Link>
      
    </div>
    <div className='absolute bottom-0 right-0 text-white flex items-center justify-center m-2 gap-2'>
    <p className='montserrat font-bold text-xs'>Art Gallery Elena</p>
    <Icon className='text-xl' icon="mdi:instagram" />
    </div>
    <hr />
    </div>
  )
}
