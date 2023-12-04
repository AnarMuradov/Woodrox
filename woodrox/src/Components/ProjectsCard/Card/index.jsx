import React from 'react'
import "./style.css"
const Card = ({image}) => {
  return (
    <div className='projectcard'>
        <div className='projectcardImage'>
        <img src={image} alt="" />
        </div>
        <div className='projectCardHover'>
            <h3>ALEX COMPLEX FOR ESIDENCE</h3>
            <p>
            LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer.
            </p>
        </div>
    </div>
  )
}

export default Card