"use client"

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {}

const Preloader = (props: Props) => {

  const [counter, setCounter] = useState(0);
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
<div
        ref={loadingScreen}
        className="fixed top-0 left-0 bg-[#e3f7f7] h-screen w-screen z-[999999] hero_main overflow-hidden"
      >
        <h2
          className="fixed bottom-[10%] right-[10%] text-black italic font-extrabold text-[150px]"
          ref={text}
        >
          {counter}%
        </h2>
      </div>
  )
}

export default Preloader