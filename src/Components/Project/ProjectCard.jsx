import React from 'react'
import {Admindashboard} from  '../../assets/ProjectImages'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
    <div className='max-w-96  bg-neutral-500/20 overflow-hidden border-2 border-neutral-700 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition-all duration-200'>
        <div className='border-b-2 border-neutral-700 overflow-hidden object-cover hover:scale-105 transition-all duration-200'>
            <img src={project?.image?project?.image:Admindashboard} alt="NO" />
        </div>
        <div className='p-4 rounded-lg  text-center'>
            <div className='text-3xl font-bold text-neutral-200'>{project?.name?project?.name:"Name of the Project"}</div>
            <p className='text-white/20 mb-5 text-center'>{project?.tagline}</p>
            <Link to ={project?.link?project?.link:""} target='_blank'><button className='bg-gradient-to-r from-blue-900 to-blue-500 p-2 rounded-lg text-white w-full hover:scale-105 transition-all duration-200 flex justify-center items-center gap-5'><BsGithub size={25}/> Go to Github Repository </button></Link>
        </div>
    </div>
  )
}

export default ProjectCard