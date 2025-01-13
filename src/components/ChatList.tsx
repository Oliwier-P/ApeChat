import { useEffect, useState } from "react";
import { FriendContainer } from "./FriendContainer/FriendContainer";
import { SearchContainer } from "./SearchContainer/SearchContainer";
import { SettingsAndLogout } from "./SettingsContainer/SettingsAndLogout";
import { UserInfo } from "./UserInfo/UserInfo";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";

export function ChatList() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userschats", currentUser!.id), (doc) => {
      const newChats = doc.data();
      console.log("Chats - ", newChats);
    });

    return () => {
      unSub();
    };
  }, [currentUser!.id]);

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
