// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Controls from "./controls/Controls";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import List from "./list/List";
import Tiles from "./tiles/Tiles";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { view } = useAppContext();

  console.log(view);
  return (
    <>
      <Header />
      <Wrapper>
        <Title />
        <Controls />

        {view ? <List /> : <Tiles />}
      </Wrapper>
    </>
  );
}

export default App;
