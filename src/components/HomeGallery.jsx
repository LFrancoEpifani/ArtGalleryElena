import { motion } from "framer-motion";

export default function HomeGallery({ photos, animationImages, border }) {
  return (
    <div className={`grid grid-cols-4 lg:h-[42vh] lg:grid-cols-1 lg:grid-rows-1 lg:flex lg:gap-y-12  ${border} `}>
      {photos.map((photo, index) => (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationImages}
          key={index}
          className={`relative col-span-1 w-full h-full `}
        >
          <img
            src={photo}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35 "></div>
        </motion.div>
      ))}
    </div>
  );
}
