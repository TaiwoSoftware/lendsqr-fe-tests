// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjc6j1MYrIb5g4l5WiscnK1RgUJuZ1bUo",
  authDomain: "main-lindersqr.firebaseapp.com",
  projectId: "main-lindersqr",
  storageBucket: "main-lindersqr.appspot.com",
  messagingSenderId: "1019604259206",
  appId: "1:1019604259206:web:3ab8bcdeeaadb1b4045c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };