// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Controls from "./controls/Controls";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import List from "./list/List";
import Tiles from "./tiles/Tiles";
import { useAppContext } from "./contexts/AppContext";
import Favorites from "./components/Favorites";

function App() {
  const { view } = useAppContext();

  return (
    <>
      <Header />
      <Wrapper>
        <Title />
        <Controls />
        {view ? <List /> : <Tiles />}
      </Wrapper>
      <Favorites />
    </>
  );
}

export default App;
