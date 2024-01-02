"use client"
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import chopper from '../../public/chopper.png'

type Props = {}

const Hero = (props: Props) => {

    const [counter, setCounter] = useState(0);
    const [fontWeight, setFontweight] = useState(300);

  const startLoader = () => {
    if (counter === 100) {
      return;
    }

    setCounter((prevCounter) => {
      const newCounter = prevCounter + Math.floor(Math.random() * 10) + 1;

      if (newCounter > 100) {
        return 100;
      }

      return newCounter;
    });

    let delay = Math.floor(Math.random() * 200) + 50;

    setTimeout(startLoader, delay);
  };



    useEffect(() => {

        startLoader();

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



    const loadingScreen = useRef();
    const text = useRef();
    const bar = useRef();
  
    useLayoutEffect(() => {
      gsap.registerPlugin();
  
      const timeline = gsap.timeline();
  
      timeline.to(text.current, {
        ease: "power2.inOut",
      });
  
      timeline.to(loadingScreen.current, {
        height: 0,
        duration: 1,
        delay: 3,
      });
  
      timeline.to(
        [text.current, bar.current],
        {
          opacity: 0,
        },
        "-=2"
      );
    }, []);

  return (
    <>
     <div
        ref={loadingScreen}
        className="fixed top-0 left-0 bg-black h-full w-full z-[999999] hero_main"
      >
        <div
          ref={bar}
          className="bg-black border-t border-[#e3f7f7] h-[100px] w-0 fixed bottom-0 left-0 ease-in-out"
          style={{ width: counter + "%" }}
        ></div>
        <h2
          className="fixed top-1/2 left-1/2 text-[#e3f7f7] text-6xl translate-x-[-50%] translate-y-[-50%]	"
          ref={text}
        >
          {counter}%
        </h2>
      </div>
    <section className='border-b border-[#e3f7f7] w-full pt-24 pb-10'>
        <Image className='absolute right-0 top-0 w-20 rotate-[-45deg]' src={chopper} alt='chopper form OP' />
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