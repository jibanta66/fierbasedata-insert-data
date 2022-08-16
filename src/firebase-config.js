import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = { // ID
  apiKey: "AIzaSyBAM0lqNN02UpmIehJXXWDFOEoCyW7UpTQ",
  authDomain: "fierbasechat-b1b5d.firebaseapp.com",
  databaseURL: "https://fierbasechat-b1b5d-default-rtdb.firebaseio.com",
  projectId: "fierbasechat-b1b5d",
  storageBucket: "fierbasechat-b1b5d.appspot.com",
  messagingSenderId: "256763580850",
  appId: "1:256763580850:web:90d2cb3fdac3e7900e14ab",
  measurementId: "G-GN4ZT0QKGX"
};

const app = initializeApp(firebaseConfig);// IINITIAL

export const db = getFirestore(app);// FIERSTORE COMPONENTS USE
