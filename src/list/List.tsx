import Spinner from "../components/Spinner";
import { useAppContext } from "../contexts/AppContext";
import { IHotelTypes, LoadingStatusType } from "../types/types";
import ListItem from "./ListItem";

function List() {
  const { hotelData, loadingStatus } = useAppContext();
  const isLoading = loadingStatus === LoadingStatusType.loading;

  if (isLoading) return <Spinner />;
  if (!hotelData.length) return <div>No hotels could be found</div>;

  return (
    <section className="mt-4">
      <div className="flex flex-col gap-2 justify-center flex-wrap w-full pb-4">
        {hotelData.map((hotel: IHotelTypes) => (
          <ListItem key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default List;
