import React, { useContext } from 'react'
import './Email.css'
import { ThemeContext } from '../../Context/ThemeContext';
import iconUrl from '../../Images/IconUrl.png'

import EmailImage from '../../Images/Email.png'
const Email = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <a href="mailto:sebastian.tournier@gmail.com" className={`Email ${theme === 'Dark' ? 'Email-Dark' : 'Email-Light'} Card-Width`} >
            <div>
                <img src={iconUrl} className='iconUrl-Email' alt="Icon"></img>
            </div>
            <img src={EmailImage} className='EmailImage' alt="Email"></img>
        </a>
    )
}

export default Email
