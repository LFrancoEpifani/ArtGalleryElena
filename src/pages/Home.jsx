import React from 'react'
import HomeGallery from '../components/HomeGallery'
import Buda from '../assets/Buda.jpg'
import AdanEva from '../assets/AdanEva.jpg'
import Elena from '../assets/Elena.jpg'
import Sevillana from '../assets/Sevillana.jpg'
import Llanto from '../assets/Llanto.jpg'
import HombreSentado from '../assets/HombreSentado.jpg'
import ToreroMandala from '../assets/ToreroMandala.jpg'
import Hand from '../assets/Hand.jpg'

import Header from '../components/Header'

export default function Home() {
    const photos = [
      Hand, Sevillana, ToreroMandala, Buda, AdanEva, HombreSentado, Llanto, Elena
    ]
  return (
    <main className='bg-[#E3E0D7]'>
    <Header/>
    <HomeGallery photos={photos}/>
    <div className='play absolute top-67 left-92 2xl:top-86 2xl:right-100 animate-slideInFromBottom font-normal text-[50px] text-black uppercase text-center tracking-wider border-h1'>
        <h1>Art Gallery Elena</h1>
    </div>
    </main>
  )
}
