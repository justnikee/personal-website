import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='bg-black w-full'>
             <div className='bg-[#BEF941] m-auto rounded-xl w-full max-w-[95%] px-12 py-24 flex flex-col items-center'>
                <div className='relative h-64 max-w-[900px] w-full'>
                <h2 className='stager-text1 text-[#564cf8] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
                LET'S BUILD THE WEBSITE OF YOUR DREAMS TOGETHER
                </h2>
                <h2 className='stager-text2 text-[#f4f4f4] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
                LET'S BUILD THE WEBSITE OF YOUR DREAMS TOGETHER
                </h2>
                </div>
                <div className='max-w-[550px] flex flex-col items-center gap-8'>
                    <p className='font-["Roboto"] text-lg text-center'>Make an appointment with us now, to start your brand's journey to the stars... or perhaps simply to get some news! 😉</p>
                    <a href='#' className='text-[16px] font-bold text-white border-2 border-white bg-[#564cf8] px-4 py-1 rounded-[50px]'>Contact Me</a>
                </div>
             </div>
    </div>
  )
}

export default Contact