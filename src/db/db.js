import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_j2ny1pw52koTEM3s-lW-iCIHUGbB1Mo",
  authDomain: "snowhome-a0dae.firebaseapp.com",
  projectId: "snowhome-a0dae",
  storageBucket: "snowhome-a0dae.appspot.com",
  messagingSenderId: "835117900786",
  appId: "1:835117900786:web:a05ab7eeb1d8827943416b"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
