import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(function (oldDarkMode) {
      return !oldDarkMode;
    });
  }

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}
