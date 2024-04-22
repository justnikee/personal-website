"use client"

import React, { useLayoutEffect } from 'react'
import img from '../../public/stack images/img.png'
import Image from 'next/image'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import bgImage from '../../public/svg-image-19.svg'
import { useGSAP } from '@gsap/react'
type Props = {}

const About = (props: Props) => {

  gsap.registerPlugin(ScrollTrigger);


  useLayoutEffect(() => {

const blobAnime = gsap.timeline();
blobAnime.to('.blob', {
  scaleX: '1.3', 
  ease: 'power1.inOut',
  duration: 3,
})

ScrollTrigger.create({
  animation: blobAnime,
  trigger: ".main-stager",
  start: "top 70%",
  end: "+=300",
  scrub: true,
  // markers: true
  })

const tl =gsap.timeline()
tl.to(".stager-text span", {color: '#fff', stagger: 0.1, ease: 'power1.inOut'},1)

ScrollTrigger.create({
  animation: tl,
  trigger: '.main-stager',
  start: 'top 60%',
  end: '+=300',
  scrub: 0.1
})


},[]);


  return (
        <div className='relative w-full overflow-hidden pt-[20vw] mt-24 '>
        <div className='absolute z-0 top-0 left-0 w-[120%] h-full'>
        <Image className='blob w-[100vw] ' src={bgImage} alt='shape' />
        </div>
        <div className='w-[900px] mb-[31rem] m-auto main-stager relative'>
        <h2 className='stager-text1 text-[#f982fb] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
        WE CREATE THE WEBSITE <br/>
        THAT SUITS YOU
        </h2>
        <h2 className='stager-text2 text-[#f4f4f4] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
        WE CREATE THE WEBSITE <br/>
        THAT SUITS YOU
        </h2>
        </div>
        <div className='bg-black w-full'>
        <div className='grid-section mx-10 px-7 py-10 bg-[#1C1C1C] grid grid-cols-2 gap-7 h-[600px] rounded-3xl'>
          <div className='grid grid-cols-2 gap-7'>
            <div className='rounded-3xl bg-slate-400'></div>
            <div className='rounded-3xl bg-slate-400'> </div>
            <div className='rounded-3xl bg-slate-400'></div>
            <div className='rounded-3xl bg-slate-400'></div>
          </div>
          <div className='rounded-3xl bg-white'>
             
          </div>

        </div>
        </div>
       
        </div>
  )
}

export default About