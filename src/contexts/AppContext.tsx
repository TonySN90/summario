import { createContext, useContext, useState } from "react";
import { IContextTypes } from "../types/types";

const AppContext = createContext<IContextTypes | undefined>(undefined);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(true);
  const [sort, setSort] = useState(true);

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
