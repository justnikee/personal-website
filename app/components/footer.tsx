import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex justify-center flex-col items-center w-full  border-t border-b border-[#e3f7f7]'>
        <div className='flex h-[250px] justify-center items-center w-full border-b border-[#e3f7f7]'>
        <div className='flex-1 flex items-center justify-center border-r border-[#e3f7f7] h-full'>
        <h3 className='text-[31px] font-[900] text-center '>NXKEEYYY</h3>
        </div>
    <div className='flex-1 h-full border-r border-[#e3f7f7]'>
        <ul className='flex flex-col h-full'>
            <li className='h-1/4 border-b border-[#e3f7f7] flex items-center justify-center  hover:bg-[#e3f7f7] hover:text-black'>Home</li>
            <li className='h-1/4 border-b border-[#e3f7f7] flex items-center justify-center hover:bg-[#e3f7f7] hover:text-black'>About</li>
            <li className='h-1/4 border-b border-[#e3f7f7] flex items-center justify-center hover:bg-[#e3f7f7] hover:text-black'>Projects</li>
            <li className='h-1/4 border-b border-[#e3f7f7] flex items-center justify-center hover:bg-[#e3f7f7] hover:text-black'>Contact</li>
        </ul>
    </div>
    <div className='flex-1 h-full border-r border-[#e3f7f7] flex justify-center items-center hover:bg-[#e3f7f7] hover:text-black'>
        <Link href="mailto: Nikhil98161@gmail.com">nikhil98161@gmail.com</Link>
    </div>
    <div className='flex-1 h-full flex justify-center items-center p-5'>
        <p className='text-xl font-extrabold'>It's the opportunity we have to create something incredible together.</p>
    </div>
        </div>
        <div className='flex w-full justify-between items-center px-14 h-[80px] border-b border-[#e3f7f7] mb-5'>
            <p>© 2023 Nikhil. All rights reserved</p>
            <div>icosn</div>
        </div>

    </div>
  )
}

export default Footer