import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

function AppProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState("list");
  const [sort, setSort] = useState("a-z");

  return (
    <AppContext.Provider value={{ view, setView, sort, setSort }}>
      {children}
    </AppContext.Provider>
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
