// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8ohZhd9lqY0BZdmcunbP62C_XqdVcLM",
  authDomain: "sentinel-auth-e7191.firebaseapp.com",
  databaseURL: "https://sentinel-auth-e7191-default-rtdb.firebaseio.com",
  projectId: "sentinel-auth-e7191",
  storageBucket: "sentinel-auth-e7191.firebasestorage.app",
  messagingSenderId: "912173288647",
  appId: "1:912173288647:web:0bdcf8027eaa80ade3c2e2",
  measurementId: "G-JF7P2N1KYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
