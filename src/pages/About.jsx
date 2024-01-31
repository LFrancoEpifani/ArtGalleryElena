import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ElenaPainting from "/assets/ElenaPainting.jpg";
import ElenaStudio from "/assets/ElenaStudio.jpg";
import ElenaProfile from "/assets/ElenaProfile.jpg";
import Collage1 from "/assets/Collage_1.jpg";
import Collage2 from "/assets/Collage_2.jpg";
import CollageFull from "/assets/about/collage.jpeg";
import ImageGroup from "/assets/about/imageGroup.jpeg";
import PhotoGroup from "/assets/GroupPhotos.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { scrollTextVariants } from "../motion/variants";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollTotal, setScrollTotal] = useState(3);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const topY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-230%" : "-222%"]
  );
  
  const topYCollage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-70%" : "-70%"]
  );


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPos(latest * 3);
  });

  return (
    <>
      <Header />
      <section
        ref={containerRef}
        className="relative z-20 h-[300vh] "
      >
        <div className="sticky top-28  ">
          <div className="flex flex-col sm:flex-row gap-10 ">

         
          <div className="flex  flex-col gap-2 overflow-hidden w-1/2 h-[50vh] rounded-[8px] pl-[4vw]">
            <motion.img
              style={{ y: topY }}
              src={ElenaPainting}
              className="   w-full mx-auto h-[100vh] rounded-[8px] object-cover"
            />

            <motion.img
              style={{ y: topY }}
              src={ElenaStudio}
              className="  w-full   mx-auto h-[100vh] rounded-[8px]"
            />

            <motion.img
              style={{ y: topY }}
              src={ElenaProfile}
              className="  w-full  mx-auto h-[100vh] rounded-[8px] object-cover"
            />
          </div>
          <div className="relative w-1/2 z-40 ">
            <motion.div
              className="flex flex-col gap-6 pr-[4vw]"
             
              animate={
                scrollPos >= 0 && scrollPos <= scrollTotal / 3 + 0.2
                  ? "visible1"
                  : "oculto"
              }
              variants={scrollTextVariants}
            >
              <div className="">
                <div className="p-6 lg:p-2 2xl:p-12 flex flex-col items-center justify-center">
                  <h3 className="sorts text-2xl 2xl:text-5xl text-center uppercase">
                    Elena Salova
                  </h3>
                  <p className="text-center leading-6 2xl:leading-8 2xl:text-[16px] my-4 text-xs text-gray-800">
                    Elena&apos;s artistic journey blossomed amidst the
                    picturesque landscapes of Novopskov in Ukraine&apos;s
                    Luhansk region. Her earliest strokes foretold a lifetime of
                    creative mastery. Between 2003 and 2005, she refined her
                    skills at the esteemed Kyiv art courses of
                    &quot;Oberig&quot;, emerging not only as an artist but also
                    a nurturing guide for budding talents. Her artistic
                    education continued at Odessa State Art College from 2004 to
                    2009, earning her honors in painting, design, and
                    decoration. In 2010, Elena ventured into monumental painting
                    at the National Academy of Fine Arts and Architecture, under
                    the tutelage of Professor Kozhekov. She mastered mosaic,
                    fresco, sgraffito, and stained glass techniques. Her
                    artistry spans classical and modern approaches, gracing
                    collections worldwide.
                  </p>
                  <a href="#yoga">
                    <Icon
                      className="text-center text-2xl md:text-5xl md:my-2"
                      icon="ei:arrow-down"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 flex flex-col gap-6 pr-[8vw]"
              animate={
                scrollPos > scrollTotal / 3 + 0.2 && 
                scrollPos <= 2 * (scrollTotal / 3) + 0.2
                  ? "visible1"
                  : "oculto"
              }
              variants={scrollTextVariants}
            >
              <div className="">
                <div className="p-6 4xl:p-12 flex flex-col items-center justify-center">
                  <h3
                    id="yoga"
                    className="sorts text-2xl 4xl:text-4xl text-center uppercase"
                  >
                    ART TEACHER & YOGA INSTRUCTOR
                  </h3>
                  <p className="text-center leading-8 my-4 text-xs text-gray-800">
                    Elena, an experienced creative art teacher, brings 8 years
                    of expertise to her role, focusing on instructing students
                    in drawing, painting, sculpture, yoga, and meditation. She
                    excels at adapting her teaching methods to cater to diverse
                    learning styles. Elena fosters a deep understanding of
                    artistic concepts and encourages the development of students
                    creative and spiritual abilities. Her teaching is inspiring,
                    offering a holistic art education program with practical
                    exercises in various media. Elena provides constructive
                    feedback, positive reinforcement, and gentle guidance,
                    ensuring incremental improvement. She adeptly manages groups
                    of up to 5 students, ages 6 to 50, fostering a productive
                    learning environment with detailed lesson plans.
                  </p>

                  <a href="https://www.instagram.com/elena.art.studio.es/">
                    <button className="flex justify-center items-center gap-1">
                      <p className="border-b-2 border-black">
                        Send me a message
                      </p>
                      <Icon
                        className="text-xl"
                        icon="iconamoon:arrow-top-right-1-light"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 flex flex-col gap-6 pr-[8vw]"
              animate={
                scrollPos > 2 * (scrollTotal / 3) + 0.2 ? "visible1" : "oculto"
              }
              variants={scrollTextVariants}
            >
              <div className="">
                <div className="p-6 4xl:p-12 flex flex-col items-center justify-center">
                  <h3
                    id="yoga"
                    className="sorts text-2xl 4xl:text-4xl text-center uppercase"
                  >
                    BIOGRAPHY
                  </h3>
                  <p className="text-center leading-8 my-4 text-xs text-gray-800">
                    Elena, a Ukrainian artist from Novopskov, excelled in
                    various painting techniques and studied at Kyiv&apos;s
                    &quot;Oberig&quot; art courses, Odessa State Art College,
                    and the National Academy of Fine Arts and Architecture,
                    specializing in monumental painting. She mastered techniques
                    like mosaic, fresco, and stained glass, and her works,
                    featured in private collections across Europe, display a
                    range from classical to modern styles. Her artistic
                    achievements include exhibitions in notable galleries such
                    as &quot;Illusion&quot; and &quot;Lavra&quot;. Since 2013,
                    Elena has been imparting her knowledge as a painting and
                    drawing teacher.
                  </p>
                  <button className="flex justify-center items-center gap-1">
                    <p className="border-b-2 border-black">Work with me</p>
                    <Icon
                      className="text-xl"
                      icon="iconamoon:arrow-top-right-1-light"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        
          </div>
       
          <div className="flex  flex-col gap-2 overflow-hidden w-full h-[24vh] 4xl:h-[32vh] mt-20">
            <motion.img
              style={{ y: topYCollage }}
              src={CollageFull}
              className="h-[1600px] w-full rounded-[8px]"
            />
          </div>
        </div>
      </section>
      <div>
        <div className="grid grid-cols-6 p-[4vw]">
          <div className="col-span-2 text-center">
            <h3 className="text-xl font-bold my-4">Inesa Kochur</h3>
            <p className="w-full px-4 leading-8">
              “The artwork “Open” represents a traditional doorknob in the form
              of a hand which one can spot on the entrances of ancient buildings
              in Seville. The color palette of gold and black gives a touch of
              royalty and aristocracy. “
            </p>
          </div>
          <div className="text-3xl col-span-2 flex items-center justify-center gap-6">
            <Icon icon="ph:arrow-left" />
            <hr className="" />
            <Icon icon="ph:arrow-right" />
          </div>
          <div className="col-span-2 text-center">
            <h3 className="text-xl font-bold my-4">Miguel Valdayo Boza</h3>
            <p className="w-full px-4 leading-8 ">
              “This work, made by the painter Elena, presents us with a painting
              full of meaning and with multiple readings, all of them
              interconnected in a general whole that tells us about the cultural
              heritage that we enjoy in Andalusia and wonderfully resolved in a
              format in which each and every one of the elements that define the
              work is easily identifiable.”{" "}
            </p>
          </div>
        </div>

        <img className="w-full h-[40vh]" src={ImageGroup} alt="photoGr" />
      </div>
      <Footer />
    </>
  );
}
