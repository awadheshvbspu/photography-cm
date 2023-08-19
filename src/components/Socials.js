import React, { useContext } from 'react';
import {ImFacebook,ImTwitter,ImPinterest,ImInstagram,ImYoutube} from 'react-icons/im'
import { CursorContext } from '../context/CursorContext';

export default function Socials() {
  const { mouseEnterHandler,mouseLeaveHandler} =useContext(CursorContext)
  return (
    <section className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-3'  onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}>
    <li><a href='#'><ImFacebook/></a></li>
    <li><a href='#'><ImTwitter/></a></li>
    <li><a href='#'><ImPinterest/></a></li>
    <li><a href='#'><ImInstagram/></a></li>
    <li><a href='#'><ImYoutube/></a></li>
    </ul>
    </section>
  )
}

