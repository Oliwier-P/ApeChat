import glass from "./../../assets/magnifying-glass.svg";
import "./style.scss";

type InputProps = {
  width: string;
};

export function InputSearch({ width }: InputProps) {
  return (
    <>
      <div className="search_container">
        <img src={glass} alt="magnifying-glass" />
        <input style={{ width: width }} className="searchbar" placeholder="Search" />
      </div>
    </>
  );
}
