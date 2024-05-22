// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqVUU7EihPMIvE-DRAF4U3E3ffMzUGP8I",
  authDomain: "file-sharing-app-bcfa5.firebaseapp.com",
  projectId: "file-sharing-app-bcfa5",
  storageBucket: "file-sharing-app-bcfa5.appspot.com",
  messagingSenderId: "68008091882",
  appId: "1:68008091882:web:951908006e233529da7793",
  measurementId: "G-PBLKVWJ93R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);