'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

type props = {
    children: React.ReactNode 
  }

function SmoothScroll({children}: props) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}


export default SmoothScroll;