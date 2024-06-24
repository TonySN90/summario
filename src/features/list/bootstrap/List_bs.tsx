import { useAppContext } from "../../../contexts/AppContext";
import { IHotelTypes, LoadingStatusType } from "../../../types/types";
import Spinner from "../../components/bootstrap/Spinner_bs";
import ListItem from "./ListItem_bs";

function List() {
  const { hotelData, loadingStatus } = useAppContext();
  const isLoading = loadingStatus === LoadingStatusType.loading;

  if (isLoading) return <Spinner />;
  if (!hotelData.length) return <div>No hotels could be found</div>;

  return (
    <section className="mt-4">
      <div className="d-flex flex-column gap-2 justify-content-center flex-wrap w-100 pb-4">
        {hotelData.map((hotel: IHotelTypes) => (
          <ListItem key={hotel.id} hotel={hotel} favBtn={true} />
        ))}
      </div>
    </section>
  );
}

export default List;
