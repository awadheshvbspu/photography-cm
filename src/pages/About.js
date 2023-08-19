import React, { useContext } from 'react';
import WomanImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


export default function About() {
  const { mouseEnterHandler,mouseLeaveHandler} =useContext(CursorContext)
  return (
    <motion.section initial={{ opacity: 0 , y:'100%'}}
    animate={{ opacity: 1, y:0 }}
    exit={{ opacity: 0, y:'100%' }}
    transition={transition1} 
    className='section'>
      <div className='container mx-auto h-full relative'  onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          <motion.div 
          initial={{ opacity: 0 , y:'-80%'}}
    animate={{ opacity: 1, y:0 }}
    exit={{ opacity: 0, y:'-80%' }}
          className='flex-1 pt-35 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Ut enim ad minim veniam, quis nostrud</b> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.giat nulla pariatur.</p>
            <Link to={'/portfolio'} className='btn'>View my Work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

