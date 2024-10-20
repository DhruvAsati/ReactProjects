// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxNBjSIG9m_A4BmYkRyA5H5rEpu25WhCo",
  authDomain: "react-1f73e.firebaseapp.com",
  projectId: "react-1f73e",
  storageBucket: "react-1f73e.appspot.com",
  messagingSenderId: "506529537806",
  appId: "1:506529537806:web:9a7e019266e67c4f08815f",
  measurementId: "G-DM8WKPCW6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider()