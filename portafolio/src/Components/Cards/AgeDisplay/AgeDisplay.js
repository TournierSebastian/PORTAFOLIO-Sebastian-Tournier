import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { LeagueContext } from '../../Context/LeagueContext';
import './AgeDisplay.css';

const AgeDisplay = () => {
  const { theme } = useContext(ThemeContext);
  const { League } = useContext(LeagueContext);

  const content = {
    es: {
      age: "EDAD",
      years: "Años",
    },
    en: {
      age: "AGE",
      years: "Years",
    }
  };

  const lang = League === 'EN' ? 'en' : 'es';

  return (
    <div className={`AgeDisplay ${theme === 'Dark' ? 'AgeDisplay-Dark' : 'AgeDisplay-Light'}`}>
      <p style={{ fontSize: '20px' }}>{content[lang].age}</p>
      <p style={{ fontSize: '50px' }} className='Age'>21</p>
      <p style={{ fontSize: '20px' }}>{content[lang].years}</p>
    </div>
  );
}

export default AgeDisplay;
