import Image from 'next/image';

import reactImg from '../../public/React JS.svg';
import htmlImg from '../../public/HTML.png';
import cssImg from '../../public/GSAP.jpg';
import tailImg from '../../public/icons8-tailwind-css-48.png';
import nextimg from '../../public/svgviewer-png-output (2).png';
import nodeImg from '../../public/stack images/node-svgrepo-com.svg';
import jsImg from '../../public/JavaScript.svg';

const techSectionData = [
    { id: 2, text: 'Html', icon: htmlImg },
    { id: 3, text: 'JS', icon: jsImg },
    { id: 4, text: 'React', icon: reactImg },
    { id: 5, text: 'NEXT', icon: nextimg },
    { id: 6, text: 'Tailwind', icon: tailImg },
    { id: 7, text: 'Gsap', icon: cssImg },
    { id: 8, text: 'Node', icon: nodeImg },
];

const Slider = () => {

    return (
        <>
            <div className="pt-24 bg-black w-full overflow-hidden">
                <div className="relative h-48 sm:h-24 flex justify-center items-center w-full bg-black">
                    <h2 className='big-cursor stager-text1 uppercase text-[#f84c4c] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
                        Cooking Ingrediants
                    </h2>
                    <h2 className='big-cursor stager-text2 uppercase text-[#f4f4f4] font-["damn"] text-[130px] leading-[117px] text-center absolute top-0 right-0 bottom-0 left-0'>
                        Cooking Ingrediants
                    </h2>
                </div>
                <div className="flex bg-black py-9 w-screen overflow-hidden mt-28 mb-28 sm:mt-0 sm:mb-0">
                    <div className="slider-track overflow-hidden">
                        {techSectionData.map((item) => (
                            <div className="h-fit p-6 w-fit" key={item.id}>
                                <span className="h-full w-full flex items-center justify-center">
                                    <Image
                                        className="z-10 cursor-pointer w-16 bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]"
                                        src={item.icon}
                                        alt={item.text}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="slider-track">
                        {techSectionData.map((item) => (
                            <div className="h-fit p-6 w-fit" key={item.id}>
                                <span className="h-full w-full flex items-center justify-center">
                                    <Image
                                        className="z-10 cursor-pointer w-16 bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]"
                                        src={item.icon}
                                        alt={item.text}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="slider-track">
                        {techSectionData.map((item) => (
                            <div className="h-fit p-6 w-fit" key={item.id}>
                                <span className="h-full w-full flex items-center justify-center">
                                    <Image
                                        className="z-10 cursor-pointer w-16 bg-transparent ease-in duration-500 image-anime hover:scale-110 hover:rotate-[360deg]"
                                        src={item.icon}
                                        alt={item.text}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
