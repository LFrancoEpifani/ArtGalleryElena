import React from 'react'
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LogoBlack.png'


export default function Header() {

const location = useLocation();
const currentPath = location.pathname;

  return (
    <div>
        <header className='montserrat'>
            <hr/>
            <nav className="flex justify-between items-center text-black">
            <div className="my-2 ml-1">
             <img className='w-10 object-contain' src={Logo} alt=""/>
            </div>
    <ul className="flex items-center justify-center gap-8 font-semibold text-[14px] ml-12">
        <Link className={`${currentPath == "/" ? 'bottom-rounded' : ''}`} to={"/"}>
                        <li className='text-black'>HOME</li>
        </Link>
        <Link className={`${currentPath == "/collections" ? 'bottom-rounded' : ''}`} to={"/collections"}>
                        <li className='text-black'>COLLECTIONS</li>
        </Link>
        <Link className={`${currentPath == "/about" ? 'bottom-rounded' : ''}`} to={"/about"}>
                        <li className='text-black'>ABOUT ME</li>
        </Link>
        <Link className={`${currentPath == "/galleries" ? 'bottom-rounded' : ''}`} to={"/galleries"}>
                        <li className='text-black'>GALLERIES</li>
        </Link>
    </ul>
    <ul className="flex items-end ml-14 mr-2">
        <button className="flex items-start font-bold text-xs mr-1">
            <p>EN</p>
            <Icon icon="ep:arrow-down-bold" />
        </button>
        <button className="text-xl relative">
            <Icon className="text-2xl" icon="fluent:shopping-bag-24-regular" />
            <div className="absolute top-4 right-3 bg-black rounded-full w-3 h-3 flex items-center justify-center">
                <p className="text-white text-[8px]">0</p>
            </div>
        </button>
    </ul>
</nav>

        </header>
        <hr />
    </div>
  )
}

