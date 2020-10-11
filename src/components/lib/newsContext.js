import { createContext, useContext } from "react";

export const newsContext = createContext();

export const useNewsContext = () => {
  return useContext(newsContext);
};
