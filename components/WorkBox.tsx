import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import { Grid } from '@mui/material';

type Props = {
    title:string,
    loc:string,
    dur:string,
    desc: string,
    role: string,
    list:string[],
}

const WorkBox = (props: Props) => {

    const tools = props.list

  return (
  <div className='align-center w-[95%] md:w-[89%] h-auto overflow-hidden my-2   border shadow-lg rounded-sm bg-[#ffffff]'>
    <div className='align-center flex flex-row justify-between px-4 py-3 bg-[#f5f3f3] '>
        <h3 className='text-black text-center text-xl font-semibold'> {props.title}</h3>
    </div>
    <div className='text-black px-4 py-2'>
        <h4 className="hidden md:flex items-center"><LocationOnOutlinedIcon sx={{ color: '#795032c2', marginRight:"6px"  }}/> {props.loc}</h4> 
        <h4 className="flex items-center"><WorkOutlineIcon sx={{ color: '#795032c2',  marginRight:"6px"  }}/>  {props.role}</h4> 
        <h4 className="flex items-center"><HourglassBottomOutlinedIcon sx={{ color: '#794f32b0', marginRight:"6px"   }}/> {props.dur}</h4>
    </div>
    <div className="px-4 py-2"> 
      <h4 className="text-[#464545]"> 
        {props.desc}
      </h4>
    </div>
    <div className='px-4 py-2'>
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