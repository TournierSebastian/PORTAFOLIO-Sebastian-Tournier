import React, { useContext } from 'react';
import './AboutMe.css';
import Profile from '../../Download/Images/Profile2.png'
import { LeagueContext } from '../../Context/LeagueContext';
import { ThemeContext } from '../../Context/ThemeContext';

const AboutMe = () => {
  const { League } = useContext(LeagueContext);
  const {theme} = useContext(ThemeContext)

  const content = {
    es: {
      title: "👋Hola, Soy",
      name: "Sebastian Tournier",
      description: `Soy un <b>desarrollador web</b> apasionado con experiencia en la creación de aplicaciones 
                    interactivas y eficientes utilizando <b>React</b> y <b>.NET</b>. Tengo un sólido dominio de <b>HTML</b>, <b>CSS</b> y 
                    <b>JavaScript</b>. Me encanta aprender sobre este emocionante campo y siempre busco nuevas formas de mejorar 
                    mis habilidades y conocimientos.`
    },
    en: {
      title: "👋Hello, I'm",
      name: "Sebastian Tournier",
      description: `I'm a <b>web developer</b> passionate about creating interactive and efficient applications 
                    using <b>React</b> and <b>.NET</b>. I have a strong command of <b>HTML</b>, <b>CSS</b>, and 
                    <b>JavaScript</b>. I love learning about this exciting field and always seek new ways to enhance 
                    my skills and knowledge.`
    }
  };

  const lang = League === 'EN' ? 'en' : 'es';

  return (
    <div className={`Profile ${theme === 'Dark' ? 'Profile-Dark' : 'Profile-Light'}`}>
      <div className='Profile-Title'>
        <img src={Profile} alt="Profile" className='Profile_img' />
        <div>
          <h1>{content[lang].title}</h1>
          <h1>{content[lang].name}</h1>
        </div>
      </div>
      <div className='Profile-Container'>
        <p dangerouslySetInnerHTML={{ __html: content[lang].description }}></p>
      </div>
    </div>
  );
};

export default AboutMe;
