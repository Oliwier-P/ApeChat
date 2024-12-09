import { useEffect } from "react";

import "./style.scss";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";

export function Chat() {
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <>
      <div>Chats</div>
    </>
  );
}
