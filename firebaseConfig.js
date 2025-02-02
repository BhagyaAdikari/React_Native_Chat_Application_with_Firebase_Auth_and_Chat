// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJVWEDrsu4Dwy_gKh5f8JUgusLZROfQL4",
  authDomain: "fir-chat-9c7b7.firebaseapp.com",
  projectId: "fir-chat-9c7b7",
  storageBucket: "fir-chat-9c7b7.appspot.com", // Corrected storageBucket
  messagingSenderId: "991429812173",
  appId: "1:991429812173:web:e7aba02fd5b454587e2e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
export const db = getFirestore(app);

// Firestore Collection References
export const usersRef = collection(db, 'users'); // Corrected collection reference
export const roomsRef = collection(db, 'rooms'); // Corrected collection reference