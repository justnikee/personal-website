"use client"

import Image from 'next/image'
import { useRef, useState } from 'react';


import sun from '../../public/icons8-sun.svg'
import home from '../../public/icons8-home.svg'
import Link from 'next/link';

type Props = {}


const navdate = [{
    id: 1,
    text: 'Light Mode',
    icon: sun,
},
{
    id: 2,
    text: 'start',
    icon: home,
},
{
    id: 3,
    text: 'About me',
    icon: home,
},
{
    id: 4,
    text: 'Projects',
    icon: home,
},
{
    id: 5,
    text: 'Contact',
    icon: home,
}
];

const Header = (props: Props) => {

const handleClick = () => {

}

  return (
    <>
    <MobileDrawer/>
       <ul className='max-sm:hidden fixed top-0 left-1/2 translate-x-[-50%] w-full max-w-5xl border border-slate-100 border-1 flex m-auto overflow-hidden justify-between mt-3 h-14 rounded-full bg-[#000]'>
       {navdate.map((item) => (
       
              <Link href="#" key={item.id}
              className='nav-links'
              >
                    <Image width={15} height={15} alt={item.text} src={item.icon} />
                    <span className={`capitalize link-${item.id}`} >{item.text}</span>
                
              </Link>
            
       ))}
       </ul>

    </>
  )
}

const MobileDrawer = () => {

    const [open, setOpen] = useState(false);

    const overlay = useRef();
    const button = useRef();

   const handleClick = () => {
    setOpen(!open);
   }


    return(
        <>
        <ul className={`sm:hidden z-20 flex flex-col border border-white w-2/4 fixed top-0 right-0 justify-start items-end h-screen bg-black opa ${open ? 'block' : 'hidden'}`} 
        >
        {navdate.map((item) => (
        
               <Link href="#" key={item.id}
               className='flex h-16 items-center justify-start border-[#e3f7f7] border-b w-full gap-2 pl-4'
               >
                     <Image width={15} height={15} alt={item.text} src={item.icon} />
                     <span className={`capitalize link-${item.id}`} >{item.text}</span>
                 
               </Link>
             
        ))}
        </ul>
        <div ref={overlay} onClick={handleClick} className={`absolute top-0 left-0 bg-slate-500 w-screen h-screen z-10 ${open ? 'block' : 'hidden'}`}></div>
        <button ref={button} onClick={handleClick} className='bg-white text-black p-3 flex flex-col gap-1 rounded-sm absolute right-6 top-6'>
        <span className="h-[2px] w-5 bg-black"></span>
        <span className="h-[2px] w-5 bg-black"></span>
        <span className="h-[2px] w-5 bg-black"></span>
       </button>
        </>
    )
}

export default Header