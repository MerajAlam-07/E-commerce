
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNxkH3lLizKXIyM9Tk0yRtQ2fKNEDQQR0",
  authDomain: "myfirstproject-a413d.firebaseapp.com",
  projectId: "myfirstproject-a413d",
  storageBucket: "myfirstproject-a413d.appspot.com",
  messagingSenderId: "520792418455",
  appId: "1:520792418455:web:0fe7d3fde1709b90daa1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export  {fireDB,auth}