// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGHqpuO8Cel6tcEeYzJjkXP8EjFleH5b4",
  authDomain: "pantry-tracker-94339.firebaseapp.com",
  projectId: "pantry-tracker-94339",
  storageBucket: "pantry-tracker-94339.appspot.com",
  messagingSenderId: "296641397251",
  appId: "1:296641397251:web:631f1ae9557502d3110436",
  measurementId: "G-0QEZ2FCD61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};