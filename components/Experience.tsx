import React from 'react'
import WorkBox from './WorkBox';

type Props = {}

const Experience = (props: Props) => {
  const ukemeyTools:string[] = ['CSS','Git','Typescript','React JS','React Native','MongoDB','PuppeteerJS','Google Tag Manager']
  const freelanceTools:string[] = ['JavaScript','React JS','React Native','Tailwind CSS',"HTML"]
  const ukemeyJob = {company:"Ukemey Inc.", role:"Jr. Fullstack developer", loc:"Remote",dur:"August 2021 - March 2021", desc:"Developed mobile and web based applications for clients of the company. Use of automation tools for webscraping data."}
    const freelance = {company:"Freelance", role:"Front End developer", loc:"Remote",dur:"June 2021 - Sept 2022", desc:"Using React and React native to turn wireframe designs into functional and fully responsive web applications for clients."}
return(
    <div className='flex flex-col items-center  w-full h-[100vh] py-4 mx-auto justify-center '>
      {/* <div className='flex flex-1 flex-col w-full md:w-5/6 h-3/5 rounded-2xl  options overflow-hidden'> */}
          <div className='align-center p-6'>
            {/* <h3 className='text-white text-5xl text-center font-semibold'> Work </h3> */}
            <h3 className='text-white text-5xl text-center font-semibold'>  Experience</h3>
          </div>
          <div className='align-center items-center md:p-2 flex-col overflow-scroll flex justify-center '>
          <WorkBox title={freelance.company} role={freelance.role} loc={freelance.loc} dur={freelance.dur} desc={freelance.desc} list={freelanceTools}/>
          <WorkBox title={ukemeyJob.company} role={ukemeyJob.role} loc={ukemeyJob.loc} dur={ukemeyJob.dur} desc={ukemeyJob.desc} list={ukemeyTools}/>

          {/* </div> */}
  

      </div>
    </div>
  )
}

export default Experience