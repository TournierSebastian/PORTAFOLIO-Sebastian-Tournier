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
import Projects from '../../Cards/Projects/Projects'
import Climate from '../../Cards/Climate/Climate'
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

        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <AgeDisplay />
          <Linkedin />
          <Technologies />
          <div className='hide-responsive'>
            <Experience />
          </div>
        </div>

        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <div className='display-responsive'>
            <Experience />
          </div>
          <GitHub />
          <div className='hide-responsive'>
          <Projects/>
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
        <div className='display-responsive'>
            <Projects />
        </div>
        <Climate/>
        </div>

      </div>

    </div>
  )
}

export default Home
