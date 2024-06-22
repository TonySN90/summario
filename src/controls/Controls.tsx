import {
  FaHeart,
  FaListUl,
  FaRegHeart,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
import ControlButton from "./ControlButton";
import { useAppContext } from "../contexts/AppContext";

function Controls() {
  const { sort, setSort, view, setView, favorites } = useAppContext();
  function handleClickSort() {
    setSort(!sort);
  }
  function handleClickView() {
    setView(!view);
  }

  return (
    <section>
      <div className="flex w-full gap-2 mb-2">
        <ControlButton handleClick={handleClickSort}>
          <p className="text-sm">Sort</p>
          {sort ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
          {/* <FaSortAlphaDown /> */}
        </ControlButton>

        <ControlButton handleClick={handleClickView}>
          <p className="text-sm">View</p>
          {view ? <FaListUl /> : <SiWindows11 />}
        </ControlButton>

        <ControlButton handleClick={() => console.log("favorites")}>
          <p className="text-sm">Favorites</p>
          {favorites.length === 0 ? <FaRegHeart /> : <FaHeart />}
          {/* <GoHeartFill /> */}
        </ControlButton>
      </div>
    </section>
  );
}

export default Controls;
