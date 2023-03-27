import React from 'react'
import Button from './Button'

type Props = {}

const Wordpressify = (props: Props) => {
  return (
    <div className="w-full  bg-[#e9e6e9] shadow-inner ">
        <div className=" flex flex-row justify-center text-5xl font-semibold p-3 border-b border-[#ccc]">
            <h2 className='text-[#263241]'>CMS Portfolio</h2>
        </div>
        
    <div className="w-full h-[35vh]  p-8 mx-auto max-w-6xl   flex flex-row items-center hover:cursor-pointer " onClick={()=> window.open('https://dimeji-wordpress.com/', "_blank")} >
        <div className="w-1/2 h-full flex-1/3 flex justify-center">
         <img src="/svgs/wordpress.svg"  alt='wordpress' className='w-auto h-auto hover:cursor-pointer rotate hover:scale-y-2'  />

        </div>
        {/* <h2>Hello wordpress</h2> */}
        <div className="w-1/2 flex-3/4 h-full flex flex-col justify-center text-left items-left">
            <h5 className='text-[#263241] text-xl md:text-3xl hover:cursor-pointer'  >Click here to view my portfolio made with <strong>Wordpress</strong>.</h5>

        </div>

    </div>
    </div>

  )
}

export default Wordpressify