import { FaSortAlphaDown } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { SiWindows11 } from "react-icons/si";
import ControlButton from "./ControlButton";
import { useAppContext } from "../contexts/AppContext";

function Controls() {
  const { view, setView } = useAppContext();
  function handleClickView() {
    setView(!view);
  }

  return (
    <section>
      <div className="flex w-full gap-2 mb-2">
        <ControlButton handleClick={() => console.log("sort")}>
          <p className="text-sm">Sort</p>
          <FaSortAlphaDown />
        </ControlButton>

        <ControlButton handleClick={handleClickView}>
          <p className="text-sm">View</p>
          <SiWindows11 />
        </ControlButton>

        <ControlButton handleClick={() => console.log("favorites")}>
          <p className="text-sm">Favorites</p>
          <GoHeartFill />
        </ControlButton>
      </div>
    </section>
  );
}

export default Controls;
