// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state is null

  const login = (accountNumber) => {
    setUser({ accountNumber }); // Set user with account number on login
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
