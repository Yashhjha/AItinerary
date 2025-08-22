// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBWuTKGJjNbjoF3pAAsSHIJtPiKNwyugA",
  authDomain: "tripper-46d9b.firebaseapp.com",
  projectId: "tripper-46d9b",
  storageBucket: "tripper-46d9b.appspot.com",
  messagingSenderId: "87824986896",
  appId: "1:87824986896:web:92ba23286132e9216e6b95",
  measurementId: "G-JGEMLXWQ9N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
