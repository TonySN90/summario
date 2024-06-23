import { createContext, useContext, useEffect, useState } from "react";
import { IContextTypes, IHotelTypes, LoadingStatusType } from "../types/types";

const AppContext = createContext<IContextTypes | undefined>(undefined);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(true);
  const [sort, setSort] = useState(true);
  const [isOpenFavourites, setIsOpenFavourites] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loadingStatus, setloadingStatus] = useState(LoadingStatusType.idle);
  const [currentHotel, setCurrentHotel] = useState({});

  const [favorites, setFavorites] = useState<IHotelTypes[]>([]);
  const [hotelData, setHotelData] = useState<IHotelTypes[]>([]);

  function sortHotels() {
    if (sort) {
      const sortedData = [...hotelData].sort((a, b) =>
        (a?.name || "").localeCompare(b?.name || "")
      );
      setHotelData(sortedData);
    } else {
      const sortedData = [...hotelData].sort((a, b) =>
        (b?.name || "").localeCompare(a?.name || "")
      );
      setHotelData(sortedData);
    }
  }

  function setFavorite(hotel: IHotelTypes) {
    if (favorites.includes(hotel))
      setFavorites(favorites.filter((fav) => fav !== hotel));
    else setFavorites((prevFavorites) => [...prevFavorites, hotel]);
  }

  useEffect(() => {
    // function sortHotels() {

    // const storedFavorites = localStorage.getItem("favorites");
    // if (storedFavorites) {
    //   setFavorites(JSON.parse(storedFavorites));
    // }

    // localStorage.setItem("favorites", JSON.stringify(favorites));

    async function getHotelData() {
      setloadingStatus(LoadingStatusType.loading);
      try {
        const response = await fetch("http://localhost:3000/api/hotels");
        const data = await response.json();

        const hotelData: IHotelTypes[] = [];

        data.forEach((hotel: IHotelTypes) => {
          const object = {
            id: hotel.id,
            name: hotel.name,
            city: hotel.city,
            lowRate: hotel.lowRate,
            address: hotel.address1,
            location: hotel.location,
            deepLink: hotel.deepLink,
            highRate: hotel.highRate,
            country: hotel.countryCode,
            thumbNailUrl: hotel.thumbNailUrl,
            shortDescription: hotel.shortDescription,
            confidenceRating: hotel.confidenceRating,
            tripAdvisorRating: hotel.tripAdvisorRating,
            locationDescription: hotel.locationDescription,
            tripAdvisorRatingUrl: hotel.tripAdvisorRatingUrl,
          };
          hotelData.push(object);
        });

        setHotelData(hotelData);
      } catch (error) {
        console.log(error);
      } finally {
        setloadingStatus(LoadingStatusType.idle);
      }
    }

    getHotelData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        view,
        setView,
        sort,
        setSort,
        favorites,
        setFavorites,
        isOpenFavourites,
        setIsOpenFavourites,
        isOpenModal,
        setIsOpenModal,
        loadingStatus,
        hotelData,
        currentHotel,
        setCurrentHotel,
        sortHotels,
        setFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
