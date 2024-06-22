import { MdClose } from "react-icons/md";
import { useAppContext } from "../contexts/AppContext";

function Modal() {
  const { setIsOpenModal } = useAppContext();

  return (
    <div className="fixed top-0 p-4 w-full h-full z-10 bg-color_brand_02">
      <MdClose
        onClick={() => setIsOpenModal(false)}
        className="absolute top-2 right-2 text-4xl"
      />
      <h1 className="text-2xl font-bold">Hotel Eagle Eye</h1>
      <p className="text-sm">4.5 von 5</p>

      <div className="my-4 rounded-lg overflow-hidden">
        <img
          className="w-full"
          src="http://localhost:3000/thumbnails/284304_50_t.jpg"
          alt=""
        />
      </div>

      <article>
        With a stay at Motif Seattle, you will be centrally located in Seattle,
        steps from 5th Avenue Theater and minutes from Pike Place Market. This
        4-star hotel is within
      </article>
      <p className="my-4 text-2xl font-bold">119$</p>

      <button>Book</button>
    </div>
  );
}

export default Modal;
