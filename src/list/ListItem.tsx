import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { LuHotel } from "react-icons/lu";

function ListItem() {
  return (
    <div className="relative flex h-[100px] w-inherit rounded-md shadow-xl">
      <img
        className="h-full rounded-l-md"
        src="http://localhost:3000/thumbnails/62800_122_t.jpg"
        alt=""
      />
      <div className="absolute bottom-1 left-1 flex justify-center items-center p-2 rounded-full bg-white">
        <GoHeart className="text-xl" />
      </div>
      <div className="flex flex-col justify-center pl-4 w-full rounded-r-md bg-white">
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
      </div>
    </div>
  );
}

export default ListItem;
