import { GoHeart, GoHeartFill } from "react-icons/go";
import { IHotelTypes } from "../../../types/types";
import { useAppContext } from "../../../contexts/AppContext";
import ListItemEntries from "../../components/bootstrap/ListItemEntries_bs";

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
      className="position-relative bg-white rounded-2 shadow-lg overflow-hidden width-tiles"
      style={{ cursor: "pointer" }}
    >
      <div className="w-100" style={{ height: "130px" }}>
        <img
          className="h-100 w-100"
          src={URL}
          alt="hotel thumbnail"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        onClick={(event) => handleClickFavorite(event)}
        className="position-absolute d-flex justify-content-center align-items-center p-2 rounded-circle bg-white"
        style={{ top: "5px", right: "5px" }}
      >
        {isFavorite ? (
          <GoHeartFill className="text-color_brand_04 fs-4" />
        ) : (
          <GoHeart className="text-color_brand_04 fs-4" />
        )}
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ padding: "8px", marginLeft: "8px", minHeight: "120px" }}
      >
        <ListItemEntries hotel={hotel} />
      </div>
    </div>
  );
}

export default Tile;
