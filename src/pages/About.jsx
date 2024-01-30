import React from 'react';
import Header from '../components/Header';
import ElenaPainting from '/assets/ElenaPainting.jpg';
import ElenaStudio from '/assets/ElenaStudio.jpg'
import ElenaProfile from '/assets/ElenaProfile.jpg'
import Collage1 from '/assets/Collage_1.jpg'
import Collage2 from '/assets/Collage_2.jpg'
import PhotoGroup from '/assets/GroupPhotos.jpg'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


export default function About() {
  return (
    <div className=''>
      <Header />
      <section className='grid grid-cols-1 md:grid-cols-5 gap-6 border-y-2 border-black items-center justify-between'>
        <img
          className='md:col-span-2 w-full h-[95vh] object-cover border-r-2 border-black'
          src={ElenaPainting}
          alt=""
        />
        <div className='md:col-span-3 h-[95vh] w-full text-center'>
          <div className='max-w-2xl p-6 md:p-12 2xl:max-w-full flex flex-col items-center justify-center 2xl:p-20'>
            <h3 className='sorts text-4xl md:text-4xl text-center uppercase 2xl:my-4 2xl:text-[55px]'>Elena Salova</h3>
            <p className='text-center leading-8 my-4 2xl:my-8 text-gray-800 2xl:leading-10 2xl:text-[24px]'>
              Elena's artistic journey blossomed amidst the picturesque
              landscapes of Novopskov in Ukraine's Luhansk region. Her earliest
              strokes foretold a lifetime of creative mastery. Between 2003 and
              2005, she refined her skills at the esteemed Kyiv art courses of
              "Oberig," emerging not only as an artist but also a nurturing guide
              for budding talents. Her artistic education continued at Odessa
              State Art College from 2004 to 2009, earning her honors in
              painting, design, and decoration. In 2010, Elena ventured into
              monumental painting at the National Academy of Fine Arts and
              Architecture, under the tutelage of Professor Kozhekov. She
              mastered mosaic, fresco, sgraffito, and stained glass techniques.
              Her artistry spans classical and modern approaches, gracing
              collections worldwide.
            </p>
            <a href="#yoga">
              <Icon className='text-center text-2xl md:text-5xl md:my-2 2xl:text-7xl 2xl:my-4' icon='ei:arrow-down' />
              </a>
          </div>
        </div>
      </section>
      <div>
        <img className='w-full h-[70vh] object-cover object-top border-b-2 border-black' src={Collage1} alt="" />
      </div>
      <div>
      <section className='grid grid-cols-1 md:grid-cols-5 gap-6 border-y-2 border-black'>
        
      <div className='md:col-span-3 h-[95vh] w-full text-center'>
          <div className='max-w-2xl p-6 md:p-12 2xl:max-w-full flex flex-col items-center justify-center 2xl:p-20'>
            <h3 className='sorts text-4xl md:text-4xl text-center uppercase 2xl:my-8 2xl:text-[55px] 2xl:leading-10'>ART TEACHER & YOGA INSTRUCTOR</h3>
            <p className='text-center leading-8 my-4 2xl:my-8 text-gray-800 2xl:leading-10 2xl:text-[24px]'>
            Elena, an experienced creative art teacher, brings 8 years of expertise to her role, focusing on instructing students in drawing, painting, sculpture, yoga, and meditation. She excels at adapting her teaching methods to cater to diverse learning styles. Elena fosters a deep understanding of artistic concepts and encourages the development of students' creative and spiritual abilities. Her teaching is inspiring, offering a holistic art education program with practical exercises in various media. Elena provides constructive feedback, positive reinforcement, and gentle guidance, ensuring incremental improvement. She adeptly manages groups of up to 5 students, ages 6 to 50, fostering a productive learning environment with detailed lesson plans.
            </p>
            
           <a href="https://www.instagram.com/elena.art.studio.es/">
             <button className='flex justify-center items-center gap-1'>
              <p className='border-b-2 border-black 2xl:text-[25px] 2xl:my-4'>
              Send me a message
              </p>
              <Icon className='text-xl 2xl:text-2xl' icon="iconamoon:arrow-top-right-1-light" />
            </button>
           </a>
          </div>
        </div>
        <img
          className='md:col-span-2 w-full h-[95vh] object-cover border-l-2 border-black'
          src={ElenaStudio}
          alt=""
        />
      </section>
      </div>
      <div>
        <img className='w-full h-[70vh] object-cover object-bottom border-b-2 border-black' src={Collage2} alt="" />
      </div>
      <div className=''>
      <section className='grid grid-cols-1 md:grid-cols-5 gap-6 border-y-2 border-black'>
      <img
          className='md:col-span-2 w-full h-[95vh] object-cover border-r-2 border-black'
          src={ElenaProfile}
          alt=""
        />
         <div className='md:col-span-3 h-[95vh] w-full text-center'>
          <div className='max-w-2xl p-6 md:p-12 2xl:max-w-full flex flex-col items-center justify-center 2xl:p-20'>
            <h3 className='sorts text-4xl md:text-4xl text-center uppercase 2xl:my-8 2xl:text-[55px] 2xl:leading-10'>BIOGRAPHY</h3>
            <p className='text-center leading-8 my-4 2xl:my-8 text-gray-800 2xl:leading-10 2xl:text-[24px]'>
            Elena, a Ukrainian artist from Novopskov, excelled in various painting techniques and studied at Kyiv's "Oberig" art courses, Odessa State Art College, and the National Academy of Fine Arts and Architecture, specializing in monumental painting. She mastered techniques like mosaic, fresco, and stained glass, and her works, featured in private collections across Europe, display a range from classical to modern styles. Her artistic achievements include exhibitions in notable galleries such as "Illusion" and "Lavra." Since 2013, Elena has been imparting her knowledge as a painting and drawing teacher.
            </p>
            <button className='flex justify-center items-center gap-1'>
              <p className='border-b-2 border-black 2xl:text-[25px] 2xl:my-4'>
              Work with me
              </p>
              <Icon className='text-xl 2xl:text-2xl' icon="iconamoon:arrow-top-right-1-light" />
            </button>
          </div>
        </div>
      </section>
      </div>
      <div>
        <div className='grid grid-cols-6 p-[4vw]'>
    <div className='col-span-2 text-center'>
        <h3 className='text-xl font-bold my-4 2xl:text-4xl'>Inesa Kochur</h3>
        <p className='w-full px-4 leading-8 2xl:leading-10 2xl:text-2xl'>“The artwork “Open” represents a traditional doorknob in the form of a hand which one can spot on the entrances of ancient buildings in Seville. The color palette of gold and black gives a touch of royalty and aristocracy. “</p>
    </div>
    <div className='text-3xl col-span-2 flex items-center justify-center gap-6'>
    <Icon className='2xl:text-5xl w-full border-r-2 border-black' icon="ph:arrow-left" />
    <Icon className='2xl:text-5xl w-full border-l-2 border-black ' icon="ph:arrow-right" />
    </div>
    <div className='col-span-2 text-center'>
        <h3 className='text-xl font-bold my-4 2xl:text-4xl'>Miguel Valdayo Boza</h3>
        <p className='w-full px-4 leading-8 2xl:leading-10 2xl:text-2xl'>“This work, made by the painter Elena,  presents us with a painting full of meaning and with multiple readings, all of them interconnected in a general whole that tells us about the cultural heritage that we enjoy in Andalusia and wonderfully resolved in a format in which each and every one of the elements that define the work is easily identifiable.” </p>
    </div>
</div>

      <img src={PhotoGroup} alt="" />
      </div>
      <Footer/>
    </div>
  );
}
