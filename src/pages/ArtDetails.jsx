import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import artworks from '../data/artworks.json'
import { Icon } from '@iconify/react';
import Header from '../components/Header';

export default function ArtDetails() {

  const {artId} = useParams();
  const [art, setArt] = useState(null);
  

  useEffect(() =>{
    const selectedArt = artworks.find((item) => item.id.toString() === artId);
    setArt(selectedArt)
  }, [artId, artworks]);

  if(!art){
    return <div className='text-3xl'>Loading...</div>
  }

  return (

      <div className='montserrat'>
            <Header/>
        <Link to={"/collections"}>
        <p className='flex items-center text-sm p-4'>
          <Icon icon="ep:arrow-left-bold"/>
          Go Back
        </p>
        </Link>
      <div className='flex p-20 justify-evenly items-center'>
      <div className='flex flex-col items-start gap-3 object-cover w-12'>
        <img src={art.image} alt="" />
        <img src={art.image} alt="" />
        <img src={art.image} alt="" />
        <img src={art.image} alt="" />
        <img src={art.image} alt="" />
      </div>
      <div className='bg-black'>
        <img className='object-contain w-90 shadow-xl border border-black' src={art.image} alt="" />
      </div>
       <div className=''>
        <h2 className='font-bold text-2xl my-2'>Elena</h2>
        <div className='my-4'>
          <p className='text-lg'>{art.name}</p>
          <p className='text-[10px] text-gray-500'>{art.description}</p>
        </div>
        <p className='my-8'>{art.size}</p>
       <div>
       <hr className='border border-gray-300' />
        <p className='my-2 font-semibold'>{art.price}</p>
        <hr className='border border-gray-300' />
       </div>
        <div className='flex flex-col gap-4 my-14'>
          <button className='bg-black text-white py-2 px-14 rounded-full'>
              Purchase
          </button>
          <button className='bg-white text-black border-black border py-2 px-14 rounded-full'>
            Make an offer
          </button>
        </div>
       </div>
    </div>
      </div>
  )
}

