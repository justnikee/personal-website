"use client"

import React from 'react'
import { useState, useEffect } from 'react';

type Props = {}

const HeaderNew = (props: Props) => {

    const [currentTime, setCurrentTime] = useState(new Date());

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
    <nav className='h-20 flex justify-center bg-transparent fixed top-0 w-full'>
        <div className='max-w-[1440px] px-10 flex justify-between items-center w-full'>
         <h2 className=' text-black text-4xl'>Nikhil.</h2>
         <span className='bg-black px-3 py-1 text-white'>{currentTime.getHours()} : {currentMinute} {ampm}</span>
        </div>
    </nav>
  )
}

export default HeaderNew