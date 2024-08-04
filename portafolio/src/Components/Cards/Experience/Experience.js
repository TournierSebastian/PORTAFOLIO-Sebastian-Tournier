import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { LeagueContext } from '../../Context/LeagueContext';
import './Experience.css';
import './../../Global.css';

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const { League } = useContext(LeagueContext);
  const [Experience, setExperience] = useState(0);

  useEffect(() => {
    let currentAge = 0;
    const interval = setInterval(() => {
      if (currentAge < 2) {
        currentAge++;
        setExperience(currentAge);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const content = {
    es: {
        Experience: "Años de experiencia",
    },
    en: {
        Experience: "Years of experience",
    }
  };

  const lang = League === 'EN' ? 'en' : 'es';

  return (
    <div className={`Experience ${theme === 'Dark' ? 'Experience-Dark' : 'Experience-Light'} Card-Width`}>
      <h3> +{Experience}</h3>
      <p>{content[lang].Experience}</p>
    </div>
  );
}

export default Experience;
