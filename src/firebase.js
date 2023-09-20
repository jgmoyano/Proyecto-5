// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCupF3gZH49SqUE2CV4-IZhKo0dwf7V2-E",
  authDomain: "restaurant-app-64d46.firebaseapp.com",
  projectId: "restaurant-app-64d46",
  storageBucket: "restaurant-app-64d46.appspot.com",
  messagingSenderId: "722027231099",
  appId: "1:722027231099:web:4b8e3593500b7fb9cd6fde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
