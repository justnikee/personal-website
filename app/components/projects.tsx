import React from 'react'
import Image from 'next/image'
import nikee from '../../public/nike.png'
import apiImage from '../../public/api.jpg'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div id="projects" className='bg-black pb-20 w-full'>
    <div className='bg-pink-300 m-auto rounded-xl max-w-[95%]  pt-32 md:pt-24 px-4 sm:px-12 py-12'>
      <div className='relative sm:h-24 h-64'>
      <h2 className='big-cursor stager-text1 text-[#564cf8] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
        SOME PROJECTS
      </h2>
      <h2 className=' big-cursor stager-text2 text-[#f4f4f4] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
        SOME PROJECTS
      </h2>
      </div>
      <div className='sm:grid sm:grid-cols-2 sm:gap-8 sm:pt-24 flex flex-col gap-8'>
        <div>
          <div className='rounded-xl p-4 bg-[#fefefe] max-h-80'>
            <Image className='h-full' alt='nike' src={nikee}/>
          </div>
          <div className='flex flex-row gap-3 mt-5 flex-wrap'>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>Web Development</span>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>Frontend</span>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>Web Design</span>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>E-Commerce</span>
          </div>
          <div className='flex justify-between items-center'>
          <h3 className='text-black font-["damn"] text-[40px] leading-10 pt-4'>Nike Clone</h3>
          <Link href="https://github.com/justnikee/fuzzy-potato" target='_blank' className='bg-[#BEF941] big-cursor text-sm px-6 py-3 rounded-3xl mt-5 block w-fit uppercase font-bold'>View Code</Link>
          </div>
        </div>
        <div>
          <div className='rounded-xl p-4 bg-[#fefefe] max-h-80 overflow-hidden'>
            <Image className='h-full object-cover' alt='nike' src={apiImage}/>
          </div>
          <div className='flex flex-row gap-3 mt-5 flex-wrap'>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>Web Development</span>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>Backend</span>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>NodeJs</span>
            <span className='text-sm uppercase text-white bg-[#564cf8] border-1 border-white rounded-xl px-2 py-1'>Shop API</span>
          </div>
          <div className='flex justify-between items-center'>
          <h3 className='text-black font-["damn"] text-[40px] leading-10 pt-4'>Backend Store API</h3>
          <Link href="https://github.com/justnikee/Backend" target='_blank' className='bg-[#BEF941] big-cursor text-sm px-6 py-3 rounded-3xl mt-5 block w-fit uppercase font-bold'>View Code</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects