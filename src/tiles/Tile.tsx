import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { LuHotel } from "react-icons/lu";

function Tile() {
  return (
    <div className="relative w-[calc(50%-0.25rem)] md:w-[calc(33.1%-0.25rem)] bg-white rounded-md shadow-lg border-b-2 border-b-color_brand_05">
      <img
        className="w-full rounded-t-md"
        src="http://localhost:3000/thumbnails/284304_50_t.jpg"
        alt="hotel thumbnail"
      />
      <div className="absolute top-1 right-1 flex justify-center items-center p-2 rounded-full bg-white">
        <GoHeart className="text-xl" />
      </div>
      <div className="flex flex-col justify-center p-4 w-full">
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

export default Tile;
