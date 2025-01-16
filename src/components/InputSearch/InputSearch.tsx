import glass from "./../../assets/magnifying-glass.svg";
import "./style.scss";

type InputProps = {
  width: string;
  onChange: (prefix: string) => void;
};

export function InputSearch({ width, onChange }: InputProps) {
  return (
    <>
      <div className="search_container">
        <img src={glass} alt="magnifying-glass" />
        <input
          style={{ width: width }}
          className="searchbar"
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}
