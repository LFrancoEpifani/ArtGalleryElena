import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';
import Logo from '/assets/LogoElenaNew.jpg'
import PaintIcon from '/assets/CollectionIcon.png'
import GalleryIcon from '/assets/GalleryIcon.jpg'
import AboutmeIcon from '/assets/AboutMeIcon.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function Burger() {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    }
    
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className='block md:hidden z-50'>
       <button className='flex items-center' onClick={handleOpenMenu}>
         <Icon className='text-2xl' icon="ic:baseline-menu" />
       </button>
       {isOpen && (
            <div className='fixed top-0 left-0 bg-black h-screen w-full bg-opacity-45'>
            <nav className='fixed top-0 left-0 w-3/4 h-screen bg-white'>
            <div className='flex items-center my-2'>
                <button className='absolute top-3 right-3' onClick={handleOpenMenu}>
                    <Icon className='text-3xl' icon="ic:round-close"/>
                </button>
               <div className='flex justify-center items-center'>
                 <img className='w-10' src={Logo} alt="" />
                 <p className="font-bold font-cormorant text-xl">ELENA</p>
               </div>

            </div>
            <hr className='border border-black' />
            <ul className='flex flex-col justify-center items-center my-10 gap-4'>
                
                <Link
                className={`${
                    currentPath == "/" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/"}
                >
                    <li className='flex items-center gap-3 text-lg'>
                        <Icon className='text-2xl' icon="iconamoon:home-thin" />
                        HOME    
                    </li>
                  
                </Link>
                <hr className='w-60 border-gray-400' />
               <Link 
                className={`${
                    currentPath == "/collections" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/collections"}
                >
                <li className='flex items-center gap-3 text-lg'>
                    <img className='w-6' src={PaintIcon} alt="" />
                    COLLECTIONS    
                </li>
               </Link>
               <hr className='w-60 border-gray-400' />
                <Link  className={`${
                    currentPath == "/about" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/about"}
                >
                    <li className='flex items-center gap-3 text-lg'>
                        <img className='w-6' src={AboutmeIcon} alt="" />
                        ABOUT ME    
                    </li>
                </Link>
                <hr className='w-60 border-gray-400' />
               
            </ul>
                <div className='absolute bottom-2 left-2 flex items-start gap-2'>
                    <Icon className='text-lg' icon="bi:instagram"/>
                    <p className='text-sm font-bold'>Art Gallery Elena</p>
                </div>
        </nav>
        </div>
       )
       
       }
    </div>
  )
}

