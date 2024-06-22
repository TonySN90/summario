import { GoHeart } from "react-icons/go";
import ListItemEntries from "../components/ListItemEntries";
import { useAppContext } from "../contexts/AppContext";
import { IHotelTypes } from "../types/types";

function ListItem({ hotel }: { hotel: IHotelTypes }) {
  const { setIsOpenModal } = useAppContext();

  const URL = `http://localhost:3000${hotel.thumbNailUrl}`;

  return (
    <div
      onClick={() => setIsOpenModal(true)}
      className="relative flex h-[90px] w-inherit rounded-md shadow-xl"
    >
      <div className=" w-[140px] rounded-l-md overflow-hidden">
        <img className="object-cover w-full h-full" src={URL} alt="" />
      </div>
      <div className="absolute bottom-1 left-1 flex justify-center items-center p-[6px] rounded-full bg-white">
        <GoHeart className="text-xl" />
      </div>
      <div className="flex flex-col justify-center pl-4 w-full rounded-r-md bg-white">
        <ListItemEntries hotel={hotel} />
      </div>
    </div>
  );
}

export default ListItem;
