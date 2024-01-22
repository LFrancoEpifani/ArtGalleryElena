import React from 'react'

export default function HomeGallery({photos}) {
  return (
    <div className='grid grid-cols-5'>
        

        {photos.map((photo, index) => (
            <div key={index} className='relative col-span-1 w-full h-[495px]'>
                <img
                    src={photo}
                    alt={`Imagen ${index + 1}`}
                    className='w-full h-full object-cover object-center'
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
            </div>
        ))}
    </div>
  );
}
