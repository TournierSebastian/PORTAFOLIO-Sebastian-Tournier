import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme  }}>
      {children}
    </ThemeContext.Provider>
  );
};
