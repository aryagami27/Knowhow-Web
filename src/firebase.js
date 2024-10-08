// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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