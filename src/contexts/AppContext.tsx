import { createContext, useContext, useEffect, useState } from "react";
import { IContextTypes, IHotelTypes, LoadingStatusType } from "../types/types";

const AppContext = createContext<IContextTypes | undefined>(undefined);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(true);
  const [sort, setSort] = useState(true);
  const [isOpenFavourites, setIsOpenFavourites] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(LoadingStatusType.idle);

  const [favorites, setFavorites] = useState<object[]>([]);
  const [hotelData, setHotelData] = useState<object[]>([]);

  useEffect(() => {
    // const storedFavorites = localStorage.getItem("favorites");
    // if (storedFavorites) {
    //   setFavorites(JSON.parse(storedFavorites));
    // }

    // localStorage.setItem("favorites", JSON.stringify(favorites));

    async function getHotelData() {
      setIsLoading(LoadingStatusType.loading);
      try {
        const response = await fetch("http://localhost:3000/api/hotels");
        const data = await response.json();

        const hotelData: IHotelTypes[] = [];

        data.forEach((hotel: IHotelTypes) => {
          const object = {
            id: hotel.id,
            name: hotel.name,
            adress: hotel.adress1,
            city: hotel.city,
            country: hotel.country,
            location: hotel.location,
            lowRate: hotel.lowRate,
            heighRate: hotel.heighRate,
            confidenceRating: hotel.confidenceRating,
            thumbNailUrl: hotel.thumbNailUrl,
            tripAdvisorRating: hotel.tripAdvisorRating,
            tripAdvisorRatingUrl: hotel.tripAdvisorRatingUrl,
            deepLink: hotel.deepLink,
          };
          hotelData.push(object);
        });

        setHotelData(hotelData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(LoadingStatusType.idle);
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
        isLoading,
        hotelData,
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
