import "./style.scss";

import { db } from "../../lib/firebase";
import { query, where, collection, getDocs } from "firebase/firestore";

import { InputSearch } from "../InputSearch/InputSearch";
import { FriendInfo } from "../FriendInfo/FriendInfo";
import { AddButton } from "../AddButton/AddButton";
import { useState } from "react";
import { useUserStore } from "../../lib/userStore";

type SearchFriendDialogProps = {
  handleDisplayAddFriend: () => void;
};

export function SearchFriendDialog({ handleDisplayAddFriend }: SearchFriendDialogProps) {
  const { currentUser } = useUserStore();
  const [users, setUsers] = useState<string[]>([]);

  async function searchUsersByUsername(prefix: string) {
    if (prefix !== "") {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("username", ">=", prefix),
        where("username", "<=", prefix + "\uf8ff")
      );

      const querySnapshot = await getDocs(q);

      const results: string[] = querySnapshot.docs
        .map((doc) => doc.data().username)
        .filter((username) => username != currentUser?.username);

      setUsers(() => results);
    }
  }

  return (
    <>
      <>
        <div className="dialog_overlay">
          <div className="dialog">
            <div className="search_container">
              <InputSearch width="80%" onChange={searchUsersByUsername} />
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
