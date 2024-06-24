import { useAppContext } from "../../../contexts/AppContext";

function Title() {
  const { hotelData } = useAppContext();
  return (
    <section className="mb-1">
      <h2 className="h5 mb-0">Seattle, USA</h2>
      <p className="text-color_brand_04 ">
        {hotelData.length} Hotels in Seattle
      </p>
    </section>
  );
}

export default Title;
