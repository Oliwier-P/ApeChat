import { useEffect, useState } from "react";

import "./style.scss";

import { ChatHeader as Header } from "../../components/ChatHeader";
import { ChatMessages as Messages } from "../../components/ChatMessages";
import { ChatList as List } from "../../components/ChatList";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import { Loading } from "../../components/Loading/Loading";
import { SearchFriendDialog } from "../../components/SearchFriendDialog/SearchFriendDialog";

export function Chat() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentUser, fetchUserInfo }: any = useUserStore();

  const handleDisplayAddFriend = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  return (
    <>
      {isOpen && <SearchFriendDialog handleDisplayAddFriend={handleDisplayAddFriend} />}
      {!currentUser ? (
        <Loading />
      ) : (
        <div className="chat_container">
          <List handleDisplayAddFriend={handleDisplayAddFriend} />
          <div className="chat_content">
            <Header />
            <Messages />
          </div>
        </div>
      )}
    </>
  );
}
