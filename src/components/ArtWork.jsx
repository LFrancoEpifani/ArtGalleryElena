import React from "react";
import { Link } from "react-router-dom";

export default function ArtWork({ name, image, id }) {

  return (
    <Link to={`/art/${id}`}>
      <div className="w-full p-2 montserrat">
        <img
          src={image}
          alt={name}
          className="object-contain w-[40vh] rounded-sm shadow-sm shadow-gray-500"
        />

      </div>
    </Link>
  );
}
