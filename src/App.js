import React, { useContext } from 'react'
import './App.css';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes'
import { CursorContext } from './context/CursorContext';
import {motion} from 'framer-motion'

function App() {
 const {cursorVariants,curbg} =useContext(CursorContext)
  return (
  <>
  <Header/>
  <AnimRoutes/>
  <motion.div
  variants={cursorVariants}
  animate={curbg}
  className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'>
  </motion.div>
  </>
  );
}

export default App;
