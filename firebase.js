import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage"; 
import { signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBQ1iu0nzbu04OjYMDVy3xnxySzqiHZOJY",
  authDomain: "uniquecolorlabshop.firebaseapp.com",
  projectId: "uniquecolorlabshop",
  storageBucket: "uniquecolorlabshop.appspot.com",
  messagingSenderId: "480277488165",
  appId: "1:480277488165:web:04515b885182d3a6b955cc",
  measurementId: "G-6Q607TGC6M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseApp);
export { db, auth,storage, signOut };

export default firebase;