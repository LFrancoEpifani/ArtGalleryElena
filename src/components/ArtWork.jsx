import React from "react";
import { Link } from "react-router-dom";

export default function ArtWork({ name, price, size, image, id }) {

  return (
    // <Link to={`/art/${id}`}>
      <div className="grid-item w-full md:w-1/2 lg:w-1/4 p-3 montserrat">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full rounded-sm"
        />
        <div className="text-center">
          <h2 className="text-lg font-normal my-2">{name}</h2>
          <p className="text-xs">{size}</p>
          <p className="text-md font-semibold">{price}</p>
        </div>
      </div>
    // </Link>
  );
}
