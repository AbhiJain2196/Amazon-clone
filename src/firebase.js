import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYLXQnCYHfhAk2aflhBj3VsYutjf_NrGg",
  authDomain: "clone-c7725.firebaseapp.com",
  projectId: "clone-c7725",
  storageBucket: "clone-c7725.appspot.com",
  messagingSenderId: "789971668204",
  appId: "1:789971668204:web:bbc55587a4dc4e26dba9c9",
  measurementId: "G-B90B7PLPWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
