import { useAppContext } from "../contexts/AppContext";
import { IHotelTypes } from "../types/types";
import ListItem from "./ListItem";

function List() {
  const { hotelData } = useAppContext();
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center flex-wrap w-full pb-4">
        {hotelData.map((hotel: IHotelTypes) => (
          <ListItem key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default List;
