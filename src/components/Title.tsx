import { useAppContext } from "../contexts/AppContext";

function Title() {
  const { hotelData } = useAppContext();
  return (
    <section>
      <p className="text-xl font-semibold ">Seattle, USA</p>
      <p className="text-sm mb-3 text-color_brand_04">
        {hotelData.length} Hotels in Seattle
      </p>
    </section>
  );
}

export default Title;
