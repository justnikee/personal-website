import { Jost } from 'next/font/google'
import React from 'react'

type Props = {}


const Ingredients = [
    {
        id: 1,
        name: "HTML5",
        color: "orange"
    },
    {
        id: 2,
        name: "CSS3",
        color: "blue"
    },
    {
        id: 3,
        name: "JavaScript",
        color: "yellow"
    },
    {
        id: 4,
        name: "React",
        color: "skyblue"
    },
    {
        id: 5,
        name: "Next JS",
        color: "black"
    },
    {
        id: 6,
        name: "TailWind",
        color: "teal"
    },
    {
        id: 7,
        name: "Git / Github",
        color: "green"
    }
]

const GridSection = (props: Props) => {
  return (
<div className='bg-black w-full'>
    <div className='grid grid-cols-3 gap-4 max-w-[1240px] m-auto'>
       <div className='rounded- border border-white'>
        <h2 className='text-2xl mb-10'>Ingredients I use for Cooking</h2>
        <div className='flex flex-wrap gap-4'>
             {
             Ingredients.map((item) => (
               <div className={`bg-red-300 rounded-3xl px-6`} key={item.id}>
                <p className='text-black'>{item.name}</p>
               </div>
             ))
             }
        </div>
       </div>
       <div>
       <h2>Timeline</h2>
<p>2022 - 2024</p>
<p>UI/UX Designer @Cj&Co, showcasing company projects in portfolio.</p>

<p>2019 - 2022</p>
<p> Prior to CJ&Co, I immersed myself in freelance projects, actively seeking opportunities to refine my skills as a UI/UX designer. This independent phase proved pivotal in shaping my expertise and honing my craft.</p>
       </div>
       <div>
        <h2>Spotify</h2>
       </div>
    </div>
    </div>
  )
}

export default GridSection;