// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Controls from "./controls/Controls";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import List from "./list/List";
import Tiles from "./tiles/Tiles";
import { useAppContext } from "./contexts/AppContext";
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Heading from "./components/Heading";

function App() {
  const { view, isOpenModal } = useAppContext();

  return (
    <>
      <Header />
      <Wrapper>
        <Heading>
          <Title />
          <Controls />
        </Heading>
        {view ? <List /> : <Tiles />}
      </Wrapper>
      <Favorites />
      {isOpenModal && <Modal />}
    </>
  );
}

export default App;
