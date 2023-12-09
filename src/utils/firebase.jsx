import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_ERDSgtbVvyOtADxEfbiCeefIH-MHYFw",
  authDomain: "zcodedeneme.firebaseapp.com",
  projectId: "zcodedeneme",
  storageBucket: "zcodedeneme.appspot.com",
  messagingSenderId: "771353283448",
  appId: "1:771353283448:web:b0f69da3d3e4ac48aed68d",
  measurementId: "G-QQL01VLRDK"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default db;
