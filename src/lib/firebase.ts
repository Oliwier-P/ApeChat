// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "apechat-7bbee.firebaseapp.com",
  projectId: "apechat-7bbee",
  storageBucket: "apechat-7bbee.firebasestorage.app",
  messagingSenderId: "563644082898",
  appId: "1:563644082898:web:dc94456317ca2a6648db0b",
  measurementId: "G-J68ZD6EYRC",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
