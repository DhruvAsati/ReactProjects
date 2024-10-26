import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0by1QJet73dq0eLKXx-Q6mhR1d5C_g8Q",
  authDomain: "contactapp-f58d3.firebaseapp.com",
  projectId: "contactapp-f58d3",
  storageBucket: "contactapp-f58d3.appspot.com",
  messagingSenderId: "307309700295",
  appId: "1:307309700295:web:d5ea1fd9d32e3656b44ae2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
