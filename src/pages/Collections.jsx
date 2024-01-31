import React, { useRef } from "react";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import Artwork from "../components/ArtWork";
import artworks from '../data/artworks.json'
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from "react-i18next";

export default function Collections() {
  const [artwork, setArtworks] = useState([]);
  const gridRef = useRef(null);

  const { t, i18n } = useTranslation('collections');

  return (
    <>
      <Header />
      <div className="montserrat px-[8vw] xl:px-[14vw] 2xl:px-[12vw]">
        <div className="lg:flex lg:items-center justify-between my-10">
          <div className="text-start lg:text-start">
            <h2 className="font-bold text-[28px] lg:text-[30px]">{t("title")}</h2>
            <p className="text-[15px] text-[#747474]">{t("subTitle")}</p>
          </div>
          <p className="block md:hidden text-start my-6 leading-7">
          {t("description")}
          </p>
          <div className="flex items-start justify-start gap-3 mt-8 mb-4">
            <button className="flex items-center gap-1  lg:border  lg:border-black lg:w-56 lg:h-8 lg:m-2 lg:p-2 rounded-full">
            {t("filter")}
              <Icon icon="fluent:filter-12-regular" />
            </button>
            <button className="flex items-center gap-1  lg:border lg:border-black lg:w-56 lg:h-8 lg:m-2 lg:p-2 rounded-full">
            {t("sort")}
              <Icon icon="lucide:arrow-up-down" />
            </button>
          </div>
          <hr className="block md:hidden w-full" />
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 4 }}>
          <Masonry>
            {artworks.map((artwork) => (
              <Artwork key={artwork.id} {...artwork} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
