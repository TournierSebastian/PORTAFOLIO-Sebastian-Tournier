import React from 'react'
import iconUrl from '../../Images/IconUrl.png'
import iconGitHub from '../../Images/GitHub.png'
import './GitHub.css'
const GitHub = () => {
  return (
    <a className='GitHub'
    href="https://github.com/TournierSebastian" 
    target="_blank"
    rel="noopener noreferrer" 
    > 
    <div>
        <img src={iconUrl} className='iconUrl-GitHub'></img>     
    </div>
    <div className='GitHub-Container'>
    <img src={iconGitHub} className='iconGitHub'></img>
        
        <h2>GitHub</h2>
        <p>Accede a mi perfil de GitHub para revisar los proyectos y códigos que he desarrollado</p>
    </div>
    </a>
  )
}

export default GitHub
