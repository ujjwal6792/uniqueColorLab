// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBQ1iu0nzbu04OjYMDVy3xnxySzqiHZOJY",
  authDomain: "uniquecolorlabshop.firebaseapp.com",
  projectId: "uniquecolorlabshop",
  storageBucket: "uniquecolorlabshop.appspot.com",
  messagingSenderId: "480277488165",
  appId: "1:480277488165:web:04515b885182d3a6b955cc",
  measurementId: "G-6Q607TGC6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);