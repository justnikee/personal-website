import React from 'react'

type Props = {}




const Newfooter = (props: Props) => {
  return (
    <> 
    <section className='fixed bottom-4'>
          <div className='bg-colered'></div>
          <div className='w-fit bg-black border-gray-400 border p-4 rounded-[20px] flex justify-between gap-2'>
             <p><a className=" px-6 py-3 rounded-[20px] hover:bg-slate-300 hover:transition-all hover:text-black" href="#">Skills</a></p>
             <p><a className=" px-6 py-3 rounded-[20px] hover:bg-slate-300 hover:transition-all hover:text-black" href="#">Experiance</a></p>
             <p><a className=" px-6 py-3 rounded-[20px] hover:bg-slate-300 hover:transition-all hover:text-black" href="#">Resume</a></p>
             <p><a className=" px-6 py-3 rounded-[20px] hover:bg-slate-300 hover:transition-all hover:text-black" href="#">Contact</a></p>
          </div>
    </section>
    </>
  )
}

export default Newfooter