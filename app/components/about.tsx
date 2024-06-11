"use client"

import React, { useLayoutEffect } from 'react'
import Image from 'next/image'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import bgImage from '../../public/svg-image-19.svg'
import rank from '../../public/svg-image-22.png'
import circle from '../../public/svg-image-23.png'

type Props = {}

const About = (props: Props) => {

  gsap.registerPlugin(ScrollTrigger);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const blobAnime = gsap.timeline();
    blobAnime.to('.blob', {
      scaleX: '1.3', 
      ease: 'power1.inOut',
      duration: 3,
    });
  
    ScrollTrigger.create({
      animation: blobAnime,
      trigger: ".main-stager",
      start: "top 70%",
      end: "+=300",
      scrub: true,
    });
  
    const tl = gsap.timeline();
    tl.to(".stager-text span", {color: '#fff', stagger: 0.1, ease: 'power1.inOut'}, 1);
  
    ScrollTrigger.create({
      animation: tl,
      trigger: '.main-stager',
      start: 'top 60%',
      end: '+=300',
      scrub: 0.1
    });

  }, []);


  return (
        <div className='circle-rotation relative w-full overflow-hidden'>
        <Image className='blob object-cover object-top sm:w-[100vw] absolute z-0 top-0 left-0 w-[120%] h-[1000px]' src={bgImage} alt='shape' />
        <div className='h-[80vh] flex items-center justify-center'>
        <div className=' w-full h-[400px] sm:h-[200px] sm:w-[900px] sm:mb-[10rem] m-auto main-stager relative'>
        <h2 className='big-cursor stager-text1 text-[#f982fb] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
        I CAN COOK THE DISHES <br/>
        THAT YOU LOVE
        </h2>
        <h2 className='big-cursor stager-text2 text-[#f4f4f4] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
        I CAN COOK THE DISHES <br/>
        THAT YOU LOVE
        </h2>
        </div>
        </div>


        <div className='bg-black w-full '>
        <div className='grid-section sm:mx-10 px-7 py-10 bg-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 gap-7 rounded-3xl z-50 relative'>
          <div className='grid1 grid grid-cols-2 gap-7'>
            <div className='rounded-xl bg-[#A59FFF] flex flex-col justify-center items-center  p-5'>
              <h3 className='font-["damn"] text-[60px] leading-[60px] sm:text-[96px] sm:leading-[96px] text-black'>80+</h3>
              <p className='text-sm text-black font-["Roboto"]'>Customers</p>
            </div>
            <div className='rounded-xl bg-[#F4F4F4] flex flex-col justify-center items-center p-5'>
            <h3 className='font-["damn"] text-[60px] leading-[60px] sm:text-[96px] sm:leading-[96px] bg-[] text-black'>2 Years</h3>
              <p className='text-sm text-black font-["Roboto"]'>of experience</p> 
              </div>
            <div className='rounded-xl bg-[#F982FB] flex flex-col justify-center items-center p-5'>
            <h3 className='font-["damn"] text-[60px] leading-[60px] sm:text-[96px] sm:leading-[96px] bg-[] text-black'>80+</h3>
              <p className='text-sm text-black font-["Roboto"]'>projects completed</p> 
            </div>
            <div className='rounded-xl bg-[#BEF941] flex flex-col justify-center items-center p-5'>
              <h3 className='font-["damn"] text-[60px] leading-[60px] sm:text-[96px] sm:leading-[96px] bg-[] text-black'>100%</h3>
              <p className='text-sm text-black font-["Roboto"] text-center'>of satisfied customers!</p>
            </div>
          </div>
          <div className='grid2 rounded-xl bg-[#E0C0EA] gap-5 p-8 flex flex-col justify-center'>
             <h3 className='text-black font-["damn"] text-[40px] leading-10'>Your website, an exact replica of <br/>your vision</h3>
              <p className='text-black font-["Roboto"] text-lg leading-5'>Through rigorous methodology and meticulous attention to detail, we guarantee that your site will not only be functional and responsive, but a true work of digital art, capturing the essence of your brand down to the smallest pixel.
              <br />
              <br />
              Discover how our “Pixel Perfect” approach can make the difference to your online presence, making your site not only visually impressive but also incredibly intuitive for your visitors.
              </p>
          </div>
          <Ranking/>
          <Art/>
          <Control/>
        </div>
        </div>
       
        </div>
  )
}


const Ranking = () => {
  return (
    <>
    <div className='grid3 rounded-xl bg-[#f4f4f4] p-8 relative md:overflow-hidden'>
      <div className='md:w-[42%] '>
      <h3 className='text-black font-["damn"] text-[40px] leading-10 mb-4'>Raise your website to the top of the rankings</h3>
    <p className='text-black font-["Roboto"] text-lg leading-5'> Integrating SEO from the creation of your website is crucial to ensure its visibility and long-term success.<br/><br/>
        We adopt a proactive SEO strategy, tweaking every element to respond to search engines.<br/><br/>
        By doing so, we ensure that your site not only exists, but shines in search results, attracting quality and engaging traffic.
    </p>
      </div>
      <Image className='absolute h-32 w-32 right-0 top-[-90px] sm:top-2 sm:right-2' src={rank} alt='rank icon' />
    </div>
    </>
  )
}


const Art = () => {

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() =>{
    
    gsap.fromTo('.rotate-icon' , {
      rotation: 0,
      transformOrigin: 'center'
    },{
      rotation: 360,
      scrollTrigger: {
         trigger: '.circle-rotation',
         start: 'top 80%', 
         end: 'bottom 20%',
         scrub: true,
        //  markers: true 
      }
    })


  },[])


  return (
    <>
    <div className='p-8 flex flex-col bg-[#BEF941] rounded-xl relative'>
    <h3 className='text-black font-["damn"] text-[40px] leading-10 mb-4 max-w-[400px]'>Raise your website to the top of the rankings</h3>
      <p className='text-black font-["Roboto"] text-lg leading-5 max-w-[400px]'> 
      Make your website unforgettable with personalized animations. <br/><br/>
      By integrating fluid and captivating animations, we transform every interaction into a memorable visual experience for your visitors.<br/><br/>
      With our expertise, your site will not only be visited, it will be experienced!
    </p>
    <Image className='rotate absolute top-[-100px] right-[-40px] rotate-icon' src={circle} alt='icon' />
    </div>
    </>
  )
}


const Control = () => {
  return (
    <>
    <div className='p-8 flex flex-col bg-[#FF1D63] rounded-xl'>
    <h3 className='text-black font-["damn"] text-[40px] leading-10 mb-4 max-w-[400px]'>Take Control: Free Training and Dedicated Support</h3>
      <p className='text-black font-["Roboto"] text-lg leading-5 max-w-[400px]'> 
      So that you can navigate your new site with ease and confidence. <br/><br/>
      This initiative aims to familiarize you with the functionality and management of your site.<br/><br/>
      With our post-launch support, you are assured of having all the keys in hand for successful and worry-free site management.
    </p>
    </div>
    </>
  )
}





export default About