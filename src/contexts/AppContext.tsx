import { createContext, useState } from "react";

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

export default AppProvider;
