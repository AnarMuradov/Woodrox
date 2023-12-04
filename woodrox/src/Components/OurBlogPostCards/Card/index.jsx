import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Card = ({image}) => {
  return (
    <div className='OurBlogPostsCard'>
        <img src={image} alt="" />
        <div className='OurBlogPostsCardContent'>
           <div className='OBPbtn'>
           <Link className='OBPtravel'>Travel</Link>
            <Link className='OBPstyle'>Life style</Link>
           </div>
           <h3>LOW COST ADVERTISING</h3>
           <p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.</p>
           <span>31st January, 2018</span>
        </div>
    </div>
  )
}

export default Card