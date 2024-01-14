"use client"

import { useEffect, useState } from 'react'
// import newSong from '../../public/audio/audio.mp3'
import Link from 'next/link'

type Props = {
  title1: string;
  title2: string;
  title3: string;
}

const Hero = ({title1, title2, title3} :Props) => {

  const [fontWeight, setFontweight] = useState(500);
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
    <section className='border-b w-full pt-24 pb-10 h-screen bg-white flex justify-center'>
        <div className='max-w-[1440px] w-full px-10 flex flex-col justify-center gap-10 items-center h-full relative'>
          <Link href="#">
            <h2 style={{ fontWeight: fontWeight }} className={`text-[143px] leading-[123px] text-black uppercase transition-all duration-100 ease-in-out`}>
                <span className='inline-block lg:pl-32'>{title1}</span>
                <span className='inline-block lg:pl-96'>{title2}</span>
                <span className='inline-block lg:pl-32'>{title3}</span>
            </h2>
            </Link>
            <div className='h-24 w-24 rounded-full border-4 border-black'>
        </div>
        <div className='fixed left-10 bottom-20 text-black flex gap-2 rotate-[270deg]'>
          <span>SOUND</span>
          <span className='pointer'>OFF</span>
        </div>
        <div className='fixed right-10 bottom-20 rounded-full bg-black  flex flex-col justify-center items-center gap-2 p-3 h-10 w-10 '>
          <span className='h-[1px] w-full bg-white'></span>
          <span className='h-[1px] w-full bg-white'></span>
        </div>
        </div>
    </section>
    <Menu/>
    </>
  )
}




const Menu = () => {
return (
  <>
     <div className='h-screen w-screen bg-black'>
      <div className='px-20 max-w-[1440px] flex flex-col justify-center h-full items-start'> 
        <Link className='lg:text-9xl uppercase' href="#">
          <span>Home</span>
        </Link>
        <Link className='lg:text-9xl uppercase' href="#">
          <span>Work</span>
        </Link>
        <Link className='lg:text-9xl uppercase' href="#">
          <span>About</span>
        </Link>
        <Link className='lg:text-9xl uppercase' href="#">
          <span>Contact</span>
        </Link>
      </div>
     </div>
  </>
)
}

export default Hero