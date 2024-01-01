import Image from "next/image"
import Link from "next/link"

import image from '../../public/project image.avif'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div>
    <ImageWithText position='flex-row' />
    <ImageWithText position='flex-row-reverse' />
    <ImageWithText position='flex-row' />
    <ImageWithText position='flex-row-reverse' />
    </div>
  )
}

export default Projects



const ImageWithText = (props: any) => {
    return (
    <div className={`flex px-10 gap-6 max-w-[1240px] mt-12 mb-12 ${props.position}`}>
       <div className="w-[35%]  gap-4">
        <span className="block text-sm mb-2">Web Application</span>
        <h3 className="text-4xl mb-4 font-bold">
          Ecommerse frontend
        </h3>
        <p className="leading-[24px] mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt officiis doloremque voluptate facilis qui, ipsum quam minima. Facilis recusandae itaque optio vero voluptate nostrum dignissimos porro, ipsum voluptates sunt.</p>
        <Link className="bg-[#e3f7f7] text-black px-9 py-3 text-sm capitalize border transition-all hover:text-[#e3f7f7] hover:bg-black hover:border-1 hover:border-white rounded-2xl" href="www.github.com/justnikee">View Sorce Code</Link>
       </div>
       <div className="w-[65%] rounded-3xl overflow-hidden"> 
           <Image className="h-full w-full object-cover" alt="project" src={image}></Image>
       </div>
    </div>
    )
}