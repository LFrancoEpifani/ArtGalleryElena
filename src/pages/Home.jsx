import React from 'react'
import HomeGallery from '../components/HomeGallery'
import Buda from '../assets/Buda.jpg'
import David from '../assets/David.jpg'
import Elena from '../assets/Elena.jpg'
import AdanEvan from '../assets/AdanEva.jpg'
import Sevillana from '../assets/Sevillana.jpg'
import Llanto from '../assets/Llanto.jpg'
import HombreSentado from '../assets/HombreSentado.jpg'
import ToreroMandala from '../assets/ToreroMandala.jpg'
import { Link } from 'react-router-dom'
import {Icon} from '@iconify/react'
import Header from '../components/Header'

export default function Home() {
    const photos = [
      David, Sevillana, ToreroMandala, Buda, AdanEvan, HombreSentado, Llanto, Elena
    ]
  return (
    <div className=''>
    <Header/>
    <HomeGallery photos={photos}/>
    <main className='play absolute top-67 left-92 animate-slideInFromBottom font-normal text-[50px] text-black uppercase text-center tracking-wider border-h1'>
        <h1>Art Gallery Elena</h1>
    </main>
    <div className='art-button flex justify-center items-center'>
      
      
    </div>
  
    </div>
  )
}
