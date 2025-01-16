import { useEffect, useState } from "react";

import "./style.scss";

import { db } from "../../lib/firebase";
import { query, where, collection, getDocs } from "firebase/firestore";

import { FriendInfo } from "../FriendInfo/FriendInfo";
import { useUserStore } from "../../lib/userStore";

export function FriendContainer() {
  const { currentUser } = useUserStore();
  const [usernames, setUsernames] = useState<string[]>();

  const fetchUsersIds = async (currentUserId: string): Promise<any> => {
    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUserId)
    );
    const querySnapshot = await getDocs(q);

    const userIds = querySnapshot.docs.map((doc) => doc.data().participants).flat();

    return userIds.filter((id) => id != currentUser?.id);
  };

  const fetchUsernamesByIds = async (userIds: string[]): Promise<string[]> => {
    const arratUserIds = userIds.filter((userId) => userId != currentUser!.id);

    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("__name__", "in", arratUserIds));
    const querySnapshot = await getDocs(q);

    const usernames = querySnapshot.docs.map((doc) => doc.data().username);

    return usernames;
  };

  useEffect(() => {
    if (!currentUser) return;

    fetchUsersIds(currentUser.id).then((userIds) =>
      fetchUsernamesByIds(userIds).then((usernames) => setUsernames(() => usernames))
    );
  }, [currentUser]);

  return (
    <>
      <div className="friend_list">
        {usernames ? (
          usernames.map((username, index) => (
            <FriendInfo key={index} username={username} />
          ))
        ) : (
          <div>You have no freinds</div>
        )}
      </div>
    </>
  );
}
