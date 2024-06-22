export interface IContextTypes {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  sort: boolean;
  setSort: React.Dispatch<React.SetStateAction<boolean>>;
  favorites: object[];
  setFavorites: React.Dispatch<React.SetStateAction<object[]>>;
  isOpenFavourites: boolean;
  setIsOpenFavourites: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
