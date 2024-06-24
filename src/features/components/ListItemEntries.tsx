import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { IHotelTypes } from "../../types/types";
import Rating from "./Rating";

function ListItemEntries({ hotel }: { hotel: IHotelTypes }) {
  const { name, tripAdvisorRating, lowRate } = hotel;

  return (
    <>
      <div className="flex items-center gap-3">
        <LuHotel className="min-w-[16px]" />
        <p className="font-bold text-sm pr-2">{name}</p>
      </div>
      <div className="flex items-center gap-3">
        <FaTripadvisor className="min-w-[16px]" />
        <Rating rating={tripAdvisorRating ?? 0} />
      </div>
      <div className="flex items-center gap-3">
        <AiOutlineDollar className="min-w-[16px]" />
        <p className="font-bold">from ${Math.round(lowRate ?? 0)}</p>
      </div>
    </>
  );
}

export default ListItemEntries;
