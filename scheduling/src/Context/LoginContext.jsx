import { createContext, useState } from "react";

export const LoginContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Login, setLogin] = useState(false);
  const [profile, setProfile] = useState({});

  const toggleLogin = (Logged) => {
    setLogin(Logged);
  };
  const toggleProfile = (profileData) => {
    setProfile(profileData);
  };

  return (
    <LoginContext.Provider
      value={{ Login, toggleLogin, profile, toggleProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
};
