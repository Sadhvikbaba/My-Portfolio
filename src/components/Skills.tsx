import React from 'react'
import { FaReact , FaNodeJs , FaJsSquare , FaPython} from "react-icons/fa";
import { BiLogoTypescript , BiLogoMongodb} from "react-icons/bi";
import { RiNextjsFill , RiTailwindCssFill} from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress , SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <>
    <h1 className=' text-5xl mb-4 text-white text-center mt-12'>Skills</h1>
    <div className='text-white'>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                C
                <div className='text-2xl text-center font-semibold'>c</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <TbBrandCpp/>
                <div className='text-2xl text-center font-semibold'>c++</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <FaJsSquare/>
                <div className='text-2xl text-center font-semibold'>Java Script</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <BiLogoTypescript/>
                <div className='text-2xl text-center font-semibold'>Type Script</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <FaReact/>
                <div className='text-2xl text-center font-semibold'>React Js</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <FaNodeJs/>
                <div className='text-2xl text-center font-semibold'>Node Js</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <RiNextjsFill/>
                <div className='text-2xl text-center font-semibold'>Next Js</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <FaPython/>
                <div className='text-2xl text-center font-semibold'>Python</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <RiTailwindCssFill/>
                <div className='text-2xl text-center font-semibold'>Tailwind</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <BiLogoMongodb/>
                <div className='text-2xl text-center font-semibold'>Mongo DB</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <SiExpress/>
                <div className='text-2xl text-center font-semibold'>Express Js</div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center min-w-24 min-h-32 border-2 border-white rounded-lg text-7xl'>
                <SiPostman/>
                <div className='text-2xl text-center font-semibold'>Postman</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills
