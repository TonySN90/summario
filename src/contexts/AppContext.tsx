import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

function AppProvider() {
  const [view, setView] = useState("list");
  const [sort, setSort] = useState("a-z");

  return (
    <AppContext.Provider
      value={{ view, setView, sort, setSort }}
    ></AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
