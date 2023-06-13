import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "codershop-a1927.firebaseapp.com",
  projectId: "codershop-a1927",
  storageBucket: "codershop-a1927.appspot.com",
  messagingSenderId: "323162829591",
  appId: "1:323162829591:web:2366d666ccb15dbd227d52",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);