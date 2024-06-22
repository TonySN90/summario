import { GoHeart } from "react-icons/go";
import ListItemEntries from "../components/ListItemEntries";

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
        <ListItemEntries />
      </div>
    </div>
  );
}

export default ListItem;
