import React from 'react'
import WorkBox from './WorkBox';

type Props = {}

const Experience = (props: Props) => {
    const ukemeyTools:string[] = ['HTML','CSS','JavaScript','Typescript','React JS','React Native','MongoDB','PuppeteerJS']

return(
    <div className='flex flex-col items-center  w-full h-[100vh] py-4 mx-auto justify-center '>
      <div className='flex flex-1 flex-col w-full md:w-5/6 h-3/5 rounded-2xl  options overflow-hidden'>
          <div className='align-center p-6'>
            <h3 className='text-white text-5xl text-center font-semibold'> Work </h3>
            <h3 className='text-white text-5xl text-center font-semibold'>  Experience</h3>
          </div>
          <div className='align-center items-center md:p-2 flex-col overflow-scroll flex justify-center '>
              <WorkBox list={ukemeyTools}/>
          </div>
  

      </div>
    </div>
  )
}

export default Experience