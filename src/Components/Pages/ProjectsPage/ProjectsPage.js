import React from 'react'
import './ProjectsPage.css'
import Flecha from '../../Download/Images/Flecha.png'
import Flecha_Llena from '../../Download/Images/Flecha_Llena.png'
import EasyFit from '../../Cards/Projects/Project/Project'
import Project from '../../Cards/Projects/Project/Project'
import FondoEasyFit from './../../Download/Images/easyfit.png';
import FondoEpicWear from './../../Download/Images/EpicWear.png';
import FondoFamilyMarket from './../../Download/Images/FamilyMarket.png';
import FondoPortafolio from './../../Download/Images/Portafolio.png';

const ProjectsPage = () => {
  const easyfit = [
    {
        title: 'EasyFit',
        Description: `En este proyecto, desarrollé una página de nutrición relacionada con las calorías, donde implementé un sistema CRUD con funciones diferenciadas para usuarios y administradores. Utilicé tecnologías como React, HTML, Firebase, CSS y Bootstrap. Trabajé de manera colaborativa con un equipo bien organizado de dos personas, distribuyendo tareas para llevar a cabo el proyecto de manera efectiva`,
        techStack: ['React', 'FireBase', 'Bootstrap'],
        githubUrl: 'https://github.com/NekiroPLZ/easyfitv2',
        backgroundImage: FondoEasyFit
    }
];

const EpicWear = [
  {
      title: 'EpicWear',
      Description: `En este proyecto, trabajé en el desarrollo de una API para una tienda de ventas de camisetas, donde creé un CRUD, gestioné usuarios y manejé roles. Utilicé tecnologías como .NET 6, C# y SQL Server. La relevancia y las habilidades destacadas en este proyecto incluyeron la aplicación avanzada de patrones de diseño como MVC, Repository y DTO, así como técnicas de mapeo, hashing, entre otras.`,
      techStack: ['.NET 6', 'SQL Server'],
      githubUrl: 'https://github.com/TournierSebastian/TupProgramacion3-Tpi',
      backgroundImage: FondoEpicWear
  }
];

const FamilyMarket = [
  {
      title: 'Family Market',
      Description: `Participé en un proyecto grupal para desarrollar una aplicación de supermercado con funcionalidades como carrito de compras, favoritos, pagos con MP, gestión de roles y CRUDs para productos, categorías y vendedores. También integramos un Chat Bot. Utilizamos las tecnologías .NET 8, SQL Server, CSS y React.js. Implementamos metodologías ágiles, específicamente Scrum, para asegurar una gestión eficiente y una entrega efectiva.`,
      techStack: ['.NET 8', 'SQL Server', ' React.js', 'Mp Developers'],
      githubUrl: 'https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier',
      backgroundImage: FondoFamilyMarket
  }
];

const Portafolio = [
  {
      title: 'Mi Portafolio',
      Description: `Creé esta aplicación web utilizando un diseño de columnas estilo bento con el fin de presentar formalmente mi perfil y conocimientos. El desarrollo utilize React.js.`,
      techStack: [' React.js'],
      githubUrl: 'https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier',
      backgroundImage: FondoPortafolio
  }
];
  return (
    <div className='ProjectsPage'>

      <div className='ProjectsPage_Title'>
      <a href='/' className='Icon_Return'>
      <div className='Image_Return'> </div>
      </a>
      <h1>Mis Proyectos</h1>
      </div>
      <div className='Proyects-Container'>
      {easyfit.map((project, index) => (
                <Project key={index} {...project} />
      ))}
       {EpicWear.map((project, index) => (
                <Project key={index} {...project} />
      ))} 
      {FamilyMarket.map((project, index) => (
                <Project key={index} {...project} />
      ))} 
      </div>
      <div style={{marginTop: '20px'}}>
      {Portafolio.map((project, index) => (
                <Project key={index} {...project} />
      ))} 
      </div>
      <p className='Aclaracion'>Proyectos enfocados en lograr una óptima funcionalidad</p>

    </div>
    
  )
}

export default ProjectsPage
