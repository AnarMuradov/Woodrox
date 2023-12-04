import React from 'react'
import Card from './Card'
import './style.css'
const OurBlogPostsCards = () => {
  return (
    <div className='OurBlogPostsCardsCnt'>
        <Card image={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp"}/>
        <Card image={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg.webp"}/>
        <Card image={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg.webp"}/>
    </div>
  )
}

export default OurBlogPostsCards