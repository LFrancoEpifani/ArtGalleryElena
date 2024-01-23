import React from 'react';

export default function HomeGallery({ photos }) {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-y-12'>
        {photos.map((photo, index) => {
            
            const animationClass = index < 4 ? 'animate-slideInFromLeft border-b-2 border-black' : 'animate-slideInFromRight border-t-2 border-black';
            return (
                <div key={index} className={`relative col-span-1 w-full h-[225px] object-cover ${animationClass}`}>
                    <img
                        src={photo}
                        alt={`Imagen ${index + 1}`}
                        className='w-full h-full object-cover'
                    />
                    <div className="absolute top-0 left-0 w-full h-[225px] bg-black bg-opacity-35"></div>
                </div>
            );
        })}
    </div>
  );
}
