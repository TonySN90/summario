import { MdClose } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";
import ListItem from "../list/ListItem";
import { IHotelTypes } from "../../types/types";

function Favorites() {
  const { isOpenFavourites, setIsOpenFavourites, favorites } = useAppContext();

  return (
    <div
      style={{ right: isOpenFavourites ? "-2px" : "-100%" }}
      className="fixed h-[100vh] top-0 w-[100%] sm:w-[60%] xl:w-[36%] z-10 bg-color_brand_02 transition-all duration-500 ease-in-out"
    >
      <div className="p-4">
        <div className="font-semibold text-xl mb-4">Favourites</div>
        {favorites.length === 0 ? (
          <div className="mt-4">No favorites yet</div>
        ) : (
          <div className="flex flex-col gap-2 h-[85vh] overflow-y-auto">
            {favorites.map((hotel: IHotelTypes) => (
              <ListItem
                key={hotel.id}
                hotel={hotel}
                removeBtn={true}
                favBtn={false}
              />
            ))}
          </div>
        )}
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsOpenFavourites(false), (document.body.style.overflow = "auto");
        }}
      >
        <MdClose className="absolute top-2 right-2 text-4xl animate-bounce" />
      </div>
    </div>
  );
}

export default Favorites;
