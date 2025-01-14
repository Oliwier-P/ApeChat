import { FriendContainer } from "./FriendContainer/FriendContainer";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { SettingsAndLogout } from "./SettingsContainer/SettingsAndLogout";
import { UserInfo } from "./UserInfo/UserInfo";
import { useUserStore } from "../lib/userStore";

type ChatListProps = {
  handleDisplayAddFriend: () => void;
};

export function ChatList({ handleDisplayAddFriend }: ChatListProps) {
  const { currentUser }: any = useUserStore();

  return (
    <>
      <div className="chat_list">
        <UserInfo username={currentUser.username} />
        <SearchContainer handleDisplayAddFriend={handleDisplayAddFriend} />
        <FriendContainer />
        <SettingsAndLogout />
      </div>
    </>
  );
}
