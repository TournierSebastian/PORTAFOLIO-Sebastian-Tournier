import React, { useContext } from 'react';
import './LanguageToggle.css';
import { LeagueContext } from '../../Context/LeagueContext';
import { ThemeContext } from '../../Context/ThemeContext';

const LanguageToggle = () => {
    const { League, SetLeague } = useContext(LeagueContext);
    const { theme } = useContext(ThemeContext);

    const handleClick = () => {
        SetLeague(League === 'ES' ? 'EN' : 'ES');
    };

    return (
        <div className={`LanguageToggle ${theme === 'Dark' ? 'LanguageToggle-Dark' : 'LanguageToggle-Light'}`} onClick={handleClick}>
            <h1>{League}</h1>
            <div className='LanguageToggle-Container'>
                <h3 style={{ color: League === 'ES' ? '#9975E7' : '#FFFFFF' }}>Es</h3>
                <h3 style={{ color: League === 'EN' ? '#9975E7' : '#FFFFFF' }}>En</h3>
            </div>
        </div>
    );
};

export default LanguageToggle;
