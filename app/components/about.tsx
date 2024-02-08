"use client"

import React, { useLayoutEffect } from 'react'
import img from '../../public/stack images/img.png'
import Image from 'next/image'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
type Props = {}

const About = (props: Props) => {

  gsap.registerPlugin(ScrollTrigger);


  useLayoutEffect(() => {


const tl =gsap.timeline()
tl.to(".stager-text span", {color: '#fff', stagger: 0.1, ease: 'power1.inOut'},1)

ScrollTrigger.create({
  animation: tl,
  trigger: '.main-stager',
  start: 'top 60%',
  end: '+=300',
  scrub: 0.1
})

const tlImg = gsap.timeline();

tlImg.to(".about-image", { rotation: 360, stagger: 0.1 })

ScrollTrigger.create({
animation: tlImg,
trigger: ".main-stager",
start: "top 20%",
end: "+=300",
scrub: true
})

},[]);

  
  return (
    <div className='h-[600px] max-w-3xl m-auto flex flex-col justify-center gap-6 main-stager'>
        <h2 className='stager-text text-black'>
        <span>Good</span>
        <span> design</span>
        <span> creates</span>
        <span> meaningful</span>
        <span> and</span>
        <span> memorable</span>
        <Image className='about-image inline-block h-10 w-10' src={img} alt='ninja'/>
        <span> connections</span>
        </h2>
        <div className='flex gap-4'>
           <p className='flex-1'>Create digital solutions that are not only functional and aesthetically pleasing, but also deeply impactful, memorable and meaningful to improve people's lives. <br/><br/>
           These solutions represent a constant commitment to excellence and innovation, 
           to offer experiences that last in the collective memory.    </p>
        </div>
    </div>
  )
}

export default About