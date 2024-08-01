import React, { useContext } from 'react'
import './Technologies.css'
import  ReactIcon from '../../Images/ReactIcon.png'
import  cssIcon from '../../Images/cssIcon.png'
import  JavaScriptIcon from '../../Images/JavaScriptIcon.png'
import  HtmlIcon from '../../Images/htmlIcon.png'
import  boostrapIcon from '../../Images/boostrapIcon.png'
import  NetCore from '../../Images/NetCore.png'
import  Python from '../../Images/Python.png'
import  C from '../../Images/C.png'
import  SqlServer from '../../Images/SqlServer.png'
import  MySql from '../../Images/MySql.png'
import  Git from '../../Images/Git.png'
import  Figma from '../../Images/Figma.png'
import { ThemeContext } from '../../Context/ThemeContext'


const Technologies = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`Technologies ${theme === 'Dark' ? 'Technologies-Dark' : 'Technologies-Light'}`}>
      <div className='Technologies-Container'>
      <img src={ReactIcon} className='TechnologiesIcon'></img>
      <img src={cssIcon} className='TechnologiesIcon'></img>
      <img src={JavaScriptIcon} className='TechnologiesIcon'></img>
      <img src={HtmlIcon} className='TechnologiesIcon'></img>
      <img src={boostrapIcon} className='TechnologiesIcon'></img>
      <img src={NetCore} className='TechnologiesIcon'></img>
      <img src={Python} className='TechnologiesIcon'></img>
      <img src={C} className='TechnologiesIcon'></img>
      <img src={SqlServer} className='TechnologiesIcon'></img>
      <img src={MySql} className='TechnologiesIcon'></img>
      <img src={Git} className='TechnologiesIcon'></img>
      <img src={Figma} className='TechnologiesIcon'></img>

      </div>
    </div>
  )
}

export default Technologies
