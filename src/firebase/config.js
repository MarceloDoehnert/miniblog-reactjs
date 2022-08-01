import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMsWyDIV8iyX4HOyfuZ05fNkLk7Os1gpw",
  authDomain: "miniblog-c91ef.firebaseapp.com",
  projectId: "miniblog-c91ef",
  storageBucket: "miniblog-c91ef.appspot.com",
  messagingSenderId: "1044115816892",
  appId: "1:1044115816892:web:654012480b28f1bb722bb9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };