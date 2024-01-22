import React from 'react'

export default function HomeGallery({photos}) {
  return (
    <div className='grid grid-cols-5'>
        {photos.map((photo, index) => (
            <div key={index} className="w-full h-full relative">
                <img
                    src={photo}
                    alt={`Imagen ${index + 1}`}
                    className='w-full h-[528px] object-cover object-center'
                />
                <div className="absolute top-0 left-0 w-full h-[528px] bg-black bg-opacity-45">
                </div>
            </div>
        ))}
    </div>
  )
}

