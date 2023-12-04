import React from 'react'
import './style.css'
import ProjectCards from '../../Components/ProjectsCard'
import UniqueFeaturesCards from '../../Components/UniqueFeaturesCard'
const About = () => {
  return (
    <>
    <header id='About'>
      <img src="https://preview.colorlib.com/theme/woodrox/img/banner/home-banner.jpg.webp" alt="" /> 
    <div className='Aboutpage'>
      <div className='AboutPageContent'>
        <h1>ABOUT US
        </h1>
        <p>Home<i class="fa-solid fa-arrow-right-long"></i>About
        </p>
        
      </div>
    </div>
    </header>
    <main>
    <section>
      <ProjectCards/>
      
    </section>
    <section>
      <div id='UniqueFeatures'>
        <div className='uniqueSectionMargin'>
          <div className='UniqueFeaturesContent'>
            <h2>SOME FEATURES THAT MADE US UNIQUE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className='UniqueFeaturesCardContainer'>
            <UniqueFeaturesCards/>
          </div>
        </div>

      </div>
    </section>
    <section>
  <div id='logoSection'>
    <div className='logoSectionMargin'>
      <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png.webp" alt="" />
      <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png.webp" alt="" />
      <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png.webp" alt="" />
      <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png.webp" alt="" />
      <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png.webp" alt="" />
    </div>
  </div>
</section>
    </main>
    </>
  )
}

export default About