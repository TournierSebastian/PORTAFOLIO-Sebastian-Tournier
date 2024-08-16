import React, { useContext, useState, useEffect } from 'react';
import './ThemeToggle.css';
import { ThemeContext } from '../../Context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [moved, setMoved] = useState(theme === 'Light');

  useEffect(() => {
    setMoved(theme === 'Light');
  }, [theme]);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div className={`ThemeToggle ${theme === 'Dark' ? 'ThemeToggle-Dark' : 'ThemeToggle-Light'}`}>
      <div className='button-container'>
        <button 
          className={`toggle-button ${moved ? 'move-right' : 'move-left'}`} 
          onClick={handleClick}
        >
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;
