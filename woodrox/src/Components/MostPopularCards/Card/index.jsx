import React from 'react'
import './style.css'
const Card = ({image}) => {
  return (
    <div className='MPFCard'>
        <img src={image} alt="" />
        <h3>GREEN BUTTER SOFA</h3>
        <p>Sony laptops are among the most well known laptops on today’s market. Sony is a name that.</p>
    </div>
  )
}

export default Card