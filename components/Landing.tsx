import { motion } from 'framer-motion'
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
type Props = {}

const Landing = (props: Props) => {

    const [text, setText] = useTypewriter({
        words:['Frontend', 'Backend','Software'],
        loop: true,
        delaySpeed:1500,
    })
  return (
    
    <div className='flex flex-1 md:border md:border-[#b8b8b896] md:rounded-bl-[150%] md:rounded-tr-[150%] md:bg-[#5d392b] mb-1 shadow-lg flex-row justify-between items-center max-w-5xl w-full  p-5 mx-auto object-contain overflow-hidden'>
        <motion.img  src='/net2.svg'  className='w-full absolute m-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[-1] '/>
        <div  className='flex flex-1 flex-col items-center  '>   
            <h1 className='text-6xl md:text-9xl'> Hello,</h1>
            <h1 className='text-3xl md:text-6xl'>
                I'm a 
                <span className='text-[#a3cce0]'> {text}</span>
                <Cursor cursorColor='#a3cce0' />
            </h1>
            <h1 className='text-3xl md:text-6xl'> Developer.</h1>
            <h3 className='text-xl md:text-2xl my-5'> Let's build something special.</h3>
            <button className='border-slate-200 border p-3 hover:bg-[#b1b9de] hover:animate-pulse transition duration-1000 '>View Resume</button>
        </div>


    </div>
  )
}

export default Landing