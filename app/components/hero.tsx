"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

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

const [open , setOpen] = useState(false);
const handleClick = () => {
  setOpen(!open);

    gsap.to('.slider', {
      height: open ? '0%' : '100%',
      delay: 1,
      duration: 1,
    })

    gsap.to('.menu-wrapper', {
      opacity: open ? 0 : 1,
      duration: 0.1
    })
    
    gsap.to('.burger', {
        background: open ? '#000' : '#fff',
        delay: 1,
    });

    gsap.to('.sticks', {
      background: open ? '#000' : '#fff'
    })
}

    
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
        <div onClick={handleClick} className='burger z-[51] cursor-pointer fixed right-10 bottom-20 rounded-full bg-black  flex flex-col justify-center items-center gap-2 p-3 h-10 w-10 '>
          <span className='sticks h-[1px] w-full bg-white'></span>
          <span className='sticks h-[1px] w-full bg-white'></span>
        </div>
        </div>
    </section>
    <Menu open={open}/>
    </>
  )
}




const Menu = ({open}: {open: boolean}) => {

  const handleMouseEnter = (id: string) => {
    gsap.to(`.mouseoverText-${id}`, {
    y: -150,
    duration: 0.5,
    ease: 'power1.inOut'
    })
  }

  const hanldeMouseLeave = (id: string) => {
    gsap.to(`.mouseoverText-${id}`, {
      y: 0,
      duration: 0.5,
      ease: 'power1.inOut'
      })
  }

return (
  <>
     <div className={`slider w-screen bg-black absolute top-0 h-0 z-50 ${open ? 'opne' : ''}`}>
      <div className='menu-wrapper px-20 max-w-[1440px] flex flex-col justify-center h-full items-start'> 
        <Link onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={() => hanldeMouseLeave('home')} className='lg:text-9xl uppercase h-[140px] overflow-hidden flex flex-col gap-3' href="#">
          <span className='mouseoverText-home'>Home</span>
          <span className='mouseoverText-home'>Home</span>
        </Link>
        <Link onMouseEnter={() => handleMouseEnter('work')} onMouseLeave={() => hanldeMouseLeave('work')} className='lg:text-9xl uppercase h-[140px] overflow-hidden flex flex-col gap-3' href="#">
        <span className='mouseoverText-work'>Work</span>
          <span className='mouseoverText-work'>Work</span>
        </Link>
        <Link onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => hanldeMouseLeave('about')} className='lg:text-9xl uppercase h-[140px] overflow-hidden flex flex-col gap-3' href="#">
        <span className='mouseoverText-about'>About</span>
          <span className='mouseoverText-about'>About</span>
        </Link>
        <Link onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={() => hanldeMouseLeave('contact')} className='lg:text-9xl uppercase h-[140px] overflow-hidden flex flex-col gap-3' href="#">
        <span className='mouseoverText-contact'>Contact</span>
          <span className='mouseoverText-contact'>Contact</span>
        </Link>
      </div>
     </div>
  </>
)
}

export default Hero