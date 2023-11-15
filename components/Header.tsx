import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import Mode from './Mode'

type Props = {}
const Header = () => {
    const [headerDown, setHeaderDown] = useState(false);

    const handleClickScroll = (el:string) => {
        const element = document.getElementById(el);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }


      useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () =>
            setHeaderDown(window.pageYOffset > (window.innerHeight-30))
          );
        }
      }, []);

  return (
    <header className={headerDown ==false?
        'sticky top-0 flex h-[70px] z-100 justify-between mx-auto max-w-5xl z-50 p-5 xl:items-center ':
        'sticky top-0 flex h-[70px] z-100 justify-between mx-auto max-w-5xl rounded-b-lg linear ease-in duration-1000 z-50 p-5 w-[100vw] xl:items-center bg-[#44251286]'}>
    {/* <header className='fixed w-full top-0 flex h-[70px] px-5xl  justify-between mx-auto  z-50 p-5 xl:items-center '> */}
        <motion.div 
        initial={{
            y:-80,
            opacity:0,
            scale:0.5
        }}
        animate={{
            y:-0,
            opacity:1,
            scale:1
        }} 
        transition={{duration:1}}
        className='flex flex-row items-center'>
            <h1 className="text-lg  text-white border-solid">DIMEJI <span className="mx-1 text-blue-400 pulse">SITU</span></h1>
            <div><img src="/me.jpg" alt='me' className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 pulse " /></div>
        </motion.div>
        <motion.div 
        initial={{
            y:80,
            opacity:0,
            scale:0.5
        }}
        animate={{
            y:-0,
            opacity:1,
            scale:1
        }} 
        transition={{duration:1}}
         className=' flex-row items-center flex'>
            <ul className='flex  flex-row items-center'> 
                <li className='mx-3 border-b border-transparent hover:border-b hover:border-white hover:cursor-pointer' onClick={()=>handleClickScroll("about")} >About</li>
                <li className='mx-3 border-b border-transparent hover:border-b hover:border-white hover:cursor-pointer' onClick={()=>handleClickScroll("projects")}>Projects</li>
            </ul>
            <button onClick={()=> window.open("https://github.com/dimeji-code", "_blank")} className='button lightbutton hidden sm:flex' >
            <SocialIcon className='cursor-pointer'  fgColor='white' bgColor='transparent' network='github'/>
            </button>

            <button onClick={()=> window.open("https://www.linkedin.com/in/dimejisitu", "_blank")} className='button lightbutton hidden sm:flex'>
            <SocialIcon className='cursor-pointer' fgColor='white' bgColor='transparent' network='linkedin'/>
            </button> 
             {/* <Mode/>  */}
        </motion.div>
    </header>
  )
}

export default Header