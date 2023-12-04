import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Contact = () => {
  return (
    <>
    <header id='About'>
      <img src="https://preview.colorlib.com/theme/woodrox/img/banner/home-banner.jpg.webp" alt="" /> 
    <div className='Aboutpage'>
      <div className='AboutPageContent'>
        <h1>CONTACT US
        </h1>
        <p>Home<i class="fa-solid fa-arrow-right-long"></i>Contact Us
        </p>
        
      </div>
    </div>
    </header>
    <main>
        <section>
            <div className='googleMap'> 
           <div className='gmContainer'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23934.917320708366!2d48.40889427124708!3d41.42045638519707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4037c01952a57671%3A0xb3bc0abeba1453ca!2sQusar!5e0!3m2!1sen!2saz!4v1701667357077!5m2!1sen!2saz" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

           <div className='contactForm'>
            <div className='contactSupport'>
                <div className='cntbox'>
                <i class="fa-solid fa-house"></i>
                <div className='text'>
                    <h4>California, United States</h4>
                    <span>Santa monica bullevard</span>
                </div>
                </div>

                <div className='cntbox'>
                <i class="fa-solid fa-phone"></i>
                <div className='text'>
                    <h4>California, United States</h4>
                    <span>Santa monica bullevard</span>
                </div>
                </div>

                <div className='cntbox'>
                <i class="fa-solid fa-envelope"></i>
                <div className='text'>
                    <h4>California, United States</h4>
                    <span>Santa monica bullevard</span>
                </div>
                </div>
            </div>
            <div className='form'>
                <div className='area'>
                    <div className='input'>
                    <input type="text" placeholder='Enter'/>
                <input type="text" placeholder='Enter'/>
                <input type="text" placeholder='Enter'/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter'></textarea>
                </div>
                <div className='btn'>
                <Link>Send Message</Link>
                </div>
            </div>
           </div>
           </div>
          </div>
        </section>
    </main>
    </>

  )
}

export default Contact