import React, { useContext } from 'react'
import './Linkedin.css'; 
import './../../Global.css';
import LinkedinIcon from '../../Images/Linkedin.png';
import iconUrl from '../../Images/IconUrl.png'
import { ThemeContext } from '../../Context/ThemeContext';

const Linkedin = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <a className={`Linkedin ${theme === 'Dark' ? 'Linkedin-Dark' : 'Linkedin-Light'} Card-Width`} 
    href="https://www.linkedin.com/in/sebastian-tournier-6aaa9a276/" 
    target="_blank" 
    rel="noopener noreferrer"
    >
      
        <img src={iconUrl} alt="IconUrl" className='iconUrl' />
        <img src={LinkedinIcon} alt="LinkedinIcon" className='LinkedinIcon' />
    </a>
  )
}

export default Linkedin

