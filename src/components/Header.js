import React, { useContext } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

export default function Header() {
  const { mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  return (
    <header  className='w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

    <Link to={'/'} className='max-w-[200px]'  onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}>
    <img src={Logo} alt=''/>
    </Link>
    <div  onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler} className='hidden xl:flex gap-x-12 font-semibold'>
    <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
    <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
    <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
    <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
    </div>
    </div>
    <Socials/>
    <MobileNav/>
    </header>
  )
}

