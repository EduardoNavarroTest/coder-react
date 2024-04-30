// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJHRNHnubzg19AtFUOKNA9tT0Z3IbhFBA",
  authDomain: "la-baratija.firebaseapp.com",
  projectId: "la-baratija",
  storageBucket: "la-baratija.appspot.com",
  messagingSenderId: "591185175259",
  appId: "1:591185175259:web:b0fcab6ed75a69b6a722fe",
  measurementId: "G-9LDGWGSKZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);