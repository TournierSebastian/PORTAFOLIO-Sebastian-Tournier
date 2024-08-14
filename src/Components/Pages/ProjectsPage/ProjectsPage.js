import React from 'react'
import './ProjectsPage.css'
import Flecha from '../../Download/Images/Flecha.png'
import Flecha_Llena from '../../Download/Images/Flecha_Llena.png'
import EasyFit from '../../Cards/Projects/EasyFit/EasyFit'
const ProjectsPage = () => {
  return (
    <div className='ProjectsPage'>
      <div className='ProjectsPage_Title'>
      <a href='/' className='Icon_Return'>
      <div className='Image_Return'> </div>
      </a>
      <h1>Mis Proyectos</h1>
      </div>
      <div className='Proyects-Container'>
      <EasyFit/>
      <EasyFit/>

      <EasyFit/>

      </div>
    </div>
  )
}

export default ProjectsPage
