import { FaSortAlphaDown } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { SiWindows11 } from "react-icons/si";
import ControlButton from "./ControlButton";

function Controls() {
  return (
    <section>
      <div className="flex w-full gap-2 mb-2">
        <ControlButton>
          <p className="text-sm">Sort</p>
          <FaSortAlphaDown />
        </ControlButton>

        <ControlButton>
          <p className="text-sm">View</p>
          <SiWindows11 />
        </ControlButton>

        <ControlButton>
          <p className="text-sm">Favorites</p>
          <GoHeartFill />
        </ControlButton>
      </div>
    </section>
  );
}

export default Controls;
