import React, { useRef } from "react";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import Artwork from "../components/ArtWork";
import artworks from '../data/artworks.json'
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

export default function Collections() {

 

  const { t, i18n } = useTranslation('collections');

  return (
    <>
      <Header />
      <div className="montserrat px-[8vw] xl:px-[8vw]">
        <div className="lg:flex lg:items-center justify-between my-10">
          <div className="text-start lg:text-start">
            <h2 className="font-bold text-[28px] lg:text-[30px]">{t("title")}</h2>
            <p className="text-[15px] text-[#747474]">{t("subTitle")}</p>
          </div>
          <p className="block md:hidden text-start my-6 leading-7">
          {t("description")}
          </p>
          <hr className="block md:hidden w-full" />
        </div>
        <Artwork artworks={artworks}/>
      </div>
    </>
  );
}
