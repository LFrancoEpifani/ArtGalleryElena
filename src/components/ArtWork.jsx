import React from "react";
import { Link } from "react-router-dom";

export default function ArtWork({ name, price, size, image, description, id }) {

  return (
    <Link to={`/art/${id}`}>
      <div className=" w-full p-3 montserrat">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full rounded-sm"
        />
        <div className="text-start my-2">
          <div className="">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-[12px] italic text-gray-500">{description}</p>
          </div>
          <p className="text-xs text-gray-800 font-medium">{size}</p>
          <p className="text-sm font-semibold">{price}</p>
        </div>
      </div>
    </Link>
  );
}
