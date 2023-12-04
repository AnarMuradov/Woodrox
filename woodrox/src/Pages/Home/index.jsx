import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import MostPopularCards from '../../Components/MostPopularCards'
import ProjectCards from '../../Components/ProjectsCard'
import UniqueFeaturesCards from '../../Components/UniqueFeaturesCard'
import OurBlogPostsCards from '../../Components/OurBlogPostCards'
const Home = () => {
  return (
    <>
    <header id='home'>
      <img src="https://preview.colorlib.com/theme/woodrox/img/banner/home-banner.jpg.webp" alt="" /> 
    <div className='homepage'>
      <div className='homePageContent'>
        <h1>PRECISE CONCEPT DESIGN
            FOR STYLISH LIVING
        </h1>
        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
        </p>
        <Link>Get Started</Link>
      </div>
      <div className='homePageBox'>
        <div className='furnitureIcons'>
        <i class="fa-solid fa-couch"></i>
        <i class="fa-solid fa-bed"></i>
        <i class="fa-solid fa-computer"></i>
        <i class="fa-solid fa-kitchen-set"></i>
        <i class="fa-solid fa-gamepad"></i>
        <i class="fa-solid fa-car"></i>
        </div>
      </div>
    </div>
    </header>
    <main>
    <section>
      <div id='mostPopular'>
        <div className='sectionMargin'>
        <div className="mostPopularContainer">
      <div className='mostPopularContainerContent'>
      <h2>MOST POPULAR FURNITURES</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
        <div className='furnituresCards'>
          <MostPopularCards/>
        </div>
        </div>
        </div>
      </div>
    </section>

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
  <div id='lookingForQuality'>
    <div className='qualityMargin'>
      <div className='lookingForQualityContainer'>
        <h2>LOOKING FOR A <br />
QUALITY AND AFFORDABLE FURNITURE?</h2>
<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
<Link>READ DETAILS</Link>
      </div>
    </div>
  </div>
</section>
<section>
  <div id='OurBlogPosts'>
    <div className='OurBlogPostsMargin'>
    <div className='OurBlogPostsContainer'>
      <div className='OurBlogPostsContainerInfo'>
        <h2>RECENT POSTS FROM OUR BLOG</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <div className='OurBlogPostsContainerBox'>
      <OurBlogPostsCards/>
      </div>
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

export default Home