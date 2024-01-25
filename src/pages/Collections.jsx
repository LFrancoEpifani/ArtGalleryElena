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
      <div className="montserrat px-[4vw]">
        <div className="flex items-center justify-between my-10">
          <div className="">
            <h2 className="font-bold text-[30px]">Discover Timless Art</h2>
            <p className="text-[12px] text-[#747474]">By Art Gallery Elena</p>
          </div>
          <div className="flex items-center ">
            <button className="flex items-center border gap-1 border-black w-56 h-8 m-2 p-2 rounded-sm">
              Filter
              <Icon icon="fluent:filter-12-regular" />
            </button>
            <button className="flex items-center border gap-1 border-black w-56 h-8 m-2 p-2 rounded-sm">
              Sort
              <Icon icon="lucide:arrow-up-down" />
            </button>
          </div>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 550: 2, 900: 4 }}>
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
