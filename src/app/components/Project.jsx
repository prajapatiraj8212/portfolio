
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import s2 from '../../../public/assets/s2.png'
import s4 from '../../../public/assets/scr-2.png'
import s5 from '../../../public/assets/chap.png'
import s6 from '../../../public/assets/msch.png'

import ProjectItem from './ProjectItem'


const Project = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
      <h2 className='py-4'>Whats I&apos; Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
      

       <ProjectItem title='Contact Manager' tech = 'React js' backgroundImg={s2} projectUrl='/property'/>
       <ProjectItem title='StudyNotion Edtech ' tech = 'React js' backgroundImg={s4} projectUrl='/property'/>
       <ProjectItem title='Music School' tech = 'Next.js' backgroundImg={s6} projectUrl='/property'/>
       <ProjectItem title='Chat App' tech = 'React js'  backgroundImg={s5} projectUrl='/property'/>

       

      </div>
      </div>
    </div>
  )
}

export default Project
