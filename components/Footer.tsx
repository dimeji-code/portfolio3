import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    const year = new Date().getFullYear()
  return (
      <footer className='flex flex-col items-center  w-full h-[35vh] py-4 mx-auto justify-center '>
         <h4>Made with</h4>
         <ul className='flex flex-row justify-center '>
          <li className=" w-20 mx-2">
            <img src='/svgs/next.svg' alt='nextJS' className='w-full h-full'/>
            </li>
            <li className=" w-20 mx-2">
            <img src='/svgs/tailwind.svg' alt='tailwind-logo' className='w-full h-full'/>
            </li>
            <li className=" w-20 mx-2">
            <img src='/svgs/ts.svg' alt='Typescript-logo' className='w-full h-full'/>
            </li>
          </ul>
          <h3 className='text-center mt-2'>© {year} dimeji-code. All rights reserved.</h3>

     </footer>
  )
}

export default Footer