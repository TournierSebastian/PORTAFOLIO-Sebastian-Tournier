import React, { createContext, useState, useEffect } from "react";

export const LeagueContext = createContext();

export const LeagueProvider = ({ children }) => {
  const [League, SetLeague] = useState(() => {
    const savedLeague = localStorage.getItem('league');
    return savedLeague ? savedLeague : 'ES';
  });

  const updateLeague = (newLeague) => {
    SetLeague(newLeague);
    localStorage.setItem('league', newLeague); 
  };

  useEffect(() => {
    localStorage.setItem('league', League); 
  }, [League]);

  return (
    <LeagueContext.Provider value={{ League, SetLeague: updateLeague }}>
      {children}
    </LeagueContext.Provider>
  );
};
