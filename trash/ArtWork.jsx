// Artwork.jsx
import React from 'react';

export default function Artwork({ name, price, size, image }) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="object-contain h-48 w-full" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-md">{size}</p>
      <p className="text-md font-semibold">{price}</p>
    </div>
  );
};

