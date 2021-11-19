import React, { createContext, useState } from "react";
export const Context = createContext();
const ContextHeroes = ({ children }) => {
  const [data, setData] = useState([]);
  const [team, setTeam] = useState([]);
  const [user, setUser] = useState(false);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        data,
        setData,
        team,
        setTeam,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextHeroes;
