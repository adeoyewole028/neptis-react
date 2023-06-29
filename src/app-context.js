import { useContext, createContext } from "react";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};
