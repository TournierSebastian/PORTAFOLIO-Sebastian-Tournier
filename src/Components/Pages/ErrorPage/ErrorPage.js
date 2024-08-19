import React, { useContext } from 'react';
import Error404 from './../../Download/Images/Error404.png';
import { LeagueContext } from '../../Context/LeagueContext';
import './ErrorPage.css';

const ErrorPage = () => {
  const { League } = useContext(LeagueContext);

  const content = {
    es: {
      title: "¡Vaya! Página no encontrada",
      message: "La página que estás buscando pudo haber sido eliminada, cambiado su nombre o está temporalmente no disponible.",
      button: "INICIO"
    },
    en: {
      title: "Oops! Page Not Found",
      message: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      button: "GO HOME"
    }
  };

  const lang = League === 'EN' ? 'en' : 'es';

  return (
    <div style={{ textAlign: 'center', padding: '50px' }} className='l'>
      <img src={Error404} alt="Error 404" style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>{content[lang].title}</h1>
      <p>{content[lang].message}</p>
      <a href='./'>
        <button className='ButtonErrro404'>{content[lang].button}</button>
      </a>
    </div>
  );
}

export default ErrorPage;
