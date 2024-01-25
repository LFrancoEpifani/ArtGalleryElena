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
    <div className='block md:hidden'>
       <button className='flex items-center' onClick={handleOpenMenu}>
         <Icon className='text-2xl' icon="ic:baseline-menu" />
       </button>
       {isOpen && (
            <div>
            <nav className='absolute top-0 left-0 w-full h-screen z-20 bg-white'>
            <div className='flex items-center my-2'>
                <button className='absolute top-3 right-3' onClick={handleOpenMenu}>
                    <Icon className='text-3xl' icon="ic:round-close"/>
                </button>
                <img className='w-10' src={Logo} alt="" />
            </div>
            <hr className='border border-black' />
            <ul className='flex flex-col justify-center items-center my-20 gap-8'>
                
                <Link
                className={`${
                    currentPath == "/" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/"}
                >
                    <li className='flex items-center gap-2 text-xl'>
                        <Icon className='text-2xl' icon="iconamoon:home-thin" />
                        HOME    
                    </li>
                
                </Link>
                
               <Link 
                className={`${
                    currentPath == "/collections" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/collections"}
                >
                <li className='flex items-center gap-2 text-xl'>
                    <img className='w-6' src={PaintIcon} alt="" />
                    COLLECTIONS    
                </li>
               </Link>
               
                <Link  className={`${
                    currentPath == "/about" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/about"}
                >
                    <li className='flex items-center gap-2 text-xl'>
                        <img className='w-6' src={AboutmeIcon} alt="" />
                        ABOUT ME    
                    </li>
                </Link>
                <Link  className={`${
                    currentPath == "/galleries" ? "bottom-rounded-mobile" : ""
                  }`}
                  to={"/galleries"}
                >
                    <li className='flex items-center gap-2 text-xl'>
                        <img className='w-6' src={GalleryIcon} alt="" />
                        GALLERIES    
                    </li>
                </Link>
            </ul>
                <div className='absolute bottom-2 right-2 flex items-start gap-2'>
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

