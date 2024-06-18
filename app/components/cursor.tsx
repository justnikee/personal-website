"use client"

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

type Props = {};

const Cursor = (props: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let cursor = document.querySelector('.custom-cursor');
    let links = document.querySelectorAll('.big-cursor');

    const onMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
      gsap.to(cursor, { x: cursorPosition.x, y: cursorPosition.y });
    };

    document.addEventListener('mousemove', onMouseMove);

    const onMouseEnterLink = (e: any) => {
        gsap.to(cursor, { scale: 6 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, [cursorPosition]);

  return (
    <div
      className='custom-cursor hidden fixed top-[10px] left-0 w-8 h-8 bg-white border-2 border-black rounded-full mix-blend-difference p-3 sm:flex justify-center items-center'
      style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`, pointerEvents: 'none' }}
    >
    </div>
  );
};

export default Cursor;