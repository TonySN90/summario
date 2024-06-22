export interface IContextTypes {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  sort: boolean;
  setSort: React.Dispatch<React.SetStateAction<boolean>>;
  setFavorites: React.Dispatch<React.SetStateAction<object[]>>;
  isOpenFavourites: boolean;
  setIsOpenFavourites: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: LoadingStatusType;
  favorites: object[];
  hotelData: object[];
}

export interface IHotelTypes {
  id?: number;
  name?: string;
  adress1?: string;
  city?: string;
  country?: string;
  location?: string;
  lowRate?: number;
  heighRate?: number;
  rating?: number;
  thumbnail?: string;
  tripAdvisorRating?: number;
  tripAdvisorRatingUrl?: string;
  deepLink?: string;
  confidenceRating?: number;
  thumbNailUrl?: string;
}

export enum LoadingStatusType {
  idle = "idle",
  loading = "loading",
  success = "success",
}
