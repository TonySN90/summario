import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { IHotelTypes } from "../../../types/types";
import { useAppContext } from "../../../contexts/AppContext";
import ListItemEntries from "../../components/bootstrap/ListItemEntries_bs";

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
      className="position-relative d-flex h-70 w-inherit rounded-md shadow-xl"
      style={{ height: "90px", cursor: "pointer" }}
    >
      <div
        className="w-140 rounded-start overflow-hidden"
        style={{ width: "140px" }}
      >
        <img className="object-fit w-100 h-100" src={URL} alt="" />
      </div>
      {favBtn && (
        <div
          onClick={(event) => handleClickFavorite(event)}
          className="position-absolute d-flex justify-content-center align-items-center p-6 rounded-circle bg-white"
          style={{ bottom: "5px", right: "5px" }}
        >
          {isFavorite ? (
            <GoHeartFill className="text-color_brand_04 fs-2" />
          ) : (
            <GoHeart className="text-color_brand_04 fs-2" />
          )}
        </div>
      )}
      {removeBtn && (
        <div
          onClick={(event) => handleClickFavorite(event)}
          className="position-absolute rounded-circle"
          style={{
            bottom: "5px",
            right: "5px",
            backgroundColor: "var(--color_brand_04)",
          }}
        >
          <MdClose className="fs-2 text-white" />
        </div>
      )}
      <div className="d-flex flex-column justify-content-center ps-2 w-100 rounded-end bg-white">
        <ListItemEntries hotel={hotel} />
      </div>
    </div>
  );
}

export default ListItem;
