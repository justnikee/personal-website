"use client"

import React, { useState, useRef, RefObject, ReactHTML } from 'react'

import reactImg from '../svgs/react.svg'
import htmlImg from '../../public/stack images/html-124-svgrepo-com.svg'
import cssImg from '../../public/stack images/css3-svgrepo-com.svg'
import tailImg from '../../public/stack images/tailwind-svgrepo-com.svg'
import nextimg from '../svgs/next.svg'
import nodeImg from '../../public/stack images/node-svgrepo-com.svg'
import jsImg from '../../public/stack images/js01-svgrepo-com.svg'
import Image from 'next/image'


type Props = {
    hoverItemRef : RefObject<string>,
    handleMouseOver : (ref: RefObject<HTMLSpanElement>) => void;
}


const techSectionData = [
    {
        id: 1,
        text: 'Html',
        icon: htmlImg
    },
    {
        id: 2,
        text: 'css',
        icon: cssImg
    },
    {
        id: 3,
        text: 'JS',
        icon: jsImg
    },
    {
        id: 4,
        text: 'React',
        icon: reactImg
    },
    {
        id: 5,
        text: 'NEXT',
        icon: nextimg
    },
    {
        id: 6,
        text: 'Tailwind',
        icon: tailImg
    },
    {
        id: 7,
        text: 'Gsap',
        icon: tailImg
    },
    {
        id: 8,
        text: 'Node',
        icon: nodeImg
    },
]

const Tech = (props: Props) => {

  return (
    <div className='rounded-2xl max-w-[1240px] w-full m-auto mb-24'>
    <div className='flex flex-row-reverse'>
        <RepeatingColumn />
    </div>
    </div>
  )
}

const RepeatingColumn:React.FC<Props> = () => {
    const [text, setText] = useState('Framework')
    const hoverItemRef = techSectionData.map((item)=> useRef());

    const handleMouseOver = (index: number) => {
        if(hoverItemRef[index].current){
            const currentText = hoverItemRef[index].current.textContent;
            setText(currentText)
            console.log(currentText)
        }
    }

    const handleMouseLeave = () => {
        setText('Framework')
    }

    return(
        <>
        <div className='h-full w-[40%] col-span-2 flex items-center p-10 justify-start border-r  border-b leading-8 border-[#1F1F1F] border-t'>
            <p className='text-4xl capitalize text-left font-bold leading-[44px]'>I can cook with popular & modern frameworks / languages <br/><span className='italic uppercase'>{text}</span></p>
        </div>
        <div className='grid relative grid-cols-3 w-[60%] place-items-center border-[1.5px] border-[#1f1f1f] p-20'>
            <div className='shine absolute top-0 w-full'></div>
        {
            techSectionData.map((item, index) => (
                <div className='h-40 w-66' key={item.id}>
                   <span ref={hoverItemRef[index]} onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseOver(index)} className='
                    h-full w-full flex items-center justify-center
                   '>
                    <Image className='invert w-12 h-12 ease-in duration-500 hover:invert-[0.5]' src={item.icon} alt={item.text} />
                    <p className='hidden'>{item.text}</p>
                  </span>
                </div>
                  
            ))
        }
        </div>
        </>
    )
}

export default Tech