import React, { useContext, useEffect, useState } from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

export default function Portfolio() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })

  })
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-16 pb-8'>
          <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start -mt-[100px]'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Ut enim ad minim veniam, quis nostrud</b> exercitation ullamco laboris .
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.giat nulla pariatur.</p>
            <Link to={'/portfolio'} className='btn mb-[30px]'>View my Work</Link>
          </motion.div>
          <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='grid  grid-cols-2 lg:gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image1} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image2} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image3} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image4} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' alt='' />
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

