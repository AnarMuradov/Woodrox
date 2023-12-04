import React from 'react'
import './style.css'
import ProjectCards from '../../Components/ProjectsCard'
const Projects = () => {
  return (
    <>
     <header id='About'>
      <img src="https://preview.colorlib.com/theme/woodrox/img/banner/home-banner.jpg.webp" alt="" /> 
    <div className='Aboutpage'>
      <div className='AboutPageContent'>
        <h1>PROJECTS
        </h1>
        <p>Home<i class="fa-solid fa-arrow-right-long"></i>Projects
        </p>
        
      </div>
    </div>
    </header>
    <main>
    <section>
      <ProjectCards/>
      
    </section>
    </main>
    </>
  )
}

export default Projects