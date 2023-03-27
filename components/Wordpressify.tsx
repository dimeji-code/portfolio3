import React from 'react'
import Button from './Button'

type Props = {}

const Wordpressify = (props: Props) => {
  return (
    <div className="w-full  bg-[#e9e6e9] shadow-inner ">
        <div className=" flex flex-row justify-center text-5xl font-semibold p-3">
            <h2 className='text-[#263241]'>CMS Portfolio</h2>
        </div>
        
    <div className="w-full h-[35vh]  p-8 mx-auto max-w-6xl   flex flex-row items-center ">
        <div className="w-1/4 h-full flex-1/3 flex justify-center">
         <img src="/svgs/wordpress.svg"  alt='wordpress' className='w-auto h-auto hover:cursor-pointer rotate hover:scale-y-2'  />

        </div>
        {/* <h2>Hello wordpress</h2> */}
        <div className="w-3/4 flex-3/4 h-full bg-white rounded-sm shadow-md flex flex-col justify-center text-center items-center">
            <h5 className='text-[#010] text-xl'>View my portfolio made with <strong>Wordpress</strong></h5>
            <Button text="View Portfolio" id="" color={'light'} link={'https://dimeji-wordpress.com/'}/>
        </div>
    </div>
    </div>

  )
}

export default Wordpressify