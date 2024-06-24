import { Spinner } from "react-bootstrap";
import { IHotelTypes, LoadingStatusType } from "../../types/types";
import { useAppContext } from "../../contexts/AppContext";
import Tile from "./Tile";

function Tiles() {
  const { hotelData, loadingStatus } = useAppContext();
  const isLoading = loadingStatus === LoadingStatusType.loading;

  if (isLoading) return <Spinner />;
  if (!hotelData.length) return <div>No hotels could be found</div>;

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
