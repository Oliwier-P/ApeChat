import "./style.scss";

import { InputSearch } from "../InputSearch/InputSearch";
import { FriendInfo } from "../FriendInfo/FriendInfo";
import { AddButton } from "../AddButton/AddButton";

type SearchFriendDialogProps = {
  handleDisplayAddFriend: () => void;
};

export function SearchFriendDialog({ handleDisplayAddFriend }: SearchFriendDialogProps) {
  const users: string[] = [];

  return (
    <>
      <>
        <div className="dialog_overlay">
          <div className="dialog">
            <div className="search_container">
              <InputSearch width="80%" />
              <div className="exit" onClick={handleDisplayAddFriend}>
                X
              </div>
            </div>
            <div className="list_container">
              {users.map((username, index) => (
                <div key={index} className="user_container">
                  <FriendInfo username={username} />
                  <AddButton onClick={() => {}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
