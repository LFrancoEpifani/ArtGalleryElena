/* eslint-disable react/prop-types */

export default function ArtWork({ name, price, size, image }) {
  return (
    <div className="grid-item w-full md:w-1/2 lg:w-1/4 p-3 montserrat">
      <img src={image} alt={name} className="object-contain w-full h-full" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-md">{size}</p>
      <p className="text-md font-semibold">{price}</p>
    </div>
  );
}
