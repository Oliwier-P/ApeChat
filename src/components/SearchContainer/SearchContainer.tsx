import { AddButton } from "../AddButton/AddButton";
import { InputSearch } from "../InputSearch/InputSearch";
import "./style.scss";

type SearchContainerProps = {
  handleDisplayAddFriend: () => void;
};

export function SearchContainer({ handleDisplayAddFriend }: SearchContainerProps) {
  return (
    <>
      <div className="friend_search">
        <InputSearch width="100%" />
        <AddButton onClick={handleDisplayAddFriend} />
      </div>
    </>
  );
}
