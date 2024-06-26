import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
         <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>LET&apos;S BUILD SOMETHING TOGETHER</p>
            <h1 className='py-4 text-gray-700'>Hi, I&apos;m <span className='text-[#5651e5]'>Raj</span></h1>
            <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
            <p className='py-4 text-gray-700 max-w-[70%] m-auto'>
            I&apos;m a front-end web developer specializing in building (and occasionally designing) exceptional digital
            experiences. Currently, I&apos;m focused on building responsive front-end web applications while 
            learning back-end technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

            <a
              href='https://www.linkedin.com/in/prajapatiraj8212/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>


            <a
            href='https://github.com/prajapatiraj8212/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
          </a>

          <a
          href='https://mail.google.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail />
          </div>
        </a>

        <a
        href='https://drive.google.com/file/d/16C36QRtWkzEl2zo6M6Y6CB8W6Ba6falM/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
      >
        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
          <BsFillPersonLinesFill />
        </div>
      </a>

            </div>
            </div>
         </div>
    </div>
  )
}

export default Main;

