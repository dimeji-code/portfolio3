import React from 'react'
import Button from './Button'

type Props = {}

const About = (props: Props) => {
  return (
    <div style={{backgroundImage : "url('/bg9.webp')",display:'flex',flex:'1', top:'100%',backgroundSize:'cover',width:'100vw',minHeight:'100vh',zIndex:'0'}}>
    <div className='flex flex-row  justify-between items-center  max-w-5xl w-full h-full  p-3 md:p-8 mx-auto'>
        <div  className='flex flex-4/6 flex-col m-1 md:m-6  w-full min-[365px]:w-4/6 h-full md:h-5/6'>
            <div className='text-[#504f4f] text-md md:text-lg font-Roboto bg-white rounded-md p-3 md:p-5 h-full shadow-md'>
                <h1 className='text-[#000] text-xl md:text-3xl font-Roboto my-3 md:my-5'>About Me</h1>

                <h2 className='text-sm md:text-lg mb-5'>I am a Fullstack developer located in Ontario, Canada with a passion for creating responsive, scalable and efficient websites.</h2>
                <h2 className='text-sm md:text-lg mb-5'>I love learning about new technologies with my experience ranging from Web Development to Automation. From my work experience, I have had the opportunity to collaborate with talented people from different timezones.</h2>
                <h2 className='text-sm md:text-lg mb-5  sm:inline-block'>I have a Bachelors Degree in Computer Science from Carleton University. I am a <strong>certified AWS Cloud Practitioner</strong> and I aim to be a Certfied Solutions Architect in the near future.</h2>
                <h2 className='text-sm md:text-lg mb-5  sm:flex'>I am currently looking for a new role. Feel free to reach out.</h2>
                <div className='flex flex-row'>
                    <Button text='Linkedin' color='light' id='linkedin' link='https://www.linkedin.com/in/dimejisitu-4ba2b1211/'/>
                    <Button text='Github' color='dark' id='github' link='https://github.com/dimeji-code'/>
                </div>
                
            </div>
        </div>
        <div className='hidden min-[365px]:flex flex-2/6 flex-col  border hover:animate-pulse shadow-2xl  w-2/6  h-full'>
            <div className='flex flex-col w-full  '> 
                <h1 className='heading'>
                    <div className='animated-wrapper'>
                        <ul className='animated-text'>
                            <li>
                            <span>Diligent</span>
                            </li>
                            <li>
                            <span>Versatile</span>
                            </li>
                            <li>
                            <span>Creative</span>
                            </li>
                        </ul>
                    </div>
                </h1>
            </div>
            <>
            <div className='flex flex-col w-full  '> 
                <h1 className='heading'>
                    <div className='animated-wrapper'>
                        <ul className='animated-text'>
                            <li>
                            <img src='/svgs/c++.svg' alt='c++' className='w-full h-full'/>
                            </li>
                            <li>
                            <img src='/svgs/next.svg' alt='nextJS' className='w-full h-full'/>
                            </li>
                            <li>
                            <img src='/svgs/tailwind.svg' alt='tailwind-logo' className='w-full h-full'/>
                            </li>
                        </ul>
                    </div>
                </h1>
            </div>
            </>
            <>
            <div className='flex flex-col w-full  '> 
                <h1 className='heading'>
                    <div className='animated-wrapper'>
                        <ul className='animated-text'>
                            <li>
                            <img src='/svgs/mongo.svg' alt='mongoDB' className='w-full h-full'/>
                            </li>
                            <li>
                            <img src='/svgs/ts.svg' alt='Typescript' className='w-full h-full'/>
                            </li>
                            <li>
                            <img src='/svgs/material.svg' alt='materialUI' className='w-full h-full'/>
                            </li>
                        </ul>
                    </div>
                </h1>
            </div>
            </>
            <>
            <div className='flex flex-col w-full  '> 
                <h1 className='heading'>
                    <div className='animated-wrapper'>
                        <ul className='animated-text'>
                            <li>
                            <img src='/svgs/mysql.svg' alt='mysql' className='w-full h-full'/>
                            </li>
                            <li>
                            <img src='/svgs/react.svg' alt='ReactJS' className='w-full h-full'/>
                            </li>
                            <li>
                            <img src='/svgs/html.svg' alt='HTML' className='w-full h-full'/>
                            </li>
                        </ul>
                    </div>
                </h1>
            </div>
            </>
        </div>
    </div>
    </div>
  )
}

export default About