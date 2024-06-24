import { MdClose } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";
import Rating from "./Rating";
import { FaTripadvisor } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { IHotelTypes } from "../../types/types";
import Map from "./Map";
import { GoHeart, GoHeartFill } from "react-icons/go";
import getCountryName from "../../utils/helper";

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
    <div className="fixed top-0 left-0 px-4 pt-12 md:pt-20 pb-10 w-full h-full z-10 bg-color_bg md:bg-transparent md:backdrop-blur-lg overflow-auto">
      <MdClose
        onClick={() => handleClick()}
        className="absolute top-2 right-2 text-4xl cursor-pointer animate-bounce"
      />
      <div className="relative sm:w-11/12 md:w-[700px] m-auto md:bg-white md:p-8 rounded-lg md:shadow-2xl">
        <div className="flex items-center flex-wrap gap-1 text-sm">
          <p>{`${city} • ${
            country ? getCountryName(country) : ""
          } • ${name} • ${locationDescription}`}</p>
        </div>

        {/* image */}
        <div className="md:flex md:gap-3">
          <div className="my-4 md:w-[50%] max-h-[250px] rounded-lg overflow-hidden">
            <img className="w-full h-full object-cover" src={URL} alt="" />
          </div>

          {/* title */}
          <div className="flex flex-col justify-center md:w-[50%]">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">
                {tripAdvisorRating} of 5 at TripAdvisor
              </p>
              <div
                onClick={() => handleClickFavorite()}
                className="pr-4 cursor-pointer hover:animate-pulse"
              >
                {isFavorite ? (
                  <GoHeartFill className="text-color_brand_04 text-3xl" />
                ) : (
                  <GoHeart className="text-color_brand_04 text-3xl" />
                )}
              </div>
            </div>
            <div className="flex gap-1">
              <FaTripadvisor className="text-xl" />
              <Rating rating={tripAdvisorRating ?? 0} />
            </div>
            <div className="flex items-center justify-end gap-1 h-[80px]">
              <BiDollarCircle className="text-2xl mt-[2px]" />

              <p className="font-bold text-2xl">
                <span className="text-green-500">
                  {Math.round(lowRate ?? 0)} $
                </span>{" "}
                - <span>{Math.round(highRate ?? 0)} $</span>
              </p>
            </div>
          </div>
        </div>

        <hr className="w-full h-[3px] bg-color_brand_03_tr2 my-3" />
        <p className="text-lg font-bold">Further information</p>
        <article>
          {shortDescription}...{" "}
          <a className="font-bold underline" href={deepLink} target="_blank">
            For more information follow the link
          </a>
        </article>

        <div className="flex gap-2 mt-8 font-bold italic">
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
          className="flex items-center justify-center w-[100px] h-[40px] bg-color_brand_04 text-white font-bold rounded-md shadow-lg border-2 border-color_brand_04 shadow-gray-400 my-4
          hover:bg-white hover:text-color_brand_03 transition-all"
        >
          <span>Book</span>
        </a>
      </div>
    </div>
  );
}

export default Modal;
