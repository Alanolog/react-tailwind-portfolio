import React from "react";
type appContextType = {
  darkMode: boolean;
  isEnglish: boolean;
  switchDarkMode: () => void;
  switchIsEnglish: () => void;
};
const appContextDefaultValues: appContextType = {
  darkMode: false,
  isEnglish: false,
  switchDarkMode: () => {},
  switchIsEnglish: () => {},
};
const AppContext = React.createContext<appContextType>(appContextDefaultValues);

export function useAppContext() {
  return React.useContext(AppContext);
}

type Props = {
  children: React.ReactNode;
};

export function AppContextProvider({ children }: Props) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isEnglish, setIsEnglish] = React.useState(false);

  const switchIsEnglish = () => {
    setIsEnglish((prevValue) => !prevValue);
  };

  const switchDarkMode = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  const value = { darkMode, isEnglish, switchDarkMode, switchIsEnglish };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
