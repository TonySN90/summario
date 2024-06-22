import { useAppContext } from "../contexts/AppContext";
import { IHotelTypes } from "../types/types";
import Tile from "./Tile";

function Tiles() {
  const { hotelData } = useAppContext();

  return (
    <section className="mt-4">
      <div className="flex flex-wrap w-full gap-2 mb-4">
        {hotelData.map((hotel: IHotelTypes) => (
          <Tile hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </section>
  );
}

export default Tiles;
