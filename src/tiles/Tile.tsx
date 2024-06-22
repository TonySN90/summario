import { GoHeart } from "react-icons/go";
import ListItemEntries from "../components/ListItemEntries";
import { useAppContext } from "../contexts/AppContext";
import { IHotelTypes } from "../types/types";

function Tile({ hotel }: { hotel: IHotelTypes }) {
  const { setIsOpenModal } = useAppContext();

  const URL = `http://localhost:3000${hotel.thumbNailUrl}`;

  function handleClick() {
    setIsOpenModal(true);
  }

  return (
    <div
      onClick={() => handleClick()}
      className="relative w-[calc(50%-0.25rem)] md:w-[calc(33.1%-0.25rem)] bg-white rounded-md shadow-lg border-b-2 border-b-color_brand_05"
    >
      <div className="w-full h-[130px]">
        <img
          className="object-cover h-full w-full rounded-t-md"
          src={URL}
          alt="hotel thumbnail"
        />
      </div>
      <div className="absolute top-1 right-1 flex justify-center items-center p-2 rounded-full bg-white">
        <GoHeart className="text-xl" />
      </div>
      <div className="flex flex-col justify-center align-center p-4 min-h-[120px] max-h-[140px]">
        <ListItemEntries hotel={hotel} />
      </div>
    </div>
  );
}

export default Tile;
