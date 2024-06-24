import {
  FaHeart,
  FaListUl,
  FaRegHeart,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
import { useAppContext } from "../../../contexts/AppContext";
import ControlButton from "./ControlButton_bs";

function Controls() {
  const {
    sort,
    setSort,
    view,
    setView,
    isOpenFavourites,
    setIsOpenFavourites,
    favorites,
    sortHotels,
  } = useAppContext();
  function handleClickSort() {
    setSort(!sort);
    sortHotels();
  }
  function handleClickView() {
    setView(!view);
  }
  function handleClickFavs() {
    setIsOpenFavourites(!isOpenFavourites);
    // document.body.style.overflow = "hidden";
  }

  return (
    <section>
      <div className="d-flex gap-2 mb-2">
        <ControlButton handleClick={() => handleClickSort()}>
          <span className="text-sm">Sort</span>
          {sort ? (
            <FaSortAlphaUp className="ms-1" />
          ) : (
            <FaSortAlphaDown className="ms-1" />
          )}
        </ControlButton>

        <ControlButton handleClick={() => handleClickView()}>
          <span className="text-sm">View</span>
          {view ? (
            <FaListUl className="ms-1" />
          ) : (
            <SiWindows11 className="ms-1" />
          )}
        </ControlButton>

        <ControlButton handleClick={() => handleClickFavs()}>
          <span className="text-sm">Favorites</span>
          {favorites.length === 0 ? (
            <FaRegHeart className="ms-1" />
          ) : (
            <FaHeart className="ms-1" />
          )}
        </ControlButton>
      </div>
    </section>
  );
}

export default Controls;
