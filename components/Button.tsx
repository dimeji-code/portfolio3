import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    text:string,
    color:string,
    id:string,
    link:string
}

const Button = (props: Props) => {
  return (
    <button onClick={()=> window.open(props.link, "_blank")}   className={`border hover:cursor-pointer  text-white text-sm rounded-sm shadow-sm hover:animate-pulse md:min-w-fit px-2 flex justify-between items-center ${props.color === 'dark'?'bg-[#212122]':'bg-[#5f60aa]'}`}>
        <h2 className='flex items-center'>{props.text}
        <SocialIcon className='cursor-pointer' url={props.link} fgColor='white' bgColor='transparent' network={props.id} style={{ height: 38, width: 38 }}/>
        </h2>
    </button>
  )
}

export default Button