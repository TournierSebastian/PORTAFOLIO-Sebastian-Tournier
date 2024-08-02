import React from 'react'
import AboutMe from '../../Cards/AboutMe/AboutMe'
import "./Home.css"
import LanguageToggle from '../../Cards/LanguageToggle/LanguageToggle'
import ThemeToggle from '../../Cards/ThemeToggle/ThemeToggle'
import AgeDisplay from '../../Cards/AgeDisplay/AgeDisplay'
import Linkedin from '../../Cards/Linkedin/Linkedin'
import Technologies from '../../Cards/Technologies/Technologies'
import Experience from '../../Cards/Experience/Experience'
const Home = () => {
  return (
    <div className='Home'>
      <div className= "Home-Intro">
      <AboutMe/>
      <div className='Home-Intro-Container'>
          <LanguageToggle/>
          <ThemeToggle />
      </div>
      </div>
      <div className='Home-Info-Container'>
      <div style={{display: 'flex', marginBottom: '30px'}}>
      <AgeDisplay/>
      <Linkedin/>
      <Technologies/>
      <Experience/>
      </div>
      <div style={{display: 'flex'}}>
    
   

      </div>
      </div>
      

    </div>
  )
}

export default Home
