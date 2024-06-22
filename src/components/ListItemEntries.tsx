import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { IHotelTypes } from "../types/types";
import Rating from "./Rating";

function ListItemEntries({ hotel }: { hotel: IHotelTypes }) {
  const { name, tripAdvisorRating, lowRate } = hotel;

  return (
    <>
      <div className="flex items-center gap-1">
        <LuHotel />
        <p className="font-bold text-sm">{name}</p>
      </div>
      <div className="flex items-center gap-1">
        <FaTripadvisor />
        <Rating rating={tripAdvisorRating ?? 0} />
      </div>
      <div className="flex items-center gap-1">
        <AiOutlineDollar />
        <p className="font-bold">{Math.round(lowRate ?? 0)}</p>
      </div>
    </>
  );
}

export default ListItemEntries;
