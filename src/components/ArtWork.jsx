import React from 'react'
import { Link } from 'react-router-dom';

export default function ArtWork({ name, price, size, image, id}) {

  return (
    <div className='flex flex-col items-center montserrat col-span-2 mx-4'>
    <Link to={`/art/${id}`}>
      <img src={image} alt={name} className="object-contain w-[42vh] border-8 border-black"/>
      <div className="text-center">
        <h2 className="text-lg font-normal my-2">{name}</h2>
        <p className="text-xs">{size}</p>
        <p className="text-md font-semibold">{price}</p>
      </div>
      </Link>
    </div>
  );
}
