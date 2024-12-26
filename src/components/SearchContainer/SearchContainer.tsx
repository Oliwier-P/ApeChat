import "./style.scss";
import glass from "./../../assets/magnifying-glass.svg";

export function SearchContainer() {
  return (
    <>
      <div className="friend_search">
        <div className="search_container">
          <img src={glass} alt="magnifying-glass" />
          <input className="searchbar" placeholder="Search" />
        </div>
        <button className="add_friend">+</button>
      </div>
    </>
  );
}
