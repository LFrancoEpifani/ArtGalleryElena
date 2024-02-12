import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "/assets/LogoElenaNew.jpg";
import PaintIcon from "/assets/CollectionIcon.png";
import GalleryIcon from "/assets/GalleryIcon.jpg";
import AboutmeIcon from "/assets/AboutMeIcon.jpg";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation("common");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="block md:hidden z-50" >
      <button className="flex items-center" onClick={handleOpenMenu}>
        {/* <Icon className="text-3xl" icon="ic:baseline-menu" /> */}
          <img className="w-6" src={"/assets/header/menu.png"} alt="cart" />
      </button>
      {isOpen && (
        <div className="fixed  top-0 left-0 bg-black h-screen w-full bg-opacity-65">
          <nav className="fixed top-0 left-0 w-3/4 h-screen bg-white">
            <div className="h-[8vh] flex justify-between items-center border-b border-black px-2">
              <div className="flex justify-center items-center">
                <img className="w-10" src={Logo} alt="" />
                <p className="font-bold font-cormorant text-xl">ELENA</p>
              </div>
              <button className="" onClick={handleOpenMenu}>
                <Icon className="text-3xl" icon="ic:round-close" />
              </button>
            </div>

            <ul className="flex flex-col justify-center items-center mt-8 gap-4">
              <Link
                className={`${
                  currentPath == "/" ? "bottom-rounded-mobile" : ""
                }`}
                to={"/"}
              >
                <li className="flex items-center gap-3 text-lg uppercase">
                  <Icon className="text-2xl" icon="iconamoon:home-thin" />
                  {t("home")}
                </li>
              </Link>
              <hr className="w-60 border-gray-400" />
              <Link
                className={`${
                  currentPath == "/collections" ? "bottom-rounded-mobile" : ""
                }`}
                to={"/collections"}
              >
                <li className="flex items-center gap-3 text-lg uppercase">
                  <img className="w-6" src={PaintIcon} alt="" />
                  {t("collections")}
                </li>
              </Link>
              <hr className="w-60 border-gray-400" />
              <Link
                className={`${
                  currentPath == "/about" ? "bottom-rounded-mobile" : ""
                }`}
                to={"/about"}
              >
                <li className="flex items-center gap-3 text-lg uppercase">
                  <img className="w-6" src={AboutmeIcon} alt="" />
                  {t("about")}
                </li>
              </Link>
              <hr className="w-60 border-gray-400" />
              <li className="w-full flex justify-center ">
             
              <button
                onClick={() => changeLanguage("es")}
                className=" flex items-center justify-center gap-1 text-lg uppercase"
              >
          
                <span>{t("languageEs")}</span>{" "}
                <img
                  className="w-5"
                  src="/assets/header/spain.svg"
                  alt="united"
                />{" "}
              </button>
              <div className="mx-4">/</div>
              <button
                onClick={() => changeLanguage("en")}
                className=" flex items-center justify-center gap-1 text-lg uppercase"
              >
                <span>{t("languageEn")}</span>
                <img
                  className="w-5"
                  src="/assets/header/united.svg"
                  alt="united"
                />
              </button>
            
              </li>
            </ul>
            <div className="absolute bottom-2 left-2 flex items-start gap-2">
              <Icon className="text-lg" icon="bi:instagram" />
              <p className="text-sm font-bold">Art Gallery Elena</p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
