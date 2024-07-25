import React, { useContext, useState } from 'react'
import './LanguageToggle.css'
import { LeagueContext } from '../../Context/LeagueContext'
import { ThemeContext } from '../../Context/ThemeContext'
const LanguageToggle = () => {
    const [isActive, setIsActive] = useState(true)
    const {SetLeague} = useContext(LeagueContext)
    const {theme} = useContext(ThemeContext)

    const handleClick = () => {
        setIsActive(!isActive);
        SetLeague(!isActive ? 'ES' : 'EN'); 
      };
  return (
    <div className={`LanguageToggle ${theme === 'Dark' ? 'LanguageToggle-Dark' : 'LanguageToggle-Light'}`} onClick={handleClick}>
      <h1>{isActive ? 'ES': 'EN'}</h1>
      <div className='LanguageToggle-Container'>
      <h3 style={{ color: isActive ? '#9975E7' : '#FFFFFF' }}>Es</h3>
      <h3 style={{ color: !isActive ? '#9975E7' : '#FFFFFF' }}>En</h3>
      </div>
    </div>
  )
}

export default LanguageToggle
