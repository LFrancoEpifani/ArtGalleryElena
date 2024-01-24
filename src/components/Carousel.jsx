import React from 'react';
import Slider from 'react-slick';


export default function Carousel({ photos }) {
  const settings = {
    arrows: null,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    cssEase: "linear",
    centerMode: true,
    lazyLoad: true,
    responsive: true,
  };

  

  return (
    <Slider {...settings}>
      {photos.map((image, index) => (
        <div key={index} className='mt-10 px-1'>
          <img className='object-cover w-full h-[280px] m-auto border border-black' src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};


