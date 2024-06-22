import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { IHotelTypes } from "../types/types";
import Rating from "./Rating";

function ListItemEntries({ hotel }: { hotel: IHotelTypes }) {
  const { name, tripAdvisorRating, lowRate } = hotel;

  return (
    <>
      <div className="flex items-center gap-2">
        <LuHotel className="min-w-[16px]" />
        <p className="font-bold text-sm pr-2">{name}</p>
      </div>
      <div className="flex items-center gap-1">
        <FaTripadvisor className="min-w-[16px]" />
        <Rating rating={tripAdvisorRating ?? 0} />
      </div>
      <div className="flex items-center gap-1">
        <AiOutlineDollar className="min-w-[16px]" />
        <p className="font-bold">{Math.round(lowRate ?? 0)}</p>
      </div>
    </>
  );
}

export default ListItemEntries;
