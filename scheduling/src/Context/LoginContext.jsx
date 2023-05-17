import { createContext, useState } from "react";

export const LoginContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(true);
  };

  return (
    <LoginContext.Provider value={{ Login, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
