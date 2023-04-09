import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARUH2NIh_gUw0USLM_Oofmqk4KsIaAZa0",
  authDomain: "webappexample-2f667.firebaseapp.com",
  projectId: "webappexample-2f667",
  storageBucket: "webappexample-2f667.appspot.com",
  messagingSenderId: "663046184251",
  appId: "1:663046184251:web:63d8f3c33806fee1bb2b1e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

const db = firebase.firestore();

export { db };