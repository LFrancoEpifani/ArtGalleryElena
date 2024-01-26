import React from "react";
import { Link } from "react-router-dom";

export default function ArtWork({ name, price, size, image, description, id }) {

  return (
    <Link to={`/art/${id}`}>
      <div className="w-full p-2 montserrat">
        <img
          src={image}
          alt={name}
          className="object-contain w-[40vh] rounded-sm hover:scale-105 transition-transform duration-300"
        />
        <div className="text-start my-2">
          <div className="">
            <h2 className="text-md font-medium 2xl:text-xl">{name}</h2>
            <p className="text-[12px] italic text-gray-500 2xl:text-[16px]">{description}</p>
          </div>
          <p className="text-xs text-gray-800 font-medium 2xl:text-base">{size}</p>
          <p className="text-sm font-semibold my-2 2xl:text-xl">{price}</p>
        </div>
      </div>
    </Link>
  );
}
