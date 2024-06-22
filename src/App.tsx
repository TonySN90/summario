// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Controls from "./controls/Controls";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import List from "./list/List";
import Tiles from "./tiles/Tiles";

function App() {
  const list = false;
  return (
    <>
      <Header />
      <Wrapper>
        <Title />
        <Controls />

        {list ? <List /> : <Tiles />}
      </Wrapper>
    </>
  );
}

export default App;
