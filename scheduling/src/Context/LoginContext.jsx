import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("ligth");

  const toggleTheme = () => {
    setTheme(theme === "ligth" ? "dark" : "light");
  };

  return <ThemeContext.Provider
  value={{theme, toggleTheme}}>
    {children}</ThemeContext.Provider>;
};
