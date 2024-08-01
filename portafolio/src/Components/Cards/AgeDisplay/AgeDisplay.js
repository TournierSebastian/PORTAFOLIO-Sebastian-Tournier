import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { LeagueContext } from '../../Context/LeagueContext';
import './AgeDisplay.css';

const AgeDisplay = () => {
  const { theme } = useContext(ThemeContext);
  const { League } = useContext(LeagueContext);
  const [age, setAge] = useState(0);

  useEffect(() => {
    let currentAge = 0;
    const interval = setInterval(() => {
      if (currentAge < 21) {
        currentAge++;
        setAge(currentAge);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
      <p style={{ fontSize: '22px' }}>{content[lang].age}</p>
      <p style={{ fontSize: '60px' }} className='Age'>{age}</p>
      <p style={{ fontSize: '22px' }}>{content[lang].years}</p>
    </div>
  );
}

export default AgeDisplay;
