import { useAppContext } from "./contexts/AppContext";

// Um zwischen Tailwind und Bootstrap zu switchen, einfach den entsprechenden Import ein und auskommentieren.
// Wichtig: Bei der Nutzng von Bootstrap muss die Tailwind-Config deaktivert werden.

// TailwinCss
import Header from "./features/header/Header";
import Controls from "./features/controls/Controls";
import Wrapper from "./features/components/Wrapper";
import Title from "./features/components/Title";
import List from "./features/list/List";
import Favorites from "./features/components/Favorites";
import Modal from "./features/components/Modal";
import Heading from "./features/components/Heading";
import Tiles from "./features/tiles/Tiles";

// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import Favorites from "./features/components/bootstrap/Favorites_bs";
// import Heading from "./features/components/bootstrap/Heading_bs";
// import Modal from "./features/components/bootstrap/Modal_bs";
// import Title from "./features/components/bootstrap/Title_bs";
// import Wrapper from "./features/components/bootstrap/Wrapper_bs";
// import Controls from "./features/controls/bootstrap/Controls_bs";
// import Header from "./features/header/Header_bs";
// import List from "./features/list/bootstrap/List_bs";
// import Tiles from "./features/tiles/bootstrap/Tiles_bs";

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
