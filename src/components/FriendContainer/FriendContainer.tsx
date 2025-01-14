import { FriendInfo } from "../FriendInfo/FriendInfo";
import "./style.scss";

export function FriendContainer() {
  return (
    <>
      <div className="friend_list">
        <FriendInfo username="Friend" />
      </div>
    </>
  );
}
