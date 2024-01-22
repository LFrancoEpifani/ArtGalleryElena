import React from 'react'
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {

const location = useLocation();
const currentPath = location.pathname;

  return (
    <div>
        <header className='montserrat'>
        <div className='flex items-center justify-center gap-8 text-xs text-white bg-black p-1'>
            <h2 className='font-bold mr-2'>PROFESSIONAL INTERNATIONAL SHIPPING</h2>
            <p>|</p>
            <p className='mr-10'>elena.art.studio.es</p>
        </div>
            <nav className="flex justify-between items-center my-2 absolute top-3 left-0 w-full z-10 text-white">
            <div className="ml-4">
             
            </div>
    <ul className="flex items-center justify-center gap-6 font-bold text-[13px] my-4">
        <Link className={`${currentPath == "/" ? 'bottom-rounded' : ''}`} to={"/"}>
                        <li className='text-white'>HOME</li>
        </Link>
        <Link className={`${currentPath == "/collections" ? 'bottom-rounded' : ''}`} to={"/collections"}>
                        <li className='text-white'>COLLECTIONS</li>
        </Link>
        <Link className={`${currentPath == "/about" ? 'bottom-rounded' : ''}`} to={"/about"}>
                        <li className='text-white'>ABOUT ME</li>
        </Link>
        <Link className={`${currentPath == "/galleries" ? 'bottom-rounded' : ''}`} to={"/galleries"}>
                        <li className='text-white'>GALLERIES</li>
        </Link>
    </ul>
    <ul className="flex items-end mr-1">
        <button className="flex items-center font-bold text-xs mr-1">
            <p>EN</p>
            <Icon icon="ep:arrow-down-bold" />
        </button>
        <button className="text-xl relative">
            <Icon className="text-2xl" icon="fluent:shopping-bag-24-regular" />
            <div className="absolute top-4 right-3 bg-white rounded-full w-3 h-3 flex items-center justify-center">
                <p className="text-black text-[8px]">0</p>
            </div>
        </button>
    </ul>
</nav>

        </header>
    </div>
  )
}

