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
  loadingStatus: LoadingStatusType;
  currentHotel: IHotelTypes | null;
  setCurrentHotel: React.Dispatch<React.SetStateAction<IHotelTypes | object>>;
  sortHotels: () => void;
  setFavorite: (object: IHotelTypes) => void;
  favorites: object[];
  hotelData: object[];
}

export interface IHotelTypes {
  id?: string;
  name?: string;
  address1?: string;
  address?: string;
  city?: string;
  countryCode?: string;
  country?: string;
  location?: { latitude: number; longitude: number };
  lowRate?: number;
  highRate?: number;
  rating?: number;
  thumbnail?: string;
  tripAdvisorRating?: number;
  tripAdvisorRatingUrl?: string;
  deepLink?: string;
  confidenceRating?: number;
  thumbNailUrl?: string;
  shortDescription?: string;
  locationDescription?: string;
  isFavorite?: boolean;
}

export enum LoadingStatusType {
  idle = "idle",
  loading = "loading",
  success = "success",
}
