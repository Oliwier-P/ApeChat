import { FriendContainer } from "./FriendContainer/FriendContainer";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { SettingsAndLogout } from "./SettingsContainer/SettingsAndLogout";
import { UserInfo } from "./UserInfo/UserInfo";

export function ChatList() {
  return (
    <>
      <div className="chat_list">
        <UserInfo />
        <SearchContainer />
        <FriendContainer />
        <SettingsAndLogout />
      </div>
    </>
  );
}
