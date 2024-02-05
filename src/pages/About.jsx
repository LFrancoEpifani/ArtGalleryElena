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
import {
  scrollArrowVariant,
  scrollTextVariants,
  scrollTextVariantsXLeft,
  scrollTextVariantsXRight,
} from "../motion/variants";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollTotal, setScrollTotal] = useState(3);

  const testimonialsRef = useRef(null);
  const [scrollPosTes, setScrollPosTes] = useState(0);
  const [scrollTotalTes, setScrollTotalTes] = useState(4);

  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: containerRef,
  });

  const { scrollYProgress: scrollYProgressTestimonials } = useScroll({
    target: testimonialsRef,
  });

  const topYCollage = useTransform(
    scrollYProgressContainer,
    [0, 1],
    ["0%", "-70%"]
  );

  useMotionValueEvent(scrollYProgressContainer, "change", (latest) => {
    setScrollPos(latest * 3);
  });

  useMotionValueEvent(scrollYProgressTestimonials, "change", (latest) => {
    setScrollPosTes(latest * 4);
  });


  return (
    <>
      <Header />
      <section ref={containerRef} className=" relative z-20 h-[300vh] ">
        <div className=" sticky top-4 md:top-10 ">
          <div className="mt-4 md:mt-10 md:px-28 2xl:px-40">
            <div className="relative w-full h-[100vh] md:h-[60vh] z-40">
              <motion.div
                className="absolute top-0 left-0 flex flex-col gap-6"
                initial="visible"
                animate={
                  scrollPos >= 0 && scrollPos <= scrollTotal / 3 - 0.2
                    ? "visible"
                    : "hidden"
                }
                variants={scrollTextVariants}
              >
                <div className="flex flex-col md:flex-row  items-start justify-center ">
                  <div className="w-full md:w-5/12 mx-auto">
                    <img
                      className="w-8/12 md:w-10/12 mx-auto  h-[40vh] md:h-[60vh] rounded"
                      src={ElenaPainting}
                      alt=""
                    />
                  </div>
                  <div className="w-10/12 md:w-7/12 mx-auto md:p-6 4xl:p-12 mt-6 md:mt-0 flex flex-col items-center justify-center">
                    <h3 className="sorts text-2xl 4xl:text-4xl text-center uppercase">
                      Elena Salova
                    </h3>
                    <p className="text-center leading-5 md:leading-6 4xl:leading-8 my-4 text-[11px] 2xl:text-[14px] 4xl:text-lg text-gray-800">
                      Elena&apos;s artistic journey blossomed amidst the
                      picturesque landscapes of Novopskov in Ukraine&apos;s
                      Luhansk region. Her earliest strokes foretold a lifetime
                      of creative mastery. Between 2003 and 2005, she refined
                      her skills at the esteemed Kyiv art courses of
                      &quot;Oberig&quot;, emerging not only as an artist but
                      also a nurturing guide for budding talents. Her artistic
                      education continued at Odessa State Art College from 2004
                      to 2009, earning her honors in painting, design, and
                      decoration. In 2010, Elena ventured into monumental
                      painting at the National Academy of Fine Arts and
                      Architecture, under the tutelage of Professor Kozhekov.
                      She mastered mosaic, fresco, sgraffito, and stained glass
                      techniques. Her artistry spans classical and modern
                      approaches, gracing collections worldwide.
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
                className="absolute top-0 left-0 flex flex-col gap-6"
                initial="hidden"
                animate={
                  scrollPos > scrollTotal / 3 - 0.2 &&
                  scrollPos <= 2 * (scrollTotal / 3)
                    ? "visible"
                    : "hidden"
                }
                variants={scrollTextVariants}
              >
                <div className="flex flex-col md:flex-row  items-start justify-center ">
                  <div className="w-full md:w-5/12 mx-auto">
                    <img
                      className="w-8/12 md:w-10/12 mx-auto  h-[40vh] md:h-[60vh] rounded"
                      src={ElenaStudio}
                      alt=""
                    />
                  </div>
                  <div className="w-10/12 md:w-7/12 mx-auto md:p-6 4xl:p-12 mt-6 md:mt-0  flex flex-col items-center justify-center">
                    <h3
                      id="yoga"
                      className="sorts text-2xl 4xl:text-4xl text-center uppercase"
                    >
                      ART TEACHER & YOGA INSTRUCTOR
                    </h3>
                    <p className="text-center leading-5 md:leading-6 4xl:leading-8 my-4 text-[11px] 2xl:text-[14px] 4xl:text-lg text-gray-800">
                      Elena, an experienced creative art teacher, brings 8 years
                      of expertise to her role, focusing on instructing students
                      in drawing, painting, sculpture, yoga, and meditation. She
                      excels at adapting her teaching methods to cater to
                      diverse learning styles. Elena fosters a deep
                      understanding of artistic concepts and encourages the
                      development of students creative and spiritual abilities.
                      Her teaching is inspiring, offering a holistic art
                      education program with practical exercises in various
                      media. Elena provides constructive feedback, positive
                      reinforcement, and gentle guidance, ensuring incremental
                      improvement. She adeptly manages groups of up to 5
                      students, ages 6 to 50, fostering a productive learning
                      environment with detailed lesson plans.
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
                className="absolute top-0 left-0 flex flex-col gap-6"
                initial="hidden"
                animate={
                  scrollPos > 2 * (scrollTotal / 3) ? "visible" : "hidden"
                }
                variants={scrollTextVariants}
              >
                <div className="flex flex-col md:flex-row  items-start justify-center ">
                  <div className="w-full md:w-5/12 mx-auto">
                    <img
                      className="w-8/12 md:w-10/12 mx-auto  h-[40vh] md:h-[60vh] rounded"
                      src={ElenaProfile}
                      alt=""
                    />
                  </div>
                  <div className="w-10/12 md:w-7/12 mx-auto md:p-6 4xl:p-12 mt-6 md:mt-0 flex flex-col items-center justify-center">
                    <h3
                      id="yoga"
                      className="sorts text-2xl 4xl:text-4xl text-center uppercase"
                    >
                      BIOGRAPHY
                    </h3>
                    <p className="text-center leading-5 md:leading-6 4xl:leading-8 my-4 text-[11px] 2xl:text-[14px] 4xl:text-lg text-gray-800">
                      Elena, a Ukrainian artist from Novopskov, excelled in
                      various painting techniques and studied at Kyiv&apos;s
                      &quot;Oberig&quot; art courses, Odessa State Art College,
                      and the National Academy of Fine Arts and Architecture,
                      specializing in monumental painting. She mastered
                      techniques like mosaic, fresco, and stained glass, and her
                      works, featured in private collections across Europe,
                      display a range from classical to modern styles. Her
                      artistic achievements include exhibitions in notable
                      galleries such as &quot;Illusion&quot; and
                      &quot;Lavra&quot;. Since 2013, Elena has been imparting
                      her knowledge as a painting and drawing teacher.
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
          {!isMobile ? (
            <div className="flex  flex-col  gap-2 overflow-hidden w-full h-[24vh] 4xl:h-[30vh] mt-20">
              <motion.img
                style={{ y: topYCollage }}
                src={CollageFull}
                loading="lazy"
                className="h-[1600px] w-full rounded-[8px]"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
      <section ref={testimonialsRef} className=" relative z-20 h-[200vh]">
        <div className=" sticky h-[100vh] top-0">
          {!isMobile ? (
            <>
              {" "}
              <div className="absolute top-[15vh] 2xl:top-[20vh] 4xl:top-[25vh] left-0 w-full flex justify-between  z-40 overflow-hidden px-10 2xl:px-20">
                <motion.div
                  initial="visible"
                  animate={
                    scrollPosTes >= 0 &&
                    scrollPosTes <= scrollTotalTes / 2 - 0.5
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollTextVariantsXLeft}
                  className=" w-full md:w-[35vw] text-center"
                >
                  <h3 className="text-xl font-bold my-4">Inesa Kochur</h3>
                  <p className="w-full px-4 leading-8">
                    “The artwork “Open” represents a traditional doorknob in the
                    form of a hand which one can spot on the entrances of
                    ancient buildings in Seville. The color palette of gold and
                    black gives a touch of royalty and aristocracy. “
                  </p>
                </motion.div>

                <motion.div
                  initial="visible"
                  animate={
                    scrollPosTes >= 0 &&
                    scrollPosTes <= scrollTotalTes / 2 - 0.5
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollArrowVariant}
                  className=" text-3xl w-[20vw] flex items-center justify-center gap-6"
                >
                  <button>
                    {" "}
                    <Icon icon="ph:arrow-down" />{" "}
                  </button>
                </motion.div>

                <motion.div
                  initial="visible"
                  animate={
                    scrollPosTes >= 0 &&
                    scrollPosTes <= scrollTotalTes / 2 - 0.5
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollTextVariantsXRight}
                  className=" w-full md:w-[35vw] text-center"
                >
                  <h3 className="text-xl font-bold my-4">
                    Miguel Valdayo Boza
                  </h3>
                  <p className="w-full px-4 leading-8 ">
                    “This work, made by the painter Elena, presents us with a
                    painting full of meaning and with multiple readings, all of
                    them interconnected in a general whole that tells us about
                    the cultural heritage that we enjoy in Andalusia and
                    wonderfully resolved in a format in which each and every one
                    of the elements that define the work is easily
                    identifiable.”{" "}
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-[15vh] 2xl:top-[20vh] 4xl:top-[25vh] left-0 w-full flex justify-between z-40 overflow-hidden px-10 2xl:px-20">
                <motion.div
                  initial="hidden"
                  animate={
                    scrollPosTes > scrollTotalTes / 2 - 0.5 &&
                    scrollPosTes <= 2 * (scrollTotalTes / 2)
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollTextVariantsXLeft}
                  className=" w-full md:w-[35vw] text-center"
                >
                  <h3 className="text-xl font-bold my-4">
                    Cambio Primer Testimonials
                  </h3>
                  <p className="w-full px-4 leading-8">
                    “The artwork “Open” represents a traditional doorknob in the
                    form of a hand which one can spot on the entrances of
                    ancient buildings in Seville. The color palette of gold and
                    black gives a touch of royalty and aristocracy. “
                  </p>
                </motion.div>
              
                <motion.div
                  initial="hidden"
                  animate={
                    scrollPosTes > scrollTotalTes / 2 - 0.5 &&
                    scrollPosTes <= 2 * (scrollTotalTes / 2)
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollArrowVariant}
                  className=" text-3xl w-[20vw] flex items-center justify-center gap-6"
                >
                  <button>
                    {" "}
                    <Icon icon="ph:arrow-up" />{" "}
                  </button>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={
                    scrollPosTes > scrollTotalTes / 2 - 0.5 &&
                    scrollPosTes <= 2 * (scrollTotalTes / 2)
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollTextVariantsXRight}
                  className=" w-full md:w-[35vw] text-center"
                >
                  <h3 className="text-xl font-bold my-4">
                    Cambio Segundo Testimonials
                  </h3>
                  <p className="w-full px-4 leading-8 ">
                    “This work, made by the painter Elena, presents us with a
                    painting full of meaning and with multiple readings, all of
                    them interconnected in a general whole that tells us about
                    the cultural heritage that we enjoy in Andalusia and
                    wonderfully resolved in a format in which each and every one
                    of the elements that define the work is easily
                    identifiable.”{" "}
                  </p>
                </motion.div>
              </div>{" "}
            </>
          ) : (
            <>
            {console.log(scrollPosTes)}
          
              <div className="absolute top-[10vh]  left-0 w-full  overflow-hidden px-8">
                <motion.div
                  initial="visible"
                  animate={
                    scrollPosTes >= 0 &&
                    scrollPosTes <= scrollTotalTes / 4 
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollTextVariantsXLeft}
                  className=" w-full text-center"
                >
                  <h3 className="text-xl font-bold my-4">Inesa Kochur</h3>
                  <p className="w-full px-4 leading-6 text-sm">
                    “The artwork “Open” represents a traditional doorknob in the
                    form of a hand which one can spot on the entrances of
                    ancient buildings in Seville. The color palette of gold and
                    black gives a touch of royalty and aristocracy. “
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-[10vh]  left-0 w-full  overflow-hidden px-8">
                <motion.div
                  initial="hidden"
                  animate={
                    scrollPosTes > scrollTotalTes / 4   &&
                    scrollPosTes <= 2 * (scrollTotalTes / 4) 
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollPosTes < scrollTotalTes / 4   ? scrollTextVariantsXRight  : scrollTextVariantsXLeft}
                  className=" w-full  text-center"
                >
                  <h3 className="text-xl font-bold my-4">
                    Miguel Valdayo Boza
                  </h3>
                  <p className="w-full px-4 leading-6 text-sm">
                    “This work, made by the painter Elena, presents us with a
                    painting full of meaning and with multiple readings, all of
                    them interconnected in a general whole that tells us about
                    the cultural heritage that we enjoy in Andalusia and
                    wonderfully resolved in a format in which each and every one
                    of the elements that define the work is easily
                    identifiable.”{" "}
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-[10vh]  left-0 w-full  overflow-hidden px-8">
                <motion.div
                  initial="hidden"
                  animate={
                    scrollPosTes > scrollTotalTes / 2  &&
                    scrollPosTes <= 3 * (scrollTotalTes / 4) 
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollPosTes < scrollTotalTes / 2  ? scrollTextVariantsXRight : scrollTextVariantsXLeft}
                  className=" w-full  text-center"
                >
                  <h3 className="text-xl font-bold my-4">
                    Tercer Testimonials
                  </h3>
                  <p className="w-full px-4 leading-6 text-sm">
                    “Tercer tex”{" "}
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-[10vh]  left-0 w-full  overflow-hidden px-8">
                <motion.div
                  initial="hidden"
                  animate={
                    scrollPosTes > scrollTotalTes * 3/4   &&
                    scrollPosTes <= 4 * (scrollTotalTes / 4)
                      ? "visible"
                      : "hidden"
                  }
                  variants={scrollTextVariantsXRight}
                  className=" w-full  text-center"
                >
                  <h3 className="text-xl font-bold my-4">
                    Cuarto Testimonials
                  </h3>
                  <p className="w-full px-4 leading-6 text-sm">
                    Cuarto Testt
                  </p>
                </motion.div>
              </div>
            </>
          )}
          <img
            className="absolute bottom-0 w-full h-[40vh]"
            src={ImageGroup}
            alt="photoGr"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
