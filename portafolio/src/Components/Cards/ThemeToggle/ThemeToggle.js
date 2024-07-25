import React, { useContext, useState } from 'react';
import './ThemeToggle.css';
import { ThemeContext } from '../../Context/ThemeContext';

const ThemeToggle = () => {
  const [moved, setMoved] = useState(false);
  const {toggleTheme} = useContext(ThemeContext)
  const {theme} = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme();
    setMoved(!moved);
  };

  return (
    <div className={`ThemeToggle ${theme === 'Dark' ? 'ThemeToggle-Dark' : 'ThemeToggle-Light'}`}>
      <div className='button-container'>
        <button 
          className={`toggle-button ${moved ? 'move-right' : ''}`} 
          onClick={handleClick}
        >
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;
 