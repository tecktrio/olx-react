import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAwEtz2M5ynFxuy8ib0e3qUI5hjwgPTUnU",
  authDomain: "olx-app-c0f07.firebaseapp.com",
  projectId: "olx-app-c0f07",
  storageBucket: "olx-app-c0f07.appspot.com",
  messagingSenderId: "668607176454",
  appId: "1:668607176454:web:f1a4852bf9015623ccc887",
  measurementId: "G-VV3HH13S59"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export default app

