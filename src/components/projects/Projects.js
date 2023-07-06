import React from 'react'
import ProjectCard from './ProjectCard'
import Title from '../layouts/Title'
import { project1, project2, project3 } from '../../assets/assetsIndex'

const Projects = () => {
  return (
    <section 
        id='projects'
        className='w-full py-20 border-b-[1px] border-b-black px-4'
    >
        <div className="flex justify-center items-center text-center">
            <Title title='VISIT MY PORTFOLIO' desc='My Projects' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14'>
            <ProjectCard 
                title='Travel Reservation'
                desc='A simple but appealing Landing Page for a Travel Reservation created with React JS and Tailwind CSS to experience the mobile responsiveness of the website.'
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
            <ProjectCard 
                title='Netflixerjs'
                desc="Netflixerjs is a streaming platform, an immersive movie-trailers watching experience. With React.js and Firebase, it provides users with a seamless interface to sign up and save their favorite trailers, explore an extensive library of captivating trailers."
                src={project3}
                links='https://netflix-react-js-422f3.web.app'
                git='https://github.com/jgadz22/netflix-react-js'
            />
        </div>
    </section>
  )
}

export default Projects