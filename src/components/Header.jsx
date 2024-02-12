import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import LogoElena from "/assets/LogoElenaNew.jpg";
import Burger from "../components/Burger";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";
import { getLanguage, setLanguage } from "../utils/language";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language;

  const changeLanguage = (language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const { items } = useCart();

  const totalItemsInCart = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header>
      <nav className="montserrat h-[8vh] flex justify-between items-center text-black px-2 border-y border-gray-400 2xl:py-2 2xl:px-4">
        <Link to={"/"}>
          <div className="flex justify-center items-center  w-32 h-full">
            <img
              className="w-10 md:w-12 h-full  object-contain"
              src={LogoElena}
              alt=""
            />
            <p className="w-20 font-bold font-cormorant text-xl md:text-[22px]">
              ELENA
            </p>
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
        </ul>

        <div className="relative h-[5vh] flex justify-end items-center gap-1 z-30 2xl:w-32">
          <div
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            className="hidden sm:flex absolute right-16 gap-1 h-[5vh]"
          >
            {currentLanguage === "es" ? (
              <button
                onClick={() => changeLanguage("es")}
                className="w-24 flex items-center justify-center gap-1 font-bold text-xs md:text-sm py-2 border border-black  px-4 rounded bg-white hover:bg-black hover:text-white"
              >
                <span>{t("languageEs")}</span>{" "}
                <img
                  className="w-4"
                  src="/assets/header/spain.svg"
                  alt="united"
                />{" "}
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("en")}
                className="w-24 flex items-center justify-center gap-1 font-bold text-xs md:text-sm py-2 border border-black  px-4 rounded bg-white hover:bg-black hover:text-white"
              >
                <span>{t("languageEn")}</span>
                <img
                  className="w-4"
                  src="/assets/header/united.svg"
                  alt="united"
                />
              </button>
            )}
            {isHovered && (
              <>
                {currentLanguage === "en" ? (
                  <button
                    onClick={() => changeLanguage("es")}
                    className="w-24 flex items-center justify-center gap-1 font-bold text-xs md:text-sm py-2 border border-black  px-4  rounded bg-white hover:bg-black hover:text-white"
                  >
                    <span>{t("languageEs")}</span>
                    <img
                      className="w-4"
                      src="/assets/header/spain.svg"
                      alt="spain"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => changeLanguage("en")}
                    className="w-24 flex items-center justify-center gap-1 font-bold text-xs md:text-sm py-2 border border-black  px-4  rounded bg-white hover:bg-black hover:text-white"
                  >
                    <span>{t("languageEn")}</span>
                    <img
                      className="w-4"
                      src="/assets/header/united.svg"
                      alt="united"
                    />
                  </button>
                )}
              </>
            )}
          </div>

          <button
            onClick={toggleCart}
            className="relative border border-black pl-1 pr-4 py-1 md:py-0  md:h-[5vh] rounded"
          >
            <img className="w-8" src={"/assets/header/cart.png"} alt="cart" />
            {/* <Icon className="text-2xl" icon="icon-park-outline:shopping" /> */}
            <span className="absolute top-5 md:top-4 right-1 font-bold text-[9px] md:text-[10px] rounded-full border border-black px-[4px]">
              {totalItemsInCart}
            </span>
          </button>
          <div>{isOpen && <Cart toggleCart={toggleCart} />}</div>
          <Burger />
        </div>
      </nav>
    </header>
  );
}
