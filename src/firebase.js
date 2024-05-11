import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJHRNHnubzg19AtFUOKNA9tT0Z3IbhFBA",
  authDomain: "la-baratija.firebaseapp.com",
  projectId: "la-baratija",
  storageBucket: "la-baratija.appspot.com",
  messagingSenderId: "591185175259",
  appId: "1:591185175259:web:b0fcab6ed75a69b6a722fe",
  measurementId: "G-9LDGWGSKZT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);