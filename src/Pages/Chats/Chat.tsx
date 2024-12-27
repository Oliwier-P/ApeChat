import { useEffect } from "react";

import "./style.scss";

import { ChatHeader as Header } from "../../components/ChatHeader";
import { ChatMessages as Messages } from "../../components/ChatMessages";
import { ChatList as List } from "../../components/ChatList";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import { Loading } from "../../components/Loading/Loading";

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

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <>
      {!currentUser ? (
        <Loading />
      ) : (
        <div className="chat_container">
          <List />
          <div className="chat_content">
            <Header />
            <Messages />
          </div>
        </div>
      )}
    </>
  );
}
