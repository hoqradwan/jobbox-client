// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLiNsX2UtroM1-6QFkbKF9QdBJGZ7nye4",
  authDomain: "jobbox-43a72.firebaseapp.com",
  projectId: "jobbox-43a72",
  storageBucket: "jobbox-43a72.appspot.com",
  messagingSenderId: "1072526213890",
  appId: "1:1072526213890:web:e7a1a7cfaba93df441b81b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
