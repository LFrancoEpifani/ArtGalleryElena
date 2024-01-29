import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import LogoElena from "/assets/LogoElenaNew.jpg";
import Burger from "../components/Burger";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const { t, i18n } = useTranslation('common');
  const currentLanguage = i18n.language;
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <header>
      <nav className="montserrat h-[8vh] flex justify-between items-center text-black px-1 border-y border-gray-400 2xl:py-8">
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <img
              className="w-11 h-full object-contain 2xl:w-16"
              src={LogoElena}
              alt=""
            />
            <p className="font-bold font-cormorant 2xl:text-[22px]">ELENA</p>
          </div>
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-8 font-semibold text-[14px] 2xl:text-[18px]">
          <Link
            className={`${currentPath == "/" ? "bottom-rounded" : ""}`}
            to={"/"}
          >
            <li className="text-black">
              <h1>{t("home")}</h1>
            </li>
          </Link>
          <Link
            className={`${
              currentPath == "/collections" ? "bottom-rounded" : ""
            }`}
            to={"/collections"}
          >
            <li className="text-black">{t("collections")}</li>
          </Link>
          <Link
            className={`${currentPath == "/about" ? "bottom-rounded" : ""}`}
            to={"/about"}
          >
            <li className="text-black">{t("about")}</li>
          </Link>
          <Link
            className={`${currentPath == "/galleries" ? "bottom-rounded" : ""}`}
            to={"/galleries"}
          >
            <li className="text-black">{t("galleries")}</li>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-1">
            <div
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
              className="relative"
            >
              <button className="flex items-start md:items-center  font-bold text-xs md:text-sm">
                <span className="uppercase">{currentLanguage}</span>
                <Icon icon="ep:arrow-down-bold" />
              </button>
              {isHovered ? (
                <div className="absolute bg-white py-1">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="font-bold text-xs md:text-sm"
                  >
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => changeLanguage("es")}
                    className="font-bold text-xs md:text-sm"
                  >
                    <span>ES</span>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
            <button className="text-xl relative">
              <Icon
                className="text-2xl 2xl:text-4xl"
                icon="fluent:shopping-bag-24-regular"
              />
              <div className="absolute top-4 right-3 bg-black rounded-full w-3 h-3 flex items-center justify-center 2xl:top-6 2xl:right-5 2xl:w-5 2xl:h-5">
                <p className="text-white text-[8px] 2xl:text-[10px]">0</p>
              </div>
            </button>
          </div>
          <Burger />
        </div>
      </nav>
    </header>
  );
}
