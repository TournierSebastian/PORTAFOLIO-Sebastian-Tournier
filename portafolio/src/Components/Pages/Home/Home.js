import React from 'react'
import AboutMe from '../../Cards/AboutMe/AboutMe'
import "./Home.css"
import LanguageToggle from '../../Cards/LanguageToggle/LanguageToggle'
import ThemeToggle from '../../Cards/ThemeToggle/ThemeToggle'
import AgeDisplay from '../../Cards/AgeDisplay/AgeDisplay'
import Linkedin from '../../Cards/Linkedin/Linkedin'
import Technologies from '../../Cards/Technologies/Technologies'
import Experience from '../../Cards/Experience/Experience'
import GitHub from '../../Cards/GitHub/GitHub'
const Home = () => {
  return (
    <div className='Home'>

      <div className="Home-Intro">
        <AboutMe />
        <div className='Home-Intro-Container'>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      <div className='Home-Info-Container'>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <AgeDisplay />
          <Linkedin />
          <Technologies />
          <div className='hide-experience'>
            <Experience />
          </div>
        </div>
        
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div className='hide-experience-responsive'>
            <Experience />
          </div>
          <GitHub />
        </div>

      </div>

    </div>
  )
}

export default Home
