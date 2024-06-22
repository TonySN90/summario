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

export enum LoadingStatusType {
  idle = "idle",
  loading = "loading",
  success = "success",
}
