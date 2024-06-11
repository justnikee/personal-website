"use client"

import React from 'react'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

type Props = {}

const HeaderNew = (props: Props) => {

    const [currentTime, setCurrentTime] = useState(new Date());

    const topText = useRef();
    const bottomText = useRef();

    function hanldeMouseEnter() {
      gsap.to([topText.current, bottomText.current],{
            y: -20,
            ease: 'power1.inOut',
            duration: 0.5
      })
    }

    function handleMouseLeave() {
      gsap.to([topText.current, bottomText.current],{
        y: 0
  })
    }



    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
      let hours = currentTime.getHours();
      let ampm = hours >= '12' ? 'PM' : 'AM' 
      let time = currentTime.getMinutes();
      let currentMinute = time < '10' ? `0${time}` : time;

  return (
    <nav className='h-20 flex justify-center bg-transparent top-0 w-full'>
        <div className='max-w-[1440px] px-10 flex justify-between items-center w-full'>
         <h2 className='big-cursor text-slate-200 text-4xl'>Nikhil.</h2>
         <div onMouseEnter={hanldeMouseEnter} onMouseLeave={handleMouseLeave} className='h-5 overflow-hidden text-slate-200 hidden'>
          <p ref={topText} className='text-sm h-5 uppercase '>Available For Full Time</p>
          <p ref={bottomText} className='text-sm h-5 uppercase '>Available For Full Time</p>
         </div>
         <span className='bg-slate-200 px-3 py-1 text-black rounded-xl bold'>{currentTime.getHours()} : {currentMinute} {ampm}</span>
        </div>
    </nav>
  )
}

export default HeaderNew