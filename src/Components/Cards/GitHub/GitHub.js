import React, { useContext } from 'react'
import iconUrl from '../../Download/Images/IconUrl.png'
import iconGitHub from '../../Download/Images/GitHub.png'
import './GitHub.css'
import { LeagueContext } from '../../Context/LeagueContext'
const GitHub = () => {

  const { League } = useContext(LeagueContext);


  const content = {
    es: {
      title: "GitHub",
      description: "Accede a mi perfil de GitHub para revisar los proyectos y códigos que he desarrollado",
    },
    en: {
      title: "GitHub",
      description: "Access my GitHub profile to check out the projects and codes I have developed",
    }
  };

  const lang = League === 'EN' ? 'en' : 'es';
  return (
    <a className='GitHub'
      href="https://github.com/TournierSebastian"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <img src={iconUrl} className='iconUrl'></img>
      </div>
      <div className='GitHub-Container'>
        <img src={iconGitHub} className='iconGitHub'></img>

        <h2>{content[lang].title}</h2>
        <p>{content[lang].description}</p>
      </div>
    </a>
  )
}

export default GitHub
