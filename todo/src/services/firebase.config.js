// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyA6SCrqn8dKUa7ZVxDei5hDapxQ4s39t2I",
  authDomain: "web-s-4c22d.firebaseapp.com",
  projectId: "web-s-4c22d",
  storageBucket: "web-s-4c22d.appspot.com",
  messagingSenderId: "353483137827",
  appId: "1:353483137827:web:0fe9843c43ab1259086296",
  measurementId: "G-SQPQ1JNBRP"
};

// Initialize Firebase
const app = initializeApp(config);
export const db = getFirestore(app);