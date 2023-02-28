import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Mode from './Mode'

type Props = {}
const Header = () => {

    const handleClickScroll = (el:string) => {
        const element = document.getElementById(el);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <header className='sticky top-0 flex h-[70px]  justify-between mx-auto max-w-5xl z-50 p-5 xl:items-center '>
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
            <div><img src="/me.jpg" className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 pulse " /></div>
        </motion.div>
        {/* <ul className='flex flex-row items-center'> 
            <li className='mx-3 '><a href="#">About</a></li>
            <li className='mx-3'><a href="#">Projects</a></li>
        </ul> */}
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
         className='flex flex-row items-center'>
            <ul className='flex flex-row items-center'> 
                <li className='mx-3 border-b border-transparent hover:border-b hover:border-white hover:cursor-pointer' onClick={()=>handleClickScroll("about")} >About</li>
                <li className='mx-3 border-b border-transparent hover:border-b hover:border-white hover:cursor-pointer' onClick={()=>handleClickScroll("projects")}>Projects</li>
            </ul>
            <a target = "_blank" className='button lightbutton' href='https://github.com/dimeji-code'>
            <SocialIcon className='cursor-pointer'  fgColor='white' bgColor='transparent' network='github'/>
            </a>
            <a target = "_blank" className='button lightbutton' href='https://www.linkedin.com/in/dimejisitu-4ba2b1211/'>
            <SocialIcon className='cursor-pointer' fgColor='white' bgColor='transparent' network='linkedin'/>
            </a>
            {/* <Mode/> */}
        </motion.div>
    </header>
  )
}

export default Header