import { MdClose } from "react-icons/md";
import { useAppContext } from "../../../contexts/AppContext";
import { IHotelTypes } from "../../../types/types";
import ListItem from "../../list/bootstrap/ListItem_bs";

function Favorites() {
  const { isOpenFavourites, setIsOpenFavourites, favorites } = useAppContext();

  return (
    <div
      style={{
        right: isOpenFavourites ? "0" : "-100%",
        backgroundColor: "var(--color_brand_02)",
        // width: "100%",
      }}
      className="position-fixed vh-100 top-0 z-10 favorites-size"
    >
      <div className="p-4 ">
        <div className="fw-bold fs-5 mb-4">Favourites</div>
        {favorites.length === 0 ? (
          <div className="mt-4">No favorites yet</div>
        ) : (
          <div className="d-flex flex-column gap-2 vh-85 overflow-auto">
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
          setIsOpenFavourites(false);
          document.body.style.overflow = "auto";
        }}
      >
        <MdClose
          className="position-absolute h1"
          style={{ top: "1rem", right: "1rem", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Favorites;
