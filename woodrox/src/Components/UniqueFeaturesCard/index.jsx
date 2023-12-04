import React from 'react'
import Card from './Card'
import './style.css'

const UniqueFeaturesCards = () => {
  return (
    <div className='UFCcontainer'>
        <Card icon='fa-user' title='EXPERT TECHNICIANS' />
        <Card icon='fa-id-card' title='PROFESSIONAL SERVICE'/>
        <Card icon='fa-phone' title='GREAT SUPPORT' />
        <Card icon='fa-rocket' title='TECHNICAL SKILLS'/>
        <Card icon='fa-gem'  title='HIGHLY RECOMENDED'/>
        <Card icon='fa-comment'  title='POSITIVE REVIEWS'/>
    </div>
  )
}

export default UniqueFeaturesCards