import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState([]);

  function toggleTheme() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    //save to local storage
    localStorage.setItem("theme", newTheme);
  }

  return (
    <AppContext.Provider
      value={{
        theme: currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
