import React from 'react'
import HomeGallery from '../components/HomeGallery'
import Buda from '../assets/Buda.jpg'
import Horse from '../assets/Horse.jpg'
import Elena from '../assets/Elena.jpg'
import Sevillana from '../assets/Sevillana.jpg'
import Llanto from '../assets/Llanto.jpg'
import HombreSentado from '../assets/HombreSentado.jpg'
import ToreroMandala from '../assets/ToreroMandala.jpg'
import BigPaint from '../assets/BigPaint.png'

import Header from '../components/Header'

export default function Home() {
    const photos = [
      BigPaint, Sevillana, ToreroMandala, Buda, Horse, HombreSentado, Llanto, Elena
    ]
  return (
    <main className=''>
    <Header/>
    <HomeGallery photos={photos}/>
    <div className='play absolute top-69 left-92 2xl:top-86 2xl:right-100 animate-slideInFromBottom font-normal text-[50px] text-black uppercase text-center tracking-wider border-h1'>
        <h1>Art Gallery Elena</h1>
    </div>
    </main>
  )
}
