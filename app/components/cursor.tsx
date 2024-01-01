"use client"

import React, { useEffect } from 'react'
import gsap from 'gsap'
type Props = {}

const Cursor = (props: Props) => {
     

    useEffect(() => {
        let cursor = document.querySelector('.custom-cursor');
        let links = document.querySelectorAll('a'); 
        let cursorText = document.querySelector('.cursor-text');

        const onMouseMove = (e: any) => {
            const {clientX, clientY} = e;
            gsap.to(cursor, { x: clientX, y:clientY})
        }
        
        document.addEventListener('mousemove', onMouseMove)

        const onMouseEnterLink = (e: any) => {
            const link = e.target;
            if(link.classList.contains('view')){
                gsap.to(cursor, {scale: 4})
                cursorText.style.display = 'block';
            }else{
                gsap.to(cursor, {scale: 4})
            }

        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale: 1})
            cursorText.style.display = 'none';
        }
        
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })

    }, [])
  return (
    <div className='custom-cursor fixed top-0 left-0 w-5 h-5 bg-white rounded-full mix-blend-difference p-3 flex justify-center items-center'>
        <span className='cursor-text'>
            view
        </span>
        </div>
  )
}

export default Cursor