import React from 'react';
import Header from '../components/Header';
import { Icon } from '@iconify/react'
import Artwork from '../components/ArtWork';
import artworksData from '../data/artworks.json'
import { useState, useEffect } from 'react';

export default function Collections() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    setArtworks(artworksData);
  }, []);

  return (
    <div>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artworks.map((artwork) => (
        <Artwork key={artwork.id} {...artwork} />
      ))}
    </div>
    </div>
  )
}

