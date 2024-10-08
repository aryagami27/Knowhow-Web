// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAESLMyKRH-Ui9mg2PKJLFz-A2dERgnFAQ",
  authDomain: "knowhow-de66e.firebaseapp.com",
  projectId: "knowhow-de66e",
  storageBucket: "knowhow-de66e.appspot.com",
  messagingSenderId: "1000489135273",
  appId: "1:1000489135273:web:e5b59faeb991affd17cdb8",
  measurementId: "G-0VH3JL848J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it for use in your components
export const db = getFirestore(app);
