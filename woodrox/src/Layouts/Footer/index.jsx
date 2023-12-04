import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerContainer'>
        <div className='about'>
          <h2>ABOUT ME</h2>
          <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
         <p> Copyright ©2023 All rights reserved | This template is made with <i class="fa-regular fa-heart"></i>  by <span style={{color:'#faba00'}}>Colorlib</span></p>
        </div>
        <div className='newsletter'>
          <h2>NEWSLETTER</h2>
          <p>Stay updated with our latest trends</p>
         <div className='footerInput'>
         <input type="text"  placeholder='Enter email address'/>
          <button><i class="fa-solid fa-arrow-right-long"></i></button>
         </div>
        </div>
        <div className='follow'>
          <h2>FOLLOW ME</h2>
          <div className='followContent'>
          <p>Let us be social</p>
         <div className='footerIcons'>   
              <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-basketball"></i>
                <i class="fa-brands fa-behance"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer