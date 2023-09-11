// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA7q3RN3EDj3z180rMJBxN3IzSDWHYCjg",
  authDomain: "podcast-platform-22117.firebaseapp.com",
  projectId: "podcast-platform-22117",
  storageBucket: "podcast-platform-22117.appspot.com",
  messagingSenderId: "707009631401",
  appId: "1:707009631401:web:a0fb582dc0b39418aa05b8",
  measurementId: "G-3BE3DRSHJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};
