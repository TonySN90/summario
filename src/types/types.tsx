export interface IContextTypes {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  sort: boolean;
  setSort: React.Dispatch<React.SetStateAction<boolean>>;
}
