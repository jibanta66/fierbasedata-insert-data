import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = { // ID

};

const app = initializeApp(firebaseConfig);// IINITIAL

export const db = getFirestore(app);// FIERSTORE COMPONENTS USE
