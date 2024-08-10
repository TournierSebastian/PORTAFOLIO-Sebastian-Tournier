import React, { useContext } from 'react'
import './Technologies.css'
import './../../Global.css';
import  ReactIcon from '../../Download/Images/ReactIcon.png'
import  cssIcon from '../../Download/Images/cssIcon.png'
import  JavaScriptIcon from '../../Download/Images/JavaScriptIcon.png'
import  HtmlIcon from '../../Download/Images/htmlIcon.png'
import  boostrapIcon from '../../Download/Images/boostrapIcon.png'
import  NetCore from '../../Download/Images/NetCore.png'
import  Python from '../../Download/Images/Python.png'
import  C from '../../Download/Images/C.png'
import  SqlServer from '../../Download/Images/SqlServer.png'
import  MySql from '../../Download/Images/MySql.png'
import  Git from '../../Download/Images/Git.png'
import  Figma from '../../Download/Images/Figma.png'
import { ThemeContext } from '../../Context/ThemeContext'


const Technologies = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`Technologies ${theme === 'Dark' ? 'Technologies-Dark' : 'Technologies-Light'} Card-Width`}>
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
