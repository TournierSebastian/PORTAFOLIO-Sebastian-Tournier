// Projects.js
import React, { useContext } from 'react'
import "./Projects.css"
import iconUrl from '../../Download/Images/IconUrl.png'
import { LeagueContext } from '../../Context/LeagueContext';

const Projects = () => {

    const { League } = useContext(LeagueContext);

    const content = {
        es: {
            title: "Mis Proyectos",
            description: "Aquí se pueden encontrar algunos de mis proyectos o prubeas de mi experiencia",
          },
          en: {
            title: "My Projects",
            description: "Here you can find some of my projects or proofs of my experience.",
          }
        };
    
      const lang = League === 'EN' ? 'en' : 'es';
  return (
    <a href='/MyProjects' className='Projects'>
      <img src={iconUrl} className='iconUrl'></img>     
      <h2>{content[lang].title}</h2>
      <p>{content[lang].description}</p>
    </a>
  )
}

export default Projects
