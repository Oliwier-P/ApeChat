import { useEffect } from "react";

import "./style.scss";

import { ChatHeader as Header } from "../../components/ChatHeader";
import { ChatMessages as Messages } from "../../components/ChatMessages";
import { ChatList as List } from "../../components/ChatList";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";

export function Chat() {
  const { currentUser, fetchUserInfo }: any = useUserStore();

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
      <div className="chat_container">
        <List />
        <div className="chat_content">
          <Header />
          <Messages />
        </div>
      </div>
    </>
  );
}
