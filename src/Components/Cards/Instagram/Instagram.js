import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import InstagramImage from './../../Download/Images/Instagram.png'
import iconUrl from '../../Download/Images/IconUrl.png'
import './Instagram.css'
const Instagram = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <a className={`Instagram ${theme === 'Dark' ? 'Instagram-Dark' : 'Instagram-Light'} Card-Width`}
            href="https://www.instagram.com/tourniersebastian/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>          
                <img src={iconUrl} alt="IconUrl" className='iconUrl' />
            </div>

            <img src={InstagramImage} className='InstagramImage' />
        </a>
    )

}

export default Instagram
