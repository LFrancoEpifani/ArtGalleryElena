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
  };

  

  return (
    <Slider {...settings}>
      {photos.map((image, index) => (
        <div key={index} className='mt-8 px-1'>
          <img className='object-cover w-full h-[280px] m-auto border border-black' src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};


