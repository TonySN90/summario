import { GoHeart, GoHeartFill } from "react-icons/go";
import ListItemEntries from "../components/ListItemEntries";
import { useAppContext } from "../../contexts/AppContext";
import { IHotelTypes } from "../../types/types";
import { MdClose } from "react-icons/md";

function ListItem({
  hotel,
  removeBtn,
  favBtn,
}: {
  hotel: IHotelTypes;
  removeBtn?: boolean;
  favBtn?: boolean;
}) {
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
      className="relative flex h-[90px] w-inherit rounded-md shadow-xl cursor-pointer"
    >
      <div className=" w-[140px] rounded-l-md overflow-hidden">
        <img className="object-cover w-full h-full" src={URL} alt="" />
      </div>
      {favBtn && (
        <div
          onClick={(event) => handleClickFavorite(event)}
          className="absolute bottom-1 right-1 flex justify-center items-center p-[6px] rounded-full bg-white"
        >
          {isFavorite ? (
            <GoHeartFill className="text-color_brand_04 text-2xl" />
          ) : (
            <GoHeart className="text-color_brand_04 text-2xl" />
          )}
        </div>
      )}
      {removeBtn && (
        <div
          onClick={(event) => handleClickFavorite(event)}
          className="absolute bottom-2 right-2 bg-color_brand_04 rounded-full "
        >
          <MdClose className="text-2xl text-white" />
        </div>
      )}
      <div className="flex flex-col justify-center pl-4 w-full rounded-r-md bg-white">
        <ListItemEntries hotel={hotel} />
      </div>
    </div>
  );
}

export default ListItem;
