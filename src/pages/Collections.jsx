import React, { useRef } from "react";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import Artwork from "../components/ArtWork";
import artworksData from "../data/artworks.json";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Collections() {
  const [artworks, setArtworks] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    setArtworks(artworksData);
  }, []);

  return (
    <>
      <Header />
      <div className="montserrat px-[8vw]">
        <div className="lg:flex lg:items-center justify-between my-10">
          <div className="text-start lg:text-start">
            <h2 className="font-bold text-[28px] lg:text-[30px]">Discover Timless Art</h2>
            <p className="text-[15px] text-[#747474]">By Art Gallery Elena</p>
          </div>
          <p className="block md:hidden text-start my-6 leading-7">
          Here you will find an extensive collection of paintings, each with its own unique style and technique. Each painting is a window into a different world, offering a variety of visual experiences for all tastes and preferences.No matter if you are an amateur artist or a professional artist, we invite you to explore our gallery and discover the works that resonate with you.
          </p>
          <div className="flex items-start justify-start gap-3 mt-8 mb-4">
            <button className="flex items-center gap-1  lg:border  lg:border-black lg:w-56 lg:h-8 lg:m-2 lg:p-2">
              Filter
              <Icon icon="fluent:filter-12-regular" />
            </button>
            <button className="flex items-center gap-1  lg:border lg:border-black lg:w-56 lg:h-8 lg:m-2 lg:p-2">
              Sort
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
