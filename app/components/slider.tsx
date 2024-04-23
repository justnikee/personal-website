import React from 'react'
import Image from 'next/image'


import reactImg from '../../public/React JS.svg'
import htmlImg from '../../public/HTML.png'
import cssImg from '../../public/GSAP.jpg'
import tailImg from '../../public/icons8-tailwind-css-48.png'
import nextimg from '../../public/svgviewer-png-output (2).png'
import nodeImg from '../../public/stack images/node-svgrepo-com.svg'
import jsImg from '../../public/JavaScript.svg'

type Props = {}

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

const Slider = (props: Props) => {
  return (
    <div className='flex bg-black py-9 overflow-hidden'>
        <div className='slider-track overflow-hidden'>
        {
            techSectionData.map((item, index) => (
                <div className='h-fit p-6 w-fit' key={item.id}>
                   <span className='
                    h-full w-full flex items-center justify-center
                   '>
                    <Image className='z-10 cursor-pointer w-16 bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]' src={item.icon} alt={item.text} />
                  </span>
                </div>
                  
            ))
        }
        </div>
        <div className='slider-track'>
        {
            techSectionData.map((item, index) => (
                <div className='h-fit p-6 w-fit' key={item.id}>
                   <span className='
                    h-full w-full flex items-center justify-center
                   '>
                    <Image className='z-10 cursor-pointer w-16 bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]' src={item.icon} alt={item.text} />
                  </span>
                </div>
                  
            ))
        }
        </div>
        <div className='slider-track'>
        {
            techSectionData.map((item, index) => (
                <div className='h-fit p-6 w-fit' key={item.id}>
                   <span className='
                    h-full w-full flex items-center justify-center
                   '>
                    <Image className='z-10 cursor-pointer w-16  bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]' src={item.icon} alt={item.text} />
                  </span>
                </div>
                  
            ))
        }
        </div>
    </div>
  )
}

export default Slider