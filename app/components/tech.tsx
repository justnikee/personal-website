"use client"

import React, { useState, useRef, RefObject } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import reactImg from '../../public/React JS.svg'
import htmlImg from '../../public/HTML.png'
import cssImg from '../../public/GSAP.jpg'
import tailImg from '../../public/stack images/tailwind-svgrepo-com.svg'
import nextimg from '../svgs/next.svg'
import nodeImg from '../../public/stack images/node-svgrepo-com.svg'
import jsImg from '../../public/JavaScript.svg'
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

const playlistId = '5uYL640b9UYrkxZSMSrgyo';

const Tech = (props: Props) => {

  return (
    <div className=''>
    <div className='rounded-2xl max-w-[1240px] w-full m-auto mb-24'>
    <div className='flex flex-row-reverse gap-7'>
        <RepeatingColumn />
    </div>
    </div>
    </div>
  )
}

const RepeatingColumn:React.FC<Props> = () => {
    // const [text, setText] = useState('Framework')
    // const hoverItemRef = techSectionData.map((item)=> useRef());

    // const handleMouseOver = (index: number) => {
    //     if(hoverItemRef[index].current){
    //         const currentText = hoverItemRef[index].current.textContent;
    //         setText(currentText)
    //         console.log(currentText)
    //     }
    // }

    // const handleMouseLeave = () => {
    //     setText('Framework')
    // }


    // const image = useRef(); 


    // useGSAP(() => {
    //        gsap.to('.image-anime', {
    //            background: '#fff',
    //        })  
    // })

    return(
        <>
        <div style={{ borderRadius: '12px' }} className='bg-[#F5F7F5] grid relative grid-cols-3 w-[60%] place-items-center border-[1.5px] border-[#1f1f1f] p-10'>
            { /*<div className='shine absolute top-0 w-full'></div>*/ }
        {
            techSectionData.map((item, index) => (
                <div className='h-fit p-6 w-fit' key={item.id}>
                   <span className='
                    h-full w-full flex items-center justify-center
                   '>
                    <Image className='z-10 cursor-pointer w-16 h-16 bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]' src={item.icon} alt={item.text} />
                    <p className='hidden'>{item.text}</p>
                  </span>
                </div>
                  
            ))
        }
        </div>
        <div className='w-[40%] flex flex-col gap-7'>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/0hKtu53OlIFXVuYkZwcn3o?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div className='p-10 rounded-xl bg-[#F5F7F5] text-black'>
            <p className='text-black font-bold uppercase text-xl mb-7'>TimeLine</p>
            <p className='text-black font-semibold uppercase mb-4'>2022 - current</p>
            <p className='text-black'>Working at <strong>Cybergineer Solution</strong> as a Frontend Developer, Mohali Punjab IN</p>
        </div>
        </div>
        </>
    )
}

export default Tech