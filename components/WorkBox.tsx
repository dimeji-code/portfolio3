import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import { Grid } from '@mui/material';

type Props = {
    list:string[],
}

const WorkBox = (props: Props) => {

    const tools = props.list

  return (
  <div className='align-center w-[95%] sm:w-2/3 h-auto overflow-hidden   border shadow-lg rounded-sm bg-[#ffffff]'>
    <div className='align-center flex flex-row justify-between p-5 bg-[#f5f3f3] '>
        <h3 className='text-black text-center text-xl font-semibold'> Ukemey Inc.</h3>
    </div>
    <div className='text-black p-5'>
        <h4 className="flex items-center"><LocationOnOutlinedIcon sx={{ color: '#795032c2', marginRight:"6px"  }}/> Remote</h4> 
        <h4 className="flex items-center"><WorkOutlineIcon sx={{ color: '#795032c2',  marginRight:"6px"  }}/>  Jr. Fullstack Developer</h4> 
        <h4 className="flex items-center"><HourglassBottomOutlinedIcon sx={{ color: '#794f32b0', marginRight:"6px"   }}/> Sept 2021 - March 2022</h4>
    </div>
    <div className="p-5"> 
      <h4 className="text-[#464545]">Component creation, management and documentation with modern tools. 
        Developed mobile and web based applications for clients of the company.
      </h4>
    </div>
    <div className='p-5'>
      <Grid container spacing={0.5} > 
          { tools.map((item:string) => <Grid key={item} item ><h3  className="
           text-white bg-[#794f32b0] py-1 px-2 font-light rounded-full shadow-md "
          >{item}</h3></Grid>
          )}
      </Grid>
    </div>
  </div>
  )
}

export default WorkBox