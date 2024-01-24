import React from 'react';
import Slider from 'react-slick';


export default function Carousel({ photos }) {
  const settings = {
    nextArrow: false,
    prevArrow: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    cssEase: "linear",
  };

  

  return (
    <Slider {...settings}>
      {photos.map((image, index) => (
        <div key={index} className='mt-10'>
          <img className='object-cover w-[350px] h-[250px] m-auto' src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};


