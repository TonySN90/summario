export interface IContextTypes {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  sort: boolean;
  setSort: React.Dispatch<React.SetStateAction<boolean>>;
  favorites: object[];
  setFavorites: React.Dispatch<React.SetStateAction<object[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
