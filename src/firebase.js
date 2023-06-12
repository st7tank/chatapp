
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBd3G2pguXBJmc8pWEP4aPzFDsUcx2tCEU",
  authDomain: "chat-f51d2.firebaseapp.com",
  projectId: "chat-f51d2",
  storageBucket: "chat-f51d2.appspot.com",
  messagingSenderId: "288142562876",
  appId: "1:288142562876:web:3dbfeb559f393547da5539"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();