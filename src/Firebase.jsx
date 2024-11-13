// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAysqkod1o7C9kE6Q2R3WnQGMztqTTAZVA",
  authDomain: "practice-set-d077b.firebaseapp.com",
  projectId: "practice-set-d077b",
  storageBucket: "practice-set-d077b.firebasestorage.app",
  messagingSenderId: "811764569196",
  appId: "1:811764569196:web:fdbf15670375d3445eb449",
  measurementId: "G-K6CB1F1X75",
  databaseURL:"https://practice-set-d077b-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);