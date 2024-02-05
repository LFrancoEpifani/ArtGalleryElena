import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Filter from "./Filter";
import Category from "./Category";
import { useState } from "react";

export default function ArtWork({ artworks }) {


  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  const filterArtworks = (artworks) => {
    return artworks.filter(artwork => {
      const price = parseInt(artwork.price.replace("€", ""));
      return (
        price >= filters.minPrice &&
        (filters.category === 'all' || artwork.category === filters.category)
      )
    });
  };
  const filteredArtworks = filterArtworks(artworks); 

  return (
   <div>
     <div className="flex justify-end items-end gap-6 mt-8 mb-4">
          <Filter setFilters={setFilters} />
      <Category setFilters={setFilters} />
          </div>
      <div className="w-full p-4 montserrat">          
       <ul className="">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 4}}>
        <Masonry>
    {filteredArtworks.map(artwork => (
      <Link key={artwork.id} to={`/art/${artwork.id}`}>
        <li className="p-2">
          <img src={artwork.image} alt={artwork.name} />
        </li>
      </Link>
    ))}
  </Masonry>
        </ResponsiveMasonry>
       </ul>

      </div>

   </div>
  );
}
