import React, { useContext } from 'react';
import WomanImg from '../img/contact/woman.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

export default function Contact() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-0 gap-x-8 text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'></motion.div>
          <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form className='flex gap-x-10'>
              <div>
                <input type='text' placeholder='Your Name' className='outline-none border border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' />
                <input type='text' placeholder='Your email' className='outline-none border border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' />
                <input type='text' placeholder='Your Message' className='outline-none border border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' />
                <button className='btn mt-[30px] mx-auto  lg:mx-0 self-start'>Send It</button>
              </div>
            </form>
          </div>
          <motion.div  onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'>
            <img src={WomanImg} alt='' />
          </motion.div>
        </div>
      </div>

    </motion.section>
  )
}

