"use client"

import React, { useState, useRef, RefObject, ReactHTML } from 'react'

import reactImg from '../../public/stack images/react-javascript-js-framework-facebook-svgrepo-com.svg'
import htmlImg from '../../public/stack images/html-124-svgrepo-com.svg'
import cssImg from '../../public/stack images/css3-svgrepo-com.svg'
import tailImg from '../../public/stack images/tailwind-svgrepo-com.svg'
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
        icon: tailImg
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
    <div className='border-[1px] border-[#1F1F1F] rounded-2xl h-[400px] max-w-[1240px] w-full m-auto mb-24'>
    <div className='grid grid-cols-6 h-full w-full '>
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
        <div className='h-full w-full col-span-2 flex items-center px-8 leading-normal justify-start border-r border-b border-[#1F1F1F] border'>
            <p className='text-4xl capitalize font-extrabold text-left'>Technologies I <br/><span className='uppercase'>Use - {text}</span></p>
        </div>
        {
            techSectionData.map((item, index) => (
                <div className='h-full w-full border-r border-b border-[#1F1F1F] border'  key={item.id}>
                   <span ref={hoverItemRef[index]} onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseOver(index)} className='
                    h-full w-full flex items-center justify-center
                   '>
                    <Image className='invert w-12 h-12 ease-in duration-500 hover:invert-[0.5]' src={item.icon} alt={item.text} />
                    <p className='hidden'>{item.text}</p>
                  </span>
                </div>
                  
            ))
        }
        </>
    )
}

export default Tech