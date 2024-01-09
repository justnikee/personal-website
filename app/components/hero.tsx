"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import chopper from '../../public/chopper.png'

type Props = {
  title1: string;
  title2: string;
  title3: string;
}

const Hero = ({title1, title2, title3} :Props) => {

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

},[]);

    
  return (
    <>
    <section className='border-b border-[#e3f7f7] w-full pt-24 pb-10 h-[505px]'>
        <Image className='max-sm:hidden absolute right-0 top-0 w-20 rotate-[-45deg]' src={chopper} alt='chopper form OP' />
        <div>
            <h2 style={{ fontWeight: fontWeight }} className={`text-[143px] leading-[123px] text-[#e3f7f7] text-center uppercase transition-all duration-100 ease-in-out`}>
                <span className='block'>{title1} </span>
                <span className='block'>{title2}</span>
                <span className='block'>{title3}</span>
            </h2>
        </div>
    </section>
    </>
  )
}

export default Hero