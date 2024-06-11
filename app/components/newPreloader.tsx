'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

type Props = {}

const NewPreloader = (props: Props) => {

  const bottomBlock = useRef<HTMLDivElement>(null);
    const topBlock = useRef<HTMLDivElement>(null);

    const Animation = () => {
        gsap.to('.loadertext', {
            y: -100,
            duration: 1,
        })

        gsap.to('.loadertext', {
            opacity: 0,
            delay: 1,
        })

        gsap.to(topBlock.current, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 2,
            delay: 2
        });

        gsap.to(bottomBlock.current, {
            scaleX: 0,
            transformOrigin: 'right center',
            duration: 2,
            delay: 2
        });

        gsap.to('.loadertext1', {
            scaleX: 0,
            transformOrigin: 'center left',
            duration: 1,
            delay: 2
        });

        gsap.to('.loadertext2', {
            scaleX: 0,
            transformOrigin: 'center right',
            duration: 1,
            delay: 2
        });

        gsap.to('.loadertextWrapper', {
            background: 'transparent'
        });

        gsap.to(['.preloader-container', '.loadertextWrapper'], {
            height: 0,
            delay: 3,
            onComplete: () => {
                document.body.style.overflow = 'auto'; // Enable scrolling after animation
            }
        });
    }

    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling while preloader is active
        Animation();
        
        return () => {
            document.body.style.overflow = 'auto'; // Ensure scrolling is enabled if component unmounts before animation completes
        };
    },[])

    return (
        <>
            <div className="preloader-container h-full w-screen absolute right-0 top-0 left-0 z-[100]">
                <div ref={topBlock} className="h-[50vh] w-full bg-[#EF4444]">
                </div>
                <div className="loadertextWrapper flex flex-col w-full items-center overflow-hidden h-[100px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[#BEF941]">
                    <span className='loadertext1 loadertext text-9xl font-extrabold h-full w-fit text-center stager-text1 text-[#BEF941] uppercase font-["damn"]'>Nikhil</span>
                    <span className='loadertext2 font-["damn"] loadertext text-9xl font-extrabold text-[#000000] h-full w-fit text-center uppercase'>Nxkeeyyy</span>
                </div>
                <div ref={bottomBlock} className="h-[50vh] w-full bg-[#EF4444]">
                </div>
            </div>
        </>
    )
}

export default NewPreloader;