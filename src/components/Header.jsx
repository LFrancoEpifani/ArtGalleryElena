import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/FirmaElena.jpg";
import LogoElena from '../assets/LogoElenaNew.jpg'
import Burger from '../components/Burger';
import { useState } from "react";

export default function Header() {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header>
      <nav className="montserrat h-[8vh] flex justify-between items-center text-black px-1 border-y border-gray-400">
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <img className="w-11 h-full object-contain" src={LogoElena} alt="" />
            <p className="font-bold">Art Gallery Elena</p>
          </div>
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-8 font-semibold text-[14px] mr-20">
          <Link
            className={`${currentPath == "/" ? "bottom-rounded" : ""}`}
            to={"/"}
          >
            <li className="text-black">Home</li>
          </Link>
          <Link
            className={`${
              currentPath == "/collections" ? "bottom-rounded" : ""
            }`}
            to={"/collections"}
          >
            <li className="text-black">Collections</li>
          </Link>
          <Link
            className={`${currentPath == "/about" ? "bottom-rounded" : ""}`}
            to={"/about"}
          >
            <li className="text-black">About Me</li>
          </Link>
          <Link
            className={`${currentPath == "/galleries" ? "bottom-rounded" : ""}`}
            to={"/galleries"}
          >
            <li className="text-black">Galleries</li>
          </Link>
        </ul>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-20 lg:w-24">
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
          </div>
          <Burger/>
        </div>
      </nav>
    </header>
  );
}
