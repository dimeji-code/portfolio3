import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Grid } from '@mui/material';
type Props = {
    list:string[],
}

const WorkBox = (props: Props) => {

    const tools = props.list

  return (
    <div className='align-center  w-2/3 h-auto   border shadow-md rounded-md bg-[#ffffff]'>
    <div className='align-center flex flex-row justify-between p-5 bg-[#f5f3f3] '>
        <h3 className='text-black text-center'> Ukemey Inc.</h3>
        <h4>Button</h4>
    </div>
    <div className='text-black p-5'>
        <h4><LocationOnIcon/> Remote</h4> 
        <h4><WorkOutlineIcon/>  Jr. Fullstack Developer</h4> 
        <h4>Sept 2021 - March 2022</h4>
    </div>
    <div className="p-5"> 
      <h4 className="text-[#464545]">Component creation, management and documentation with modern tools. 
        Developed mobile and web based applications for clients of the company.
      </h4>
    </div>
    <div className='p-5'>
      <Grid container spacing={0.5} > 
          { tools.map((item) => <Grid item ><h3 className="
           text-white bg-[#696767] py-1 px-2 rounded-full shadow-md "
          >{item}</h3></Grid>
          )}
      </Grid>
    </div>
  </div>
  )
}

export default WorkBox