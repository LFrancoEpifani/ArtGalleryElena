import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import artworks from '../data/artworks.json'
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { useCart } from '../CartContext'; 

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
  

  const {t} = useTranslation('common');

  const {artId} = useParams();
  const [art, setArt] = useState(null);
  const [randomArts, setRandomArts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() =>{
    
    const selectedArt = artworks.find((item) => item.id.toString() === artId);
    setArt(selectedArt)

    setSelectedImage(selectedArt ? selectedArt.image : null);

    const paintRandom = randomPaint(artworks.filter((item) => item.id.toString() !== artId));
    setRandomArts(paintRandom.slice(0, 12));

  }, [artId]);

 
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); 
  };

  if(!art){
    return <div className='text-3xl'>Loading...</div>
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };


  const { addToCart } = useCart();

const handleAddToCart = () => {
  const itemToAdd = {
    id: art.id, // Asegúrate de que art tiene un id único
    name: art.name,
    price: art.price,
    image: selectedImage,
    quantity: 1, // Este valor se ajustará automáticamente si el item ya está en el carrito
  };
  addToCart(itemToAdd);
};


  return (

      <div className='montserrat'>
            <Header/>
        <Link to={"/collections"}>
        <p className='flex items-center text-sm p-4'>
          <Icon icon="ep:arrow-left-bold"/>
          Go Back
        </p>
        </Link>
      <div className='lg:flex p-10 justify-evenly items-center'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 items-center'>
        <div className='bg-black'>
          <img className='object-contain w-90 shadow-xl border border-black 2xl:w-100 2xl:h-100vh' src={selectedImage} alt="" />
        </div>
        {art.image && art.house ? (
            <div className='flex lg:flex-col items-start gap-3'>
              <img className='h-12 w-12 object-cover cursor-pointer 2xl:h-20 2xl:w-20' src={art.image} alt="" onClick={() => handleImageClick(art.image)}  />
              <img className='h-12 w-12 object-cover cursor-pointer 2xl:h-20 2xl:w-20' src={art.house} alt="" onClick={() => handleImageClick(art.house)}  />
            </div>
          ) : (
            <img className='h-12 w-12 object-cover cursor-pointer 2xl:h-20 2xl:w-20' src={art.image || art.house} alt="" onClick={() => handleImageClick(art.image || art.house)}  />
          )}
      </div>
       <div className='my-4'>
        <h2 className='font-bold text-2xl my-2 2xl:text-4xl'>Elena</h2>
        <div className='my-2'>
          <p className='text-lg 2xl:text-2xl'>{art.name}</p>
          <p className='text-[10px] text-gray-500 2xl:text-[15px] 2xl:my-4'>{art.description}</p>
        </div>
        <p className='mb-8 2xl:text-2xl'>{art.size}</p>
       <div>
       <hr className='border border-gray-300' />
        <p className='my-3 font-semibold 2xl:text-2xl'>{art.price}€</p>
        <hr className='border border-gray-300' />
       </div>
        <div className='flex flex-col gap-4 my-14'>
          <button onClick={handleAddToCart} className='bg-black text-white  py-4 lg:py-2 lg:px-14 rounded-full 2xl:py-4 2xl:text-xl'>
              {t("purchase")}
          </button>
<<<<<<< HEAD
=======
          {/* <button className='bg-white text-black border-black border py-4 lg:py-2 lg:px-14 rounded-full 2xl:py-4 2xl:text-xl'>
          {t("makeOffer")}
          </button> */}
>>>>>>> 4343038b80602c03d81f307313c98a475a8dc20f
        </div>
       </div>
    </div>
    <div className='px-[14vw] my-12 2xl:my-30'>
        <h2 className='font-bold text-2xl my-8'>{t("moreArtworks")}</h2>
          <div className='grid grid-cols-2 gap-2 items-start justify-start lg:grid-cols-4 lg:justify-center lg:items-center'>
            {randomArts.map((randomArt) => (
              <Link key={randomArt.id} to={`/art/${randomArt.id}`} onClick={goToTop}>
                <div key={randomArt.id}>
                  <img className='object-contain w-35 lg:w-50 shadow-xl shadow-gray-300 rounded-sm' src={randomArt.image} alt={randomArt.name} />
                </div>
              </Link>
            ))}
          </div>
    
      </div>
    </div>
  )
}

