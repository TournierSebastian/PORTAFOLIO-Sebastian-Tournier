import React from 'react'
import AboutMe from '../../Cards/AboutMe/AboutMe'
import "./Home.css"
import LanguageToggle from '../../Cards/LanguageToggle/LanguageToggle'
import ThemeToggle from '../../Cards/ThemeToggle/ThemeToggle'
import AgeDisplay from '../../Cards/AgeDisplay/AgeDisplay'
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
      <AgeDisplay/>
      </div>
      

    </div>
  )
}

export default Home
