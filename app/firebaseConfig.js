// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,getReactNativePersistence,initializeAuth } from "firebase/auth";
import { getFirestore,collections } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJVWEDrsu4Dwy_gKh5f8JUgusLZROfQL4",
  authDomain: "fir-chat-9c7b7.firebaseapp.com",
  projectId: "fir-chat-9c7b7",
  storageBucket: "fir-chat-9c7b7.firebasestorage.app",
  messagingSenderId: "991429812173",
  appId: "1:991429812173:web:e7aba02fd5b454587e2e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usernameRef=collections(db,'users');
export const roomRef=collections(db,'rooms');