import { MdClose } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useAppContext } from "../../../contexts/AppContext";
import { IHotelTypes } from "../../../types/types";
import getCountryName from "../../../utils/helper";
import Rating from "./Rating_bs";
import Map from "./Map_bs";

function Modal() {
  const { setIsOpenModal, currentHotel, setFavorite, favorites } =
    useAppContext();

  const {
    name,
    shortDescription,
    address,
    city,
    country,
    location,
    deepLink,
    thumbNailUrl,
    tripAdvisorRating,
    lowRate,
    highRate,
    locationDescription,
  } = currentHotel as IHotelTypes;

  const URL = `http://localhost:3000${thumbNailUrl}`;

  const isFavorite = favorites.some(
    (fav) => (fav as IHotelTypes).id === currentHotel?.id
  );

  function handleClick() {
    setIsOpenModal(false);
    document.body.style.overflow = "auto";
  }

  function handleClickFavorite() {
    if (currentHotel) setFavorite(currentHotel);
  }

  return (
    <div className="position-fixed top-0 start-0 px-4 pt-12 md-pt-20 pb-10 w-100 h-100 z-10 bg-color_bg overflow-auto modal-bg-filter">
      <MdClose
        role="button"
        onClick={() => handleClick()}
        className="position-absolute"
        style={{ top: "10px", right: "10px", fontSize: "35px" }}
      />
      <div className="width-modal position-relative sm-w-90 mx-auto rounded-lg md-shadow-lg">
        <div className="d-flex align-items-center flex-wrap gap-1 fs-6">
          <p>{`${city} • ${
            country ? getCountryName(country) : ""
          } • ${name} • ${locationDescription}`}</p>
        </div>

        <div className="modal-header-size">
          {/* Image */}
          <div className="my-4 rounded-lg overflow-hidden modal-full-size">
            <img
              className="w-100 object-cover"
              src={URL}
              alt="hotel thumbnail"
            />
          </div>

          {/* Title */}
          <div
            className="d-flex flex-column justify-content-center modal-title-size"
            style={{ paddingLeft: "10px" }}
          >
            <h1 className="fs-4 fw-bold mb-2">{name}</h1>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <p className="fw-semibold">
                {tripAdvisorRating} of 5 at TripAdvisor
              </p>
              <div onClick={() => handleClickFavorite()} className="pr-4">
                {isFavorite ? (
                  <GoHeartFill className="text-color_brand_04 fs-1" />
                ) : (
                  <GoHeart className="text-color_brand_04 fs-1" />
                )}
              </div>
            </div>
            <div className="d-flex gap-1">
              <FaTripadvisor className="fs-4" />
              <Rating rating={tripAdvisorRating ?? 0} />
            </div>
            <div className="d-flex align-items-center justify-content-end gap-1 h-80px">
              <BiDollarCircle className="fs-2 mt-1" />
              <p className="fw-bold fs-4">
                <span className="text-success">
                  {Math.round(lowRate ?? 0)} $
                </span>{" "}
                - <span>{Math.round(highRate ?? 0)} $</span>
              </p>
            </div>
          </div>
        </div>

        <hr className="w-100 h-3px bg-color_brand_03_tr2 my-3" />
        <p className="fs-5 fw-bold">Further information</p>
        <article>
          {shortDescription}...{" "}
          <a
            className="fw-bold text-decoration-underline"
            href={deepLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            For more information follow the link
          </a>
        </article>

        <div className="d-flex gap-2 mt-4 fw-bold fst-italic">
          <p>{address}</p>
          <p>•</p>
          <p>{city}</p>
          <p>•</p>
          <p>{country ? getCountryName(country) : ""}</p>
        </div>

        {location && <Map location={location} />}
        <a
          href={deepLink}
          target="_blank"
          className="d-flex align-items-center justify-content-center bg-color_brand_04 text-white fw-bold rounded-3 shadow-lg border-2 border-color_brand_04 my-4"
          style={{ height: "45px", width: "150px" }}
        >
          <span>Book</span>
        </a>
      </div>
    </div>
  );
}

export default Modal;
