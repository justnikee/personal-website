"use client"

import React, { useEffect } from 'react';
import gsap from 'gsap';

type Props = {};

const Cursor = (props: Props) => {
    useEffect(() => {
        let cursor = document.querySelector('.custom-cursor');
        let links = document.querySelectorAll('img');
        let cursorText = document.querySelector('.cursor-text');
    
        const onMouseMove = (e: any) => {
          const { clientX, clientY } = e;
          gsap.to(cursor, { x: clientX, y: clientY });
        };
    
        document.addEventListener('mousemove', onMouseMove);
    
        const onMouseEnterLink = (e: any) => {
            const link = e.target;
            if (link.classList.contains('view')) {
              gsap.to(cursor, { scale: 4 });
              if (cursorText) {
                gsap.to(cursorText, { autoAlpha: 1 }); // Fade in the text
              }
            } else {
              gsap.to(cursor, { scale: 1 });
              if (cursorText) {
                gsap.to(cursorText, { autoAlpha: 0 }); // Fade out the text
              }
            }
          };
      
          const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 });
            if (cursorText) {
              gsap.to(cursorText, { autoAlpha: 0 }); // Fade out the text
            }
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
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='custom-cursor fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference p-3 flex justify-center items-center'>
      <span className='cursor-text'>view</span>
    </div>
  );
};

export default Cursor;