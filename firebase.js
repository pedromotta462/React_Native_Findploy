// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { FIREBASE_API_KEY } from './config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "auth-369d4.firebaseapp.com",
  projectId: "auth-369d4",
  storageBucket: "auth-369d4.appspot.com",
  messagingSenderId: "434992521685",
  appId: "1:434992521685:web:d59b91c33abd077b45dd5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);