"use client"
import React, { useEffect, useState } from 'react'

type Props = {}

const Hero = (props: Props) => {
    const [fontWeight, setFontweight] = useState(300);
    

    useEffect(() => {
        const handlemouseMove = (event: any) => {
          const screenWidth = window.innerWidth;
          const cursorPosition = event.clientX;

      const middle60Start = 0.2 * screenWidth; 
      const middle60End = 0.8 * screenWidth;  

      const adjustedCursorPosition = Math.max(Math.min(cursorPosition, middle60End), middle60Start);

      const newFontWeight = Math.round(((adjustedCursorPosition - middle60Start) / (middle60End - middle60Start)) * 600) + 300;

          setFontweight(newFontWeight)
        }

        window.addEventListener('mousemove', handlemouseMove);

        return() => {
            window.removeEventListener('mousemove', handlemouseMove)
        }
 
    },[])

  return (
    <>
    <section className='border-b border-[#e3f7f7] w-full pt-24 pb-10'>
        <div>
            <h2 style={{ fontWeight: fontWeight }} className={`text-[143px] leading-[123px] text-[#e3f7f7] text-center uppercase transition-all duration-100 ease-in-out`}>
                <span className='block'>Hello I'm Nikhil</span>
                <span className='block'>I'm a cook & Cook</span>
                <span className='block'>things for web</span>
            </h2>
        </div>
    </section>
    </>
  )
}

export default Hero