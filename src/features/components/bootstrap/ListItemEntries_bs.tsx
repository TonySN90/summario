import { AiOutlineDollar } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { IHotelTypes } from "../../../types/types";
import Rating from "./Rating_bs";

function ListItemEntries({ hotel }: { hotel: IHotelTypes }) {
  const { name, tripAdvisorRating, lowRate } = hotel;

  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <LuHotel style={{ minWidth: "16px" }} />
        <p className="fw-bold" style={{ fontSize: "15px" }}>
          {name}
        </p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <FaTripadvisor className="min-w-16" style={{ minWidth: "16px" }} />
        <Rating rating={tripAdvisorRating ?? 0} />
      </div>
      <div className="d-flex align-items-center gap-3">
        <AiOutlineDollar className="min-w-16" style={{ minWidth: "16px" }} />
        <p className="fw-bold" style={{ fontSize: "15px" }}>
          from ${Math.round(lowRate ?? 0)}
        </p>
      </div>
    </>
  );
}

export default ListItemEntries;
