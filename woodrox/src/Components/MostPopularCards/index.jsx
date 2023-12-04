import React from 'react'
import Card from './Card'
import "./style.css"
const MostPopularCards = () => {
  return (
    <div className='MPcontainer'>
    <Card image={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg.webp"}/>
    <Card image={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg.webp"}/>
    <Card image={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg.webp"}/>
    </div>
  )
}

export default MostPopularCards