"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useLayoutEffect } from 'react'
import piece from '../../public/piece.svg'
import ast from '../../public/astrics.svg'
import eye from '../../public/eye.svg'
import Image from 'next/image'

type Props = {
  title1: string;
  title2: string;
  title3: string;
}

const Hero = ({title1, title2, title3} :Props) => {

  const [fontWeight, setFontweight] = useState(700);
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

  gsap.to('.burger', {
    background: open ? '#000' : '#fff',
});

gsap.to('.sticks', {
  background: open ? '#fff' : '#000',
})

gsap.to('.stick1', {
  y: open ? 0 : 4.5,
  rotationZ: open ? 0 : 45, 
  transformOrigin: '50% 50%',
});

gsap.to('.stick2', {
  y: open ? 0 : -4.5,
  rotationZ: open ? 0 : -45, 
  transformOrigin: '50% 50%', 
});

    gsap.to('.slider', {
      height: open ? '0%' : '100%',
      delay: 0,
      duration: 1,
    })

    gsap.to('.menu-wrapper', {
      opacity: open ? 0 : 1,
      duration: 0.1
    })
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    // Animation for first icon
    const iconUpDown1 = gsap.timeline();
    iconUpDown1.to('.icon-animation', {
      y: -100,
      ease: 'power1.inOut',
      duration: 4,
    });
    
    ScrollTrigger.create({
      animation: iconUpDown1,
      trigger: '.hero',
      start: 'top 0', // Start immediately when hero comes into view
      end: '+=300',
      scrub: true,
      // markers: true,
    });
    
    // Animation for second icon
    const iconUpDown2 = gsap.timeline();
    iconUpDown2.to('.icon-animation2', {
      y: -200,
      ease: 'power1.inOut',
      duration: 5,
      delay: 1 // Delay the animation by 1 second
    });
    
    ScrollTrigger.create({
      animation: iconUpDown2,
      trigger: '.hero',
      start: 'top 0', // Start when hero is 20% into view
      end: '+=300',
      scrub: true,
      // markers: true,
    });
    
    // Animation for third icon
    const iconUpDown3 = gsap.timeline();
    iconUpDown3.to('.icon-animation3', {
      y: -100,
      ease: 'power1.inOut',
      duration: 6,
      delay: 2 // Delay the animation by 2 seconds
    });
    
    ScrollTrigger.create({
      animation: iconUpDown3,
      trigger: '.hero',
      start: 'top 0', // Start when hero is 40% into view
      end: '+=300',
      scrub: true,
      // markers: true,
    });
    

  }, []);
    
  return (
    <>
    <section className={`hero w-full pt-48 pb-10 h-screen flex justify-center ${open ? 'overflow-hidden': ''}`}>
        <div className='max-w-[1440px] w-full px-10 flex flex-col justify-center gap-10 items-center h-full relative'>
            <h2 /* style={{ fontWeight: fontWeight }} */ className={`text-[110px] leading-[100px] text-slate-200 uppercase transition-all duration-100 ease-in-out`}>
              <div className='relative'>
                  <Image className='icon-animation absolute left-[0px] top-[-50px]'  alt="icon" src={piece} />
                  <span className='big-cursor inline-block lg:pl-32 lg:pr-16'>{title1}</span>
                  <Image className='icon-animation2 absolute right-[-120px] top-[-70px] h-52 rotate-12' alt='icon' src={eye} />
              </div>
              <div>
                  <span className='big-cursor inline-block lg:pl-96 lg:pr-16'>{title2}</span>
              </div>
              <div className='relative'>
              <Image className='icon-animation3 absolute right-[-100px] h-32 bottom-[0px]' alt='icon' src={ast} />
                  <span className='big-cursor inline-block lg:pl-32 lg:pr-16'>{title3}</span>
              </div>
            </h2>
        <div className='fixed left-10 bottom-20 text-slate-200 flex gap-2 rotate-[270deg]'>
          <span>SOUND</span>
          <span className='pointer'>OFF</span>
        </div>
        <div onClick={handleClick} className='big-cursor burger z-[51] cursor-pointer bg-slate-200 fixed right-10 bottom-20 rounded-full flex flex-col justify-center items-center gap-2 p-3 h-10 w-10 '>
          <span className='sticks stick1 h-[1px] w-full bg-black'></span>
          <span className='sticks stick2 h-[1px] w-full bg-black'></span>
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
     <div className={`slider w-screen bg-black fixed top-0 left-0 h-0 ${open ? 'pt-24' : ''} overflow-hidden z-50 ${open ? 'opne' : ''}`}>
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