import React, { useContext } from 'react';
import './ProjectsPage.css';
import Project from '../../Cards/Projects/Project/Project';
import FondoEasyFit from './../../Download/Images/easyfit.png';
import FondoEpicWear from './../../Download/Images/EpicWear.png';
import FondoFamilyMarket from './../../Download/Images/FamilyMarket.png';
import FondoPortafolio from './../../Download/Images/Portafolio.png';
import Planify from './../../Download/Images/Planify.png'
import SupermercadoLaEstancia from './../../Download/Images/Supermercado.png';

import { ThemeContext } from '../../Context/ThemeContext';
import { LeagueContext } from '../../Context/LeagueContext';

const ProjectsPage = () => {
  const { theme } = useContext(ThemeContext);
  const { League } = useContext(LeagueContext);

  const content = {
    es: {
      title: "Mis Proyectos",
      clarification: "Proyectos enfocados en lograr una óptima funcionalidad",
      easyfit: [
        {
          title: 'EasyFit',
          Description: `En este proyecto, desarrollé una página de nutrición relacionada con las calorías, donde implementé un sistema CRUD con funciones diferenciadas para usuarios y administradores. Utilicé tecnologías como React, HTML, Firebase, CSS y Bootstrap. Trabajé de manera colaborativa con un equipo bien organizado de dos personas, distribuyendo tareas para llevar a cabo el proyecto de manera efectiva`,
          techStack: ['React', 'Firebase', 'Bootstrap'],
          githubUrl: 'https://github.com/NekiroPLZ/easyfitv2',
          backgroundImage: FondoEasyFit
        }
      ],
      epicWear: [
        {
          title: 'EpicWear',
          Description: `En este proyecto, trabajé en el desarrollo de una API para una tienda de ventas de camisetas, donde creé un CRUD, gestioné usuarios y manejé roles. Utilicé tecnologías como .NET 6, C# y SQL Server. La relevancia y las habilidades destacadas en este proyecto incluyeron la aplicación avanzada de patrones de diseño como MVC, Repository y DTO, así como técnicas de mapeo, hashing, entre otras.`,
          techStack: ['.NET 6', 'SQL Server'],
          githubUrl: 'https://github.com/TournierSebastian/TupProgramacion3-Tpi',
          backgroundImage: FondoEpicWear
        }
      ],
      familyMarket: [
        {
          title: 'Family Market',
          Description: `Participé en un proyecto grupal para desarrollar una aplicación de supermercado con funcionalidades como carrito de compras, favoritos, pagos con MP, gestión de roles y CRUDs para productos, categorías y vendedores. También integramos un Chat Bot. Utilizamos las tecnologías .NET 8, SQL Server, CSS y React.js. Implementamos metodologías ágiles, específicamente Scrum, para asegurar una gestión eficiente y una entrega efectiva.`,
          techStack: ['.NET 8', 'SQL Server', 'React.js', 'Mp Developers'],
          githubUrl: 'https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier',
          backgroundImage: FondoFamilyMarket,
          documentationUrl: 'https://docs.google.com/document/d/129l1W1ok6pTDzOD-ml_G7e3PPpBM6RKImFuoVqLYu6Q/edit' 

        }
      ],
      portafolio: [
        {
          title: 'Mi Portafolio',
          Description: `Creé esta aplicación web utilizando un diseño de columnas estilo bento con el fin de presentar formalmente mi perfil y conocimientos. El desarrollo utilicé React.js.`,
          techStack: ['React.js'],
          githubUrl: 'https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier',
          backgroundImage: FondoPortafolio
        }
      ],
      SupermercadoLaEstancia: [
        {
          title: 'La Estancia',
          Description: `Desarrollamos una página web para un supermercado en un equipo de 4 personas, utilizando HTML, CSS, JavaScript, Bootstrap y Bootswatch. Este proyecto me permitió mejorar mis habilidades en la gestión de proyectos con Trello y en el diseño de interfaces con Figma.`,
          techStack: ['Hmtl', 'Js', 'Css', 'Bootstrap', 'Bootswatch'],
          githubUrl: 'https://github.com/Ulimb/Bootcamp_Full-Stack',
          backgroundImage: SupermercadoLaEstancia,
          Pageweb: 'https://bootcamp-full-stack.vercel.app/semana-6/proyecto/Pages/Home/Home.html'
        }
      ],
      Planify: [
        {
          title: 'Planify',
          Description: `Desarrollaron en equipo una página web básica con un estilo similar a Trello, la cual incluye diversas funcionalidades con implementación de base de datos. Este proyecto permitió al usuario mejorar sus conocimientos en Express.js y Node.js.`,
          techStack: ['React.js', 'Expres.js', 'Bootstrap', 'Mysql'],
          githubUrl: 'https://github.com/cesarl94/planify',
          backgroundImage: Planify,
        }
      ]

    },
    en: {
      title: "My Projects",
      clarification: "Projects focused on achieving optimal functionality",
      easyfit: [
        {
          title: 'EasyFit',
          Description: `In this project, I developed a nutrition page related to calories, where I implemented a CRUD system with differentiated functions for users and administrators. I used technologies such as React, HTML, Firebase, CSS, and Bootstrap. I worked collaboratively with a well-organized team of two people, distributing tasks to effectively complete the project.`,
          techStack: ['React', 'Firebase', 'Bootstrap'],
          githubUrl: 'https://github.com/NekiroPLZ/easyfitv2',
          backgroundImage: FondoEasyFit
        }
      ],
      epicWear: [
        {
          title: 'EpicWear',
          Description: `In this project, I worked on developing an API for a t-shirt sales store, where I created a CRUD, managed users, and handled roles. I used technologies such as .NET 6, C#, and SQL Server. The relevance and skills highlighted in this project included the advanced application of design patterns such as MVC, Repository, and DTO, as well as mapping, hashing techniques, among others.`,
          techStack: ['.NET 6', 'SQL Server'],
          githubUrl: 'https://github.com/TournierSebastian/TupProgramacion3-Tpi',
          backgroundImage: FondoEpicWear
        }
      ],
      familyMarket: [
        {
          title: 'Family Market',
          Description: `I participated in a group project to develop a supermarket application with features such as a shopping cart, favorites, payments with MP, role management, and CRUDs for products, categories, and vendors. We also integrated a Chat Bot. We used technologies such as .NET 8, SQL Server, CSS, and React.js. We implemented agile methodologies, specifically Scrum, to ensure efficient management and effective delivery.`,
          techStack: ['.NET 8', 'SQL Server', 'React.js', 'Mp Developers'],
          githubUrl: 'https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier',
          backgroundImage: FondoFamilyMarket,
          documentationUrl: 'https://docs.google.com/document/d/129l1W1ok6pTDzOD-ml_G7e3PPpBM6RKImFuoVqLYu6Q/edit' 
        }
      ],
      portafolio: [
        {
          title: 'My Portfolio',
          Description: `I created this web application using a bento-style column design to formally present my profile and skills. The development used React.js.`,
          techStack: ['React.js'],
          githubUrl: 'https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier',
          backgroundImage: FondoPortafolio
        }
      ],
      SupermercadoLaEstancia: [
        {
          title: 'The Estancia',
          Description: `We developed a website for a supermarket as part of a team of 4 people, using HTML, CSS, JavaScript, Bootstrap, and Bootswatch. This project allowed me to improve my skills in project management with Trello and interface design with Figma.`,
          techStack: ['Hmtl', 'Js', 'Css', 'Bootstrap', 'Bootswatch'],
          githubUrl: 'https://github.com/Ulimb/Bootcamp_Full-Stack',
          backgroundImage: SupermercadoLaEstancia,
          Pageweb: 'https://bootcamp-full-stack.vercel.app/semana-6/proyecto/Pages/Home/Home.html'
        }
      ],
      Planify: [
        {
          title: 'Planify',
          Description: `They developed a basic website as a team with a style similar to Trello, which includes various functionalities with database implementation. This project allowed the user to improve their knowledge of Express.js and Node.js.`,
          techStack: ['React.js', 'Expres.js', 'Bootstrap', 'Mysql'],
          githubUrl: 'https://github.com/cesarl94/planify',
          backgroundImage: Planify,
        }
      ]
    }
  };

  const lang = League === 'EN' ? 'en' : 'es';

  return (
    <div className='ProjectsPage'>
      <div className={`ProjectsPage_Title ${theme === 'Dark' ? 'ProjectsPage_Title-Dark' : 'ProjectsPage_Title-Light'}`}>
        <a href='/' className='Icon_Return'>
          <div className='Image_Return'> </div>
        </a>
        <h1 className={`typing-effect ${theme === 'Dark' ? 'typing-effect-Dark' : 'typing-effect-Light'}`}>{content[lang].title}</h1>
      </div>
      <div className='Proyects-Container'>
        {content[lang].easyfit.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        {content[lang].epicWear.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        {content[lang].familyMarket.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <div className='Proyects-Container' style={{marginTop: '20px'}}>
        {content[lang].portafolio.map((project, index) => (
          <Project key={index} {...project} />
        ))}
         {content[lang].SupermercadoLaEstancia.map((project, index) => (
          <Project key={index} {...project} />
        ))}
         {content[lang].Planify.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      
      <p className='Aclaracion'>{content[lang].clarification}</p>
    </div>
  );
};

export default ProjectsPage;
