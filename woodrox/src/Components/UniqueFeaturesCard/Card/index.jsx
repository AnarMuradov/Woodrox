import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
  library.add(faUser,faIdCard,faPhone,faRocket,faGem,faComment)
const Card = ({icon ,title}) => {
  return (
    <div className='UFcard'>
        <div className='UFCardTitle'>
        <FontAwesomeIcon icon={icon} />
        <h4>{title}</h4>
        </div>
        <div className='UFCardInfo'>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        </div>

    </div>
  )
}

export default Card