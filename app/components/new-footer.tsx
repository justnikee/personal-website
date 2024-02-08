import React from 'react'

type Props = {}

const Newfooter = (props: Props) => {
  return (
    <> 

    <section className='fixed bottom-0 w-1/2'>
          <div className='bg-colered'></div>
          <div className='w-full'>
            <button className='flex gap-5 items-center w-full bg-black border-slate-200 border-t border-r border-l rounded-lg p-3'>
                <h4 className='w-1/2' >connect with me</h4>
                <span>Spaces: 2</span>
                <span>UTF: 8</span>
                <span>open</span>
            </button>
          </div>
    </section>
    </>
  )
}

export default Newfooter