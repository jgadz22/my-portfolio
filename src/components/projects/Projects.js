import React from 'react'
import ProjectCard from './ProjectCard'
import Title from '../layouts/Title'
import { project1, project2 } from '../../assets/assetsIndex'

const Projects = () => {
  return (
    <section 
        id='projects'
        className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className="flex justify-center items-center text-center">
            <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' desc='My Projects' />
        </div>
        <div className='grid grid-cols-2 gap-14'>
            <ProjectCard 
                title='Travel Reservation'
                desc='A simple Landing Page for a Travel Reservation created with React JS and Tailwind CSS.'
                src={project1}
                links='https://jgadz22.github.io/travel-reservation/'
                git='https://github.com/jgadz22/travel-reservation'
            />
            <ProjectCard 
                title='My Portfolio'
                desc="A collection of my creative endeavors and professional achievements. Here, you'll find a diverse range of projects that showcase my skills and passion across various disciplines."
                src={project2}
                links='https://jgadz22.github.io/my-portfolio/'
                git='https://github.com/jgadz22/my-portfolio'
            />
        </div>
    </section>
  )
}

export default Projects