import { GoHeart } from "react-icons/go";
import ListItemEntries from "../components/ListItemEntries";
import { useAppContext } from "../contexts/AppContext";

function Tile() {
  const { setIsOpenModal } = useAppContext();
  return (
    <div
      onClick={() => setIsOpenModal(true)}
      className="relative w-[calc(50%-0.25rem)] md:w-[calc(33.1%-0.25rem)] bg-white rounded-md shadow-lg border-b-2 border-b-color_brand_05"
    >
      <img
        className="w-full rounded-t-md"
        src="http://localhost:3000/thumbnails/284304_50_t.jpg"
        alt="hotel thumbnail"
      />
      <div className="absolute top-1 right-1 flex justify-center items-center p-2 rounded-full bg-white">
        <GoHeart className="text-xl" />
      </div>
      <div className="flex flex-col justify-center p-4 w-full">
        <ListItemEntries />
      </div>
    </div>
  );
}

export default Tile;
