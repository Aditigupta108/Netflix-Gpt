// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWDVY6_iKHG4-3uuNDbNdr17mqNboaIog",
  authDomain: "netflixgpt-56182.firebaseapp.com",
  projectId: "netflixgpt-56182",
  storageBucket: "netflixgpt-56182.appspot.com",
  messagingSenderId: "153874840925",
  appId: "1:153874840925:web:4f36f791a4d453d9c7fcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();