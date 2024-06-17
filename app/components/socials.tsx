import Link from "next/link";


const SocialSection = () => {
    return(
        <div id="socials" className="w-full bg-black pb-12">
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-4 sm:gap-0 justify-between w-full max-w-[95%] m-auto rounded-xl bg-[#564cf8] p-8">
            <div className="flex flex-wrap justify-center sm:justify-normal gap-4 sm:flex-nowrap w-fit sm:sgap-8">
            <Link className="big-cursor text-2xl leading-normal" href="https://x.com/Nxkeeyy" target="_blank" rel="noopener noreferrer">
                <span className='stager-text1 uppercase text-[#BEF941] font-["damn"] text-4xl'>X</span>
                </Link>
                <Link className="big-cursor text-2xl leading-normal" href="https://www.instagram.com/nikxxyyy_" target="_blank" rel="noopener noreferrer">
                <span className='stager-text1 uppercase text-[#BEF941] font-["damn"] text-4xl '>Instagram</span>
                </Link>
                <Link className="big-cursor text-2xl leading-normal" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <span className='stager-text1 uppercase text-[#BEF941] font-["damn"] text-4xl '>LinkedIn</span>
                </Link>
                <Link className="big-cursor text-2xl leading-normal" href="https://github.com/justnikee" target="_blank" rel="noopener noreferrer">
                <span className='stager-text1 uppercase text-[#BEF941] font-["damn"] text-4xl '>Github</span>
                </Link>
            </div>
            <div className="flex">
        <span className='stager-text1 uppercase text-[#BEF941] font-["damn"] text-4xl '>Crafted with 💖 - Chandigarh INDIA</span>
        </div>
        </div>
  
        </div>
    )
}

export default SocialSection;