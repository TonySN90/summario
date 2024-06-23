import { GoHeart, GoHeartFill } from "react-icons/go";
import ListItemEntries from "../components/ListItemEntries";
import { useAppContext } from "../contexts/AppContext";
import { IHotelTypes } from "../types/types";

function Tile({ hotel }: { hotel: IHotelTypes }) {
  const { setIsOpenModal, setCurrentHotel, setFavorite, favorites } =
    useAppContext();

  const isFavorite = favorites.some(
    (fav) => (fav as IHotelTypes).id === hotel.id
  );

  const URL = `http://localhost:3000${hotel.thumbNailUrl}`;

  function handleClickItem() {
    setIsOpenModal(true);
    setCurrentHotel(hotel);
    document.body.style.overflow = "hidden";
  }

  function handleClickFavorite(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    setFavorite(hotel);
  }

  return (
    <div
      onClick={() => handleClickItem()}
      className="relative w-[calc(50%-0.25rem)] md:w-[calc(33.1%-0.25rem)] bg-white rounded-md shadow-lg border-b-2 border-b-color_brand_05"
    >
      <div className="w-full h-[130px]">
        <img
          className="object-cover h-full w-full rounded-t-md"
          src={URL}
          alt="hotel thumbnail"
        />
      </div>
      <div
        onClick={(event) => handleClickFavorite(event)}
        className="absolute top-1 right-1 flex justify-center items-center p-2 rounded-full bg-white"
      >
        {isFavorite ? (
          <GoHeartFill className="text-color_brand_04 text-xl" />
        ) : (
          <GoHeart className="text-color_brand_04 text-xl" />
        )}
      </div>
      <div className="flex flex-col justify-center align-center p-4 min-h-[120px] max-h-[140px]">
        <ListItemEntries hotel={hotel} />
      </div>
    </div>
  );
}

export default Tile;
