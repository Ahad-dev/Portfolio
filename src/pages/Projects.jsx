import React from 'react'
import ProjectCard from '../Components/Project/ProjectCard'
import {Admindashboard,Ecommerce,MedicoSlot,NotesApp} from '../assets/ProjectImages'



const PROJECTS = [
  {
    name: 'Notes App',
    image: NotesApp,
    tagline: 'A simple notes app made using React',
    link: 'https://github.com/Ahad-dev/Notes-App'
  },
  {
    name: '3Lectronics',
    image: Ecommerce,
    tagline: 'An E-commerce store made using React',
    link: 'https://github.com/Ahad-dev/E-commerece-Store-Project'
  }
  ,
  {
    name: 'Medico Slot',
    image: MedicoSlot,
    tagline: 'A web app for booking doctor appointments',
    link: 'https://github.com/Ahad-dev/MedicoSlot'
  },
  {
    name: 'Admin Dashboard',
    image: Admindashboard,
    tagline: 'A simple admin dashboard made using React',
    link: 'https://github.com/Ahad-dev/Admin-Dashboard'
  }
]


const Projects = () => {
  return (
    <>
      <div className='mx-auto text-6xl font-bold text-neutral-200 text-center mb-10'>Projects</div>
      <div className='flex flex-wrap justify-center gap-8 p-5'>
        {
          PROJECTS.map((project,index) => {
            return <ProjectCard key={index} project={project}/>
          })
        }
      </div>

    </>
  )
} 

export default Projects