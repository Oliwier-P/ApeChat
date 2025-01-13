import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface User {
  id: string;
  username: string;
  email: string;
  blocked: [];
}

interface UserStore {
  currentUser: User | null;
  fetchUserInfo: (uid: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  fetchUserInfo: async (uid: string) => {
    if (!uid) return set({ currentUser: null });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();

        set({ currentUser: { id: uid, ...userData } as User });
      } else {
        set({ currentUser: null });
      }
    } catch (err) {
      console.error(err);
      set({ currentUser: null });
    }
  },
}));
