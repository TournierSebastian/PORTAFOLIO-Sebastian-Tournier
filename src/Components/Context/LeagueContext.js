import React, { createContext, useState } from "react";

export const LeagueContext = createContext();

export const LeagueProvider = ({ children }) => {
  const [League, SetLeague] = useState('ES');
 
  return (
    <LeagueContext.Provider value={{ League, SetLeague }}>
      {children}
    </LeagueContext.Provider>
  );
};