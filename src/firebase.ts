// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLoos9drd4SRtGuxXXv9sVt9fGY3xSO2o",
  authDomain: "auth-page-5b7e4.firebaseapp.com",
  projectId: "auth-page-5b7e4",
  storageBucket: "auth-page-5b7e4.appspot.com",
  messagingSenderId: "183747947481",
  appId: "1:183747947481:web:cab0bba132c023397787c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
