import { MdClose } from "react-icons/md";
import { useAppContext } from "../contexts/AppContext";
import ListItemEntries from "./ListItemEntries";

function Favorites() {
  const { isOpenFavourites, setIsOpenFavourites, favorites, setIsOpenModal } =
    useAppContext();

  return (
    <div
      style={{ right: isOpenFavourites ? "0px" : "-290px" }}
      className="fixed h-[100vh] top-0 w-[280px] z-10 bg-color_brand_02 transition-all duration-500 ease-in-out"
    >
      <div className="p-4">
        <div className="font-semibold text-xl mb-4">Favourites</div>
        {favorites.length === 0 ? (
          <div className="mt-4">No favorites yet</div>
        ) : (
          <div className="h-[85vh] overflow-y-auto">
            {Array.from({ length: 16 }).map(() => (
              <div
                onClick={() => [
                  setIsOpenModal(true),
                  setIsOpenFavourites(false),
                ]}
                className="relative flex w-full h-[70px] bg-white mb-2 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-[70px] w-[70px]">
                  <img
                    className="object-cover h-full"
                    src="http://localhost:3000/thumbnails/62800_122_t.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center text-sm pl-2">
                  <ListItemEntries />
                </div>
                <div className="absolute bottom-1 right-1 bg-color_brand_04 rounded-full ">
                  <MdClose
                    className="text-2xl text-white"
                    onClick={() => console.log("clicked")}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div onClick={() => setIsOpenFavourites(false)}>
        <MdClose className="absolute top-2 right-2 text-4xl" />
      </div>
    </div>
  );
}

export default Favorites;
