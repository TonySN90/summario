import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";

function ListItemEntries() {
  return (
    <>
      <div className="flex items-center gap-1">
        <LuHotel />
        <p className="font-semibold">Hotel Eagle Eye</p>
      </div>
      <div className="flex items-center gap-1">
        <FaTripadvisor />
        <p>4.5 von 5</p>
      </div>
      <div className="flex items-center gap-1">
        <AiOutlineDollar />
        <p className="font-bold">119</p>
      </div>
    </>
  );
}

export default ListItemEntries;
