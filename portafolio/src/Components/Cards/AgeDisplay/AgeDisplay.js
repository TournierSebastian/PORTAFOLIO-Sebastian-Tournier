import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import  "./AgeDisplay.css"
const AgeDisplay = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`AgeDisplay ${theme === 'Dark' ? 'AgeDisplay-Dark' : 'AgeDisplay-Light'}`}>
      <p style={{fontSize: '20px'}}>EDAD</p>
      <p style={{fontSize: '50px'}} className='Age'>21</p>
      <p style={{fontSize: '20px'}}>Años</p>
    </div>
  )
}

export default AgeDisplay
