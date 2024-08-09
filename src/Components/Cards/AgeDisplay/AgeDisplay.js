import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { LeagueContext } from '../../Context/LeagueContext';
import './AgeDisplay.css';
import './../../Global.css';
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
    <div className={`AgeDisplay ${theme === 'Dark' ? 'AgeDisplay-Dark' : 'AgeDisplay-Light'} Card-Width`}>
      <p >{content[lang].age}</p>
      <h3 className='Age'>{age}</h3>
      <p >{content[lang].years}</p>
    </div>
  );
}

export default AgeDisplay;
