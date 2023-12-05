import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClt4joZ2tZuqK2JDVAjC9qzaspKymruk4",
  authDomain: "food-app-dc5e4.firebaseapp.com",
  projectId: "food-app-dc5e4",
  storageBucket: "food-app-dc5e4.appspot.com",
  messagingSenderId: "51475562559",
  appId: "1:51475562559:web:57907a0e7b416f789eb88a",
  measurementId: "G-JME78HRCSP"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
