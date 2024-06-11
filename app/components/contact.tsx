import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id='contact' className='bg-black w-full pb-12'>
             <div className='bg-[#ef4444] m-auto rounded-xl w-full max-w-[95%] px-12 py-24 flex flex-col items-center'>
                <div className='relative h-[700px] sm:h-64 max-w-[900px] w-full'>
                <h2 className='big-cursor stager-text1 text-[#564cf8] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
                LET&apos;S COOK THE DISH OF YOUR DREAMS TOGETHER
                </h2>
                <h2 className='big-cursor stager-text2 text-[#f4f4f4] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
                LET&apos;S COOK THE DISH OF YOUR DREAMS TOGETHER
                </h2>
                </div>
                <div className='max-w-[550px] flex flex-col items-center gap-8'>
                    <p className='font-["Roboto"] text-2xl sm:text-3xl text-center'>Make an appointment with us now, to start your brand&apos;s journey to the stars... or perhaps simply to get some news! 😉</p>
                    <a href='mailto:nxkeeyyy.dev@gmail.com' className='big-cursor text-[16px] font-bold text-white border-2 border-white bg-[#564cf8] px-6 py-3 uppercase rounded-[50px]'>Contact Me</a>
                </div>
             </div>
    </div>
  )
}

export default Contact