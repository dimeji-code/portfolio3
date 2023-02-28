import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    text:string,
    color:string,
    id:string,
    link:string
}

const Button = (props: Props) => {
  return (
    <a target = "_blank" href={props.link} className={`border hover:cursor-pointer text-white text-sm rounded-sm shadow-sm hover:animate-pulse md:min-w-fit px-2 flex justify-between items-center ${props.color === 'dark'?'bg-[#212122]':'bg-[#5f60aa]'}`}>
        {props.text}
        <SocialIcon className='cursor-pointer' url='' fgColor='white' bgColor='transparent' network={props.id} style={{ height: 38, width: 38 }}/>

    </a>
  )
}

export default Button