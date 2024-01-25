import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import artworks from '../data/artworks.json'
import { Icon } from '@iconify/react';
import Header from '../components/Header';

export default function ArtDetails() {

  function randomPaint(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0 ){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = 
      [array[randomIndex], array[currentIndex]];
    } 

    return array;
  }

  const {artId} = useParams();
  const [art, setArt] = useState(null);
  const [randomArts, setRandomArts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() =>{
    const selectedArt = artworks.find((item) => item.id.toString() === artId);
    setArt(selectedArt)

    setSelectedImage(selectedArt ? selectedArt.image : null);

    const paintRandom = randomPaint(artworks.filter((item) => item.id.toString() !== artId));
    setRandomArts(paintRandom.slice(0, 5));

  }, [artId]);

 
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

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
      <div className='flex p-10 justify-evenly items-center'>
      <div className='flex flex-col items-start gap-3'>
        <img className='h-12 w-12 object-cover cursor-pointer' src={art.image} alt="" onClick={() => handleImageClick(art.image)}  />
        <img className='h-12 w-12 object-cover cursor-pointer' src={art.house} alt="" onClick={() => handleImageClick(art.house)}  />
      </div>
      <div className='bg-black'>
        <img className='object-contain w-90 shadow-xl border border-black' src={selectedImage} alt="" />
      </div>
       <div className=''>
        <h2 className='font-bold text-2xl my-2'>Elena</h2>
        <div className='my-2'>
          <p className='text-lg'>{art.name}</p>
          <p className='text-[10px] text-gray-500'>{art.description}</p>
        </div>
        <p className='mb-8'>{art.size}</p>
       <div>
       <hr className='border border-gray-300' />
        <p className='my-3 font-semibold'>{art.price}</p>
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
    <div className='px-[4vw] my-12'>
        <h2 className='font-bold text-2xl my-8'>More ArtWorks</h2>
        <div className='flex justify-center items-center gap-8'>
          {randomArts.map((randomArt) => (
            <div key={randomArt.id}>
              <img className='object-contain w-50 shadow-xl border border-black' src={randomArt.image} alt={randomArt.name} />
              <div className="text-start my-2">
                <h2 className="text-lg font-semibold">{randomArt.name}</h2>
                <p className="text-[12px] italic text-gray-500">{randomArt.description}</p>
                <p className="text-xs text-gray-800 font-medium">{randomArt.size}</p>
                <p className="text-sm font-semibold my-2">{randomArt.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

