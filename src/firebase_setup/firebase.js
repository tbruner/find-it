// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA37yDU2RmHT4B5F1cMXqR37bjE5usNVqU",
  authDomain: "find-it-167fe.firebaseapp.com",
  projectId: "find-it-167fe",
  storageBucket: "find-it-167fe.appspot.com",
  messagingSenderId: "288962882703",
  appId: "1:288962882703:web:e48740c4cdcfe7d667d4fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
