import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
type Props = {}

const Projects = (props: Props) => {

    const [current,setCurrent] = useState(0); // Read values passed on state

    // const webList = ( type == "Fullstack Development" ? [
    //     {image:"/ems.png",title:"Employee Management System",tools:"Typescript, React, MaterialUI, MySQL",description:"Manage employees of a fake company with MySQL and Express.",rating:4.5,link:"https://ems-production-f785.up.railway.app/",}, 
    //     {image:"/covidtracks.png",title:"Covid 19 Tracker",tools:"Typescript, React, Tailwind CSS, Redux, AWS",description:"Using free Covid-19 Api and React to serve statistics graphically.",rating:3.5,link:"https://www.covidtracks.com/",}, 
    //     {image:"/gaffer.png",title:"GAFFER (Task Management App)",tools:"MERN (MongoDB, Express, React,Node)",description:"Slack remake for group channels and collaboration.",rating:4,link:"https://projectmanager-gaffer.up.railway.app/",},       
    //     {image:"/slack.png",title:"Slack Clone",tools:"JS, React, Firebase, Redux",description:"Slack remake for group channels and collaboration.",rating:5,link:"https://github.com/dimeji-code/SlackDemo",},
    //     ] 
        
    //    : 
    //    [
    //     {image:"/Webscrape.png",title:"Soccer News Webscraper.",tools:"Python, Selenium, ElectronJS",description:"GUI that allows scraping of the latest news in the world of soccer.",rating:4.0,link:"https://github.com/dimeji-code/news-scraper",},
    //     {image:"/therapy.png",title:"Denas electrotherapy simulation.",tools:"C++ (Qt Creator)",description:"Simulation of special electro-therapy hardware that administers shocks to cure different ailments.",rating:3.5,link:"https://github.com/dimeji-code/Therapy-software-QT",},
    //     {image:"/city.png",title:"City_2 (Group project)",tools:"Processing 3",description:"An aerial-view shooter game in a city riddled with crime.",rating:3.5,link:"https://github.com/dimeji-code/City_2",},
    //     {image:"/quote.png",title:"Quote Tag",tools:"Swift (Xcode)",description:"Trivia game that tests knowledge on tv shows and movies by getting players to match famous quotes.",rating:4.5,link:"https://github.com/dimeji-code/Quote-Tag",},
    // ]
    // )

    const webList = 
    [
        {image:"/ems.png",title:"Employee Management System",tools:"Typescript, React, MaterialUI, MySQL",description:"Manage employees of a fake company with MySQL and Express.",rating:4.5,link:"https://ems-production-f785.up.railway.app/",}, 
        {image:"/Webscrape.png",title:"Soccer News Webscraper.",tools:"Python, Selenium, ElectronJS",description:"GUI that allows scraping of the latest news in the world of soccer.",rating:4.0,link:"https://github.com/dimeji-code/news-scraper",},
        {image:"/covidtracks.png",title:"Covid 19 Tracker",tools:"Typescript, React, Tailwind CSS, Redux, AWS",description:"Using free Covid-19 Api and React to serve statistics graphically.",rating:3.5,link:"https://www.covidtracks.com/",}, 
        {image:"/therapy.png",title:"Denas electrotherapy simulation.",tools:"C++ (Qt Creator)",description:"Simulation of special electro-therapy hardware that administers shocks to cure different ailments.",rating:3.5,link:"https://github.com/dimeji-code/Therapy-software-QT",},
        {image:"/gaffer.png",title:"GAFFER (Task Management App)",tools:"MERN (MongoDB, Express, React,Node)",description:"Slack remake for group channels and collaboration.",rating:4,link:"https://projectmanager-gaffer.up.railway.app/",},       
        {image:"/city.png",title:"City_2 (Group project)",tools:"Processing 3",description:"An aerial-view shooter game in a city riddled with crime.",rating:3.5,link:"https://github.com/dimeji-code/City_2",},
        {image:"/slack.png",title:"Slack Clone",tools:"JS, React, Firebase, Redux",description:"Slack remake for group channels and collaboration.",rating:5,link:"https://github.com/dimeji-code/SlackDemo",},
        {image:"/quote.png",title:"Quote Tag",tools:"Swift (Xcode)",description:"Trivia game that tests knowledge on tv shows and movies by getting players to match famous quotes.",rating:4.5,link:"https://github.com/dimeji-code/Quote-Tag",},
    ]
    

    const createRating:any = (num: number) => {
        var whole = Math.floor(num)
        var fraction = num % 1
        var last = Math.ceil(fraction)
        var stars = []

        for(var i = 0; i < whole;i++){
            stars.push(<StarIcon style={{color:'#877032c8'}}/>)                   
        }
        if (fraction > 0){
          stars.push(<StarHalfIcon style={{color:'#877032c8'}}/>);
        }
        for(var i = (whole+last); i < 5;i++){
            stars.push(<StarBorderIcon style={{color:'#877032c8'}}/>)                   
        }
        
        return (<span>{ stars }</span>);
      };
  return (
    <div className='flex flex-col-reverse sm:flex-row   bg-white   w-full h-full     overflow-scroll'>
         
                <div className='flex flex-row w-full sm:w-3/5 h-full object-cover border shadow-md overflow-hidden hover:shadow-lg'>
                 <a target = "_blank"  href={webList[current].link}>
                <motion.img
                 src={webList[current].image} className='w-full h-full grayscale-[0.8] hover:grayscale-0 object-cover transition ease-in-out duration-800  hover:scale-125 '/>
                </a>
                </div>
                <div className='flex flex-col w-full sm:w-2/5 justify-center p-2 '>
                    <div  className='flex flex-col flex-4/6 h-5/6 justify-center'>
                        <h1 className='text-[#854c32] text-2xl md:text-5xl my-5'>PROJECTS</h1>
                        <h1 className='text-[#5f3928] text-xl md:text-3xl'>{webList[current].title}</h1>
                        <h3 className='text-[#515151] text-sm my-2'>{webList[current].description}</h3>
                        <p className='text-[#515151] text-xs md:text-sm'>Tools: {webList[current].tools}</p>
                        <p className='text-[#333333] text-xs md:text-sm'>Difficulty:{createRating(webList[current].rating)}</p>
                    </div>
                    <div className='bg-[#6f5e5e] flex flex-1/6 h-1/6  w-full bottom-0 justify-between items-center'>
                    <div 
                    className=' hover:bg-[#491f0fc1] hover:cursor-pointer border border-white flex flex-1/2 h-full w-1/2 justify-center items-center  p-5 '
                    onClick={()=>{current > 0?setCurrent(current-1):setCurrent(webList.length-1);console.log(current)}}
                    >
                        <ArrowBackIcon/>
                    </div>
                    <div 
                    className='hover:bg-[#491f0fc1] hover:cursor-pointer border border-white flex flex-1/2 h-full w-1/2 justify-center items-center  p-5'
                    onClick={()=>{current == webList.length-1?setCurrent(0):setCurrent(current+1); console.log(current)}}
                    >
                        <ArrowForwardIcon/>
                    </div>
                    </div>
                </div>
            
    </div>
  )
}

export default Projects