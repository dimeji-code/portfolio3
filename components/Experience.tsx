import React from 'react'
import { SocialIcon } from 'react-social-icons'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Grid } from '@mui/material';
import WorkBox from './WorkBox';

type Props = {}

const Experience = (props: Props) => {
    const ukemeyTools:string[] = ['HTML','CSS','JavaScript','React JS','React Native','MongoDB','PuppeteerJS']

return(
    <div className='flex flex-col  items-center   w-full h-full  py-4 mx-auto justify-center '>
      <div className='flex flex-1 flex-col w-full md:w-5/6 h-3/5 rounded-2xl hover:cursor-pointer options overflow-hidden'>
          <div className='align-center  p-8'>
              <h3 className='text-white text-2xl text-center'> Work Experience</h3>
          </div>
          <div className='align-center items-center md:p-2 flex-col overflow-scroll flex justify-center '>
              <WorkBox list={ukemeyTools}/>
          </div>
  

      </div>
    </div>
  )
}

export default Experience