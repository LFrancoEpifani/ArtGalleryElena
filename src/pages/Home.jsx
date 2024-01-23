import HomeGallery from "../components/HomeGallery";
import Buda from "../assets/Buda.jpg";
import Horse from "../assets/Horse.jpg";
import Elena from "../assets/Elena.jpg";
import Sevillana from "../assets/Sevillana.jpg";
import Llanto from "../assets/Llanto.jpg";
import HombreSentado from "../assets/HombreSentado.jpg";
import ToreroMandala from "../assets/ToreroMandala.jpg";
import BigPaint from "../assets/BigPaint.png";

import Header from "../components/Header";
import {
  animationLeftImages,
  animationRightImages,
  child,
  container,
} from "../motion/variants";
import { motion } from "framer-motion";

export default function Home() {
  const photos1 = [BigPaint, Sevillana, ToreroMandala, Buda];
  const photos2 = [Horse, HombreSentado, Llanto, Elena];

  const title = "Art Gallery Elena";
  const letters = title.split("");

  return (
    <main className="">
      <Header />
      <HomeGallery photos={photos1} animationImages={animationLeftImages} border="border-b-2 border-black" />
      <motion.div
        className="h-[8vh] flex justify-center items-center "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            className={` font-cormorant font-normal text-[50px] text-black uppercase text-center tracking-tighter `}
            key={index}
            variants={child}
          >
            {letter + (index < letters.length - 1 ? "\u00A0" : "")}
          </motion.span>
        ))}
      </motion.div>
      <HomeGallery photos={photos2} animationImages={animationRightImages} border="border-t-2 border-black" />
    </main>
  );
}
