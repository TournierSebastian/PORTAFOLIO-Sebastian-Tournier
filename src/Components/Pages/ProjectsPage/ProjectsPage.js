import React from 'react'
import './ProjectsPage.css'
import Flecha from '../../Download/Images/Flecha.png'
import EasyFit from '../../Cards/Projects/EasyFit/EasyFit'
const ProjectsPage = () => {
  return (
    <div className='ProjectsPage'>
      <div className='ProjectsPage_Title'>
      <a href='/' className='Icon_Return'>
      <img src={Flecha}  className='Image_Return'> 
      </img></a>
      <h1>Mis Proyectos</h1>
      </div>
      <div>
      <EasyFit/>
      </div>
    </div>
  )
}

export default ProjectsPage
