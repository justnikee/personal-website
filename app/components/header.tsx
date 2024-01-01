import Image from 'next/image'


import sun from '../../public/icons8-sun.svg'
import home from '../../public/icons8-home.svg'

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
  return (
    <>
       <ul className='fixed top-0 left-1/2 translate-x-[-50%] w-full max-w-5xl border border-slate-100 border-1 flex m-auto overflow-hidden justify-between mt-3 h-14 rounded-full bg-[#000]'>
       {navdate.map((item) => (
              <li key={item.id}
              className='flex items-center gap-1 border-r w-full duration-500 transition ease-in-out delay-150 justify-center h-full text-[#e3f7f7] hover:bg-[#e3f7f7] hover:text-black'
              >
                    <Image width={15} height={15} alt={item.text} src={item.icon} />
                    <span className='capitalize  '>{item.text}</span>
              </li>
       ))}
       </ul>
    </>
  )
}

export default Header