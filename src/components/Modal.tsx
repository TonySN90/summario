import { MdClose } from "react-icons/md";
import { useAppContext } from "../contexts/AppContext";
import Rating from "./Rating";
import { FaTripadvisor } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import getCountryName from "../helper";
import { IHotelTypes } from "../types/types";
import Map from "./Map";

function Modal() {
  const { setIsOpenModal, currentHotel } = useAppContext();

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

  function handleClick() {
    setIsOpenModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="fixed top-0 px-4 pt-10 w-full h-full z-10 bg-color_bg overflow-auto">
      <MdClose
        onClick={() => handleClick()}
        className="absolute top-2 right-2 text-4xl"
      />
      <div className="flex items-center flex-wrap gap-1 text-sm">
        <p>{`${city} • ${
          country ? getCountryName(country) : ""
        } • ${name} • ${locationDescription}`}</p>
      </div>

      <div className="my-4 w-full h-[35%] rounded-lg overflow-hidden">
        <img className="w-full" src={URL} alt="" />
      </div>
      <h1 className="text-2xl font-bold mb-2">{name}</h1>

      <p className="font-semibold">{tripAdvisorRating} of 5 at TripAdvisor</p>
      <div className="flex gap-1">
        <FaTripadvisor className="text-xl" />
        <Rating rating={tripAdvisorRating ?? 0} />
      </div>
      <div className="flex items-center justify-end gap-1 h-[80px]">
        <BiDollarCircle className="text-2xl mt-[2px]" />

        <p className="font-bold text-2xl">
          <span className="text-green-500">{Math.round(lowRate ?? 0)} $</span> -{" "}
          <span>{Math.round(highRate ?? 0)} $</span>
        </p>
      </div>

      <hr className="w-full h-[3px] bg-color_brand_03_tr2 my-3" />
      <p className="text-lg font-bold">Further information</p>
      <article>
        {shortDescription}...{" "}
        <a className="font-bold underline" href={deepLink} target="_blank">
          For more information follow the link
        </a>
      </article>

      <div className="flex gap-2 mt-6">
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
        className="flex items-center justify-center w-[100px] h-[40px] bg-color_brand_04 text-white font-bold rounded-md shadow-lg shadow-gray-500 my-4"
      >
        <p>Book</p>
      </a>
    </div>
  );
}

export default Modal;
